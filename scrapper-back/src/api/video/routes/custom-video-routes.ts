export default {
  routes: [
    {
     method: 'GET',
     path: '/video/byShortCode/:shortCode/master.m3u8',
     handler: 'video.getByShortCode',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
