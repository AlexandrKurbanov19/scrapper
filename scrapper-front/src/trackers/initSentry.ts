import * as Sentry from '@sentry/react';
import { CaptureConsole } from '@sentry/integrations';
import { getDsnSentry, getRelease } from '../env';

const iniSentry = () => {
  const dsn = getDsnSentry();
  if (!dsn) {
    return;
  }

  Sentry.init({
    dsn,
    environment: process.env.NODE_ENV,
    release: getRelease(),
    integrations: [new CaptureConsole(
      {
        levels: ['error', 'assert'],
      },
    )],
    tracesSampleRate: 1.0,
  });
};

export default iniSentry;
