export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  selfBaseUrl: env('SELF_BASE_URL', 'http://localhost:1337'),
  videoStreamingBaseUrl: env('VIDEO_STREAMING_BASE_URL', 'https://video.den-nsk.ru'),
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
