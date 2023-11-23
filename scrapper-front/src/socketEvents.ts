const NOTIFICATIONS_COUNT = 'notifications:count';
const NOTIFICATIONS_COUNT_GET = 'notifications:count:get';
const socketEvents = {
  listen: {
    NOTIFICATIONS_COUNT,
  },
  emit: {
    NOTIFICATIONS_COUNT_GET,
  },
};
export default socketEvents;
