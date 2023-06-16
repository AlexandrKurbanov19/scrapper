'use strict';

import { Strapi } from '@strapi/strapi';

/**
 * A set of functions called "actions" for `editorjs`
 */
import { v4 as uuidv4 } from 'uuid';

import fs from 'fs';

import download from 'download';

import os from 'os';

import mime from 'mime-types';
import { EditorJsService } from '../services/editorjs';

const tempDir = os.tmpdir();

export default ({ strapi }: { strapi: Strapi }) => ({
  // Загрузка изображения из бинарного контента
  uploadImage: async (ctx) => {
    const fileService: EditorJsService = strapi.service('api::editorjs.editorjs');
    try {
      const { image } = ctx.request.files;

      const detectedMimeType = await fileService.getMimeTypeFromFile(image.path);

      const allowedMimeTypes = strapi.config.get('fileUpload.allowedFileTypes.images');
      const isImage = allowedMimeTypes.includes(detectedMimeType);

      const type = 'images';

      if (!isImage) {
        ctx.body = {
          'success': 0,
          'error': 'Not allowed image type',
        };
        return;
      }

      const preparedFile = await fileService.prepareFileToUpload(image.path, type);
      await fileService.uploadFileToS3(preparedFile);
      const baseUrl = strapi.config.get('fileUpload.s3.baseUrl');

      ctx.body = {
        'success': 1,
        'file': {
          'url': `${baseUrl}${preparedFile.fileName}`,
          name: image.name,
          size: preparedFile.size,
          title: image.name,
        },
      };
    } catch (err) {
      console.error(err);
      ctx.body = {
        'success': 0,
        'error': 'Error while uploading',
      };
    }
  },
  // Загрузка изображения из бинарного контента
  uploadVideo: async (ctx, next) => {
    const fileService: EditorJsService = strapi.service('api::editorjs.editorjs');
    try {
      const { file: video } = ctx.request.files;

      const detectedMimeType = await fileService.getMimeTypeFromFile(video.path);

      const allowedMimeTypes = strapi.config.get('fileUpload.allowedFileTypes.videos');
      const isVideo = allowedMimeTypes.includes(detectedMimeType);

      const type = 'videos';

      if (!isVideo) {
        ctx.body = {
          'success': 0,
          'error': 'Not allowed video type',
        };
        return;
      }

      const preparedFile = await fileService.prepareFileToUpload(video.path, type);
      await fileService.uploadFileToS3(preparedFile);
      const baseUrl = strapi.config.get('fileUpload.s3.baseUrl');
      const videoStreamingBaseUrl = strapi.config.get('server.videoStreamingBaseUrl');

      const videoUrl = `${baseUrl}${preparedFile.fileName}`;
      const shortCode = uuidv4();

      await strapi.entityService.create('api::video.video', {
        data: {
          shortCode,
          filename: preparedFile.clearFileName,
          originalVideoUri: videoUrl,
          thumb: `${videoStreamingBaseUrl}/thumb/${preparedFile.clearFileName}/thumb-1000.jpg`,
          hls: `${videoStreamingBaseUrl}/hls/${preparedFile.clearFileName},.urlset/master.m3u8`,
        },
      });

      const selfBaseUrl = strapi.config.get('server.selfBaseUrl');

      ctx.body = {
        'success': 1,
        'file': {
          'url': `${selfBaseUrl}/api/video/byShortCode/${shortCode}/master.m3u8`,
          name: video.name,
          size: preparedFile.size,
          title: video.name,
        },
      };
    } catch (err) {
      console.error(err);
      ctx.body = {
        'success': 0,
        'error': 'Error while uploading',
      };
    }
  },
  // Загрузка файла из бинарного контента
  uploadFile: async (ctx, next) => {
    const fileService: EditorJsService = strapi.service('api::editorjs.editorjs');

    const formatData = (data) => {
      return {
        path: data.path,
        type: data.type,
        fileName: `attachments/${uuidv4()}.${data.name.split('.').splice(-1)[0]}`,
        clearFileName: data.name,
        size: data.size,
        mime: data.type,
      };
    };

    try {
      const { file } = ctx.request.files;
      const preparedFile = formatData(file);
      await fileService.uploadFileToS3(preparedFile);
      const baseUrl = strapi.config.get('fileUpload.s3.baseUrl');

      ctx.body = {
        'success': 1,
        'file': {
          'url': `${baseUrl}${preparedFile.fileName}`,
          name: file.name,
          size: preparedFile.size,
          title: file.name,
        },
      };
    } catch (err) {
      console.error(err);
      ctx.body = err;
    }
  },
  // Загрузка изображения по ссылке
  fetchUrl: async (ctx, next) => {
    const fileService: EditorJsService = strapi.service('api::editorjs.editorjs');
    try {
      const { url } = ctx.request.body;

      const fileMime = mime.lookup(url);

      const allowedFileTypes = strapi.config.get('fileUpload.allowedFileTypes.images');

      if (!allowedFileTypes.includes(fileMime)) {
        ctx.body = {
          'success': 0,
        };

        return;
      }

      const baseUrl = strapi.config.get('fileUpload.s3.baseUrl');

      // Если это файл с нашего хранилища, то сразу отвечаем окей
      if (url && String(url).indexOf(baseUrl) === 0) {
        ctx.body = {
          'success': 1,
          'file': {
            'url': url,
          },
        };

        return;
      }

      const dest = `${tempDir}/${uuidv4()}`;
      // Возвращает Buffer, а нам надо знать путь до файла, а именно имя файла.
      // Эта либа берёт имя файла или из пути или из header и ещё черт пойми откуда, поэтому ниже читаем директорию куда скачали файл
      await download(url, dest);

      // Читаем директорию куда закачали файл
      const x = fs.readdirSync(dest);
      // Название директории генерируемое и файл должен быть один.
      const filePath = `${dest}/${x[0]}`;

      const preparedFile = await fileService.prepareFileToUpload(filePath, 'images');

      await fileService.uploadFileToS3(preparedFile);

      // Удаляем скачанный временный файл и его папку
      fs.unlinkSync(filePath);
      fs.rmdirSync(dest);

      ctx.body = {
        'success': 1,
        'file': {
          'url': `${baseUrl}${preparedFile.fileName}`,
        },
      };
    } catch (err) {
      console.error(err);
      ctx.body = err;
    }
  },
});
