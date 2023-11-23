export default {
  routes: [
    {
     method: 'POST',
     path: '/editorjs/uploadImage',
     handler: 'editorjs.uploadImage',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
     method: 'POST',
     path: '/editorjs/uploadVideo',
     handler: 'editorjs.uploadVideo',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
     method: 'POST',
     path: '/editorjs/uploadFile',
     handler: 'editorjs.uploadFile',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
     method: 'POST',
     path: '/editorjs/fetchUrl',
     handler: 'editorjs.fetchUrl',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
