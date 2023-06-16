import initReplayService from './initReplayService';
import initSentry from './initSentry';

const initTrackers = async () => {
  await initReplayService();
  initSentry();
};

export default initTrackers;
