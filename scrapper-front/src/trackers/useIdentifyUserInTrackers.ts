import { useEffect } from 'react';

import useStore from 'domain/modelLayer/store/useStore';
import Tracker from '@openreplay/tracker';
import { Container } from 'typedi';
import * as Sentry from '@sentry/browser';
import { getDsnSentry } from '../env';

const useIdentifyUserInTrackers = () => {
  const dsn = getDsnSentry();
  const replayTracker = Container.get(Tracker);

  const { profileStore: { profile } } = useStore();

  const replayTrackerSessionURL = replayTracker?.getSessionURL();

  useEffect(() => {
    if (!replayTracker) {
      return;
    }

    if (profile) {
      replayTracker.setUserID(`${profile.fullName} (${profile.role.name}) (ID ${profile.id})`);
      replayTracker.setMetadata('userId', profile.id);
      replayTracker.setMetadata('fullName', profile.fullName);
      replayTracker.setMetadata('role', profile.role.name);
      replayTracker.setMetadata('email', profile.email);
    }
  }, [profile, replayTracker]);

  useEffect(() => {
    if (!dsn) {
      return;
    }

    if (profile) {
      Sentry.setUser({
        email: profile.email,
        username: profile.fullName,
        role: profile.role.name,
        replayTrackerSessionURL,
      });
    } else {
      Sentry.configureScope((scope) => scope.setUser(null));
    }
  }, [replayTrackerSessionURL, dsn, profile]);
};

export default useIdentifyUserInTrackers;
