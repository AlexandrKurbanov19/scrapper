import Tracker from '@openreplay/tracker';
import trackerAssist from '@openreplay/tracker-assist/cjs';

import { Container } from 'typedi';
import { getReplayIngestPoint, getReplayProjectKey } from '../env';

const initReplayService = async () => {
  Container.set(Tracker, undefined);

  const options = {
    projectKey: getReplayProjectKey(),
    ingestPoint: getReplayIngestPoint(),
  };

  const canUseReplay = options.projectKey && options.ingestPoint;

  if (!canUseReplay) {
    return;
  }

  const tracker = new Tracker({
    __DISABLE_SECURE_MODE: process.env.NODE_ENV === 'development',
    projectKey: options.projectKey,
    ingestPoint: options.ingestPoint,
    onStart: () => {
      // eslint-disable-next-line no-console
      console.info('replay sessionURL', tracker.getSessionURL());
    },
  });

  Container.set(Tracker, tracker);

  const getCanUseAssist = async () => {
    const sessionId = tracker.getSessionID();
    const peerID = `${getReplayProjectKey()}-${sessionId}`;

    const isOnline = ('onLine' in navigator) && navigator.onLine;
    if (!isOnline) {
      return false;
    }

    return new Promise(((resolve) => {
      const sessionInfo = JSON.stringify({
        sessionID: sessionId,
        projectKey: getReplayProjectKey(),
      });

      const { host } = new URL(getReplayIngestPoint());

      const sessionInfoQuery = encodeURIComponent(sessionInfo);

      try {
        const ws = new WebSocket(`wss://${host}/ws-assist/socket/?peerId=${peerID}&identity=session&sessionInfo=${sessionInfoQuery}&EIO=4&transport=websocket`);
        ws.addEventListener('close', () => {
          ws.close();
          resolve(false);
        });
        ws.addEventListener('message', () => {
          ws.close();
          resolve(true);
        });
        ws.addEventListener('error', () => {
          ws.close();
          resolve(false);
        });
        ws.addEventListener('open', () => {
          ws.close();
          resolve(true);
        });
      } catch (e) {
        resolve(false);
      }
    }));
  };

  const canUseAssist = await getCanUseAssist();

  if (!canUseAssist) {
    console.error('Не могу запустить replay assist');
  }

  if (canUseAssist) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    tracker.use(trackerAssist({
      callConfirm: {
        text: 'Принять входящий звонок?',
        confirmBtn: {
          innerHTML: 'Ответить',
        },
        declineBtn: {
          innerHTML: 'Отклонить',
        },
      },
      controlConfirm: {
        text: 'Разрешить удалённое управление?',
        confirmBtn: {
          innerHTML: 'Да',
        },
        declineBtn: {
          innerHTML: 'Отклонить',
        },
      },
      recordingConfirm: {
        text: 'Разрешить удалённое запись?',
        confirmBtn: {
          innerHTML: 'Да',
        },
        declineBtn: {
          innerHTML: 'Отклонить',
        },
      },
    }));
  }

  await tracker.start();
};

export default initReplayService;
