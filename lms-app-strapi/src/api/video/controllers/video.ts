/**
 * video controller
 */

import { factories } from '@strapi/strapi';
import axios from 'axios';
import { Context } from 'koa';

export default factories.createCoreController('api::video.video', ({ strapi }) => ({
  async getByShortCode() {
    const ctx = strapi.requestContext.get();

    try {
      const { shortCode } = ctx.request.params;
      if (!shortCode) {
        return ctx.badRequest('shortCode is missing');
      }

      const res = await strapi
        .query('api::video.video')
        .findOne({
          where: { shortCode },
        });

      if (!res) {
        return ctx.notFound('No results found');
      }

      if (!res.hls) {
        return ctx.response.badImplementation('Can`t find video url');
      }

      const result = await axios.get(res.hls);

      ctx.set('accept-ranges', 'application/vnd.apple.mpegurl');
      return ctx.body = result.data;
    } catch (e) {
      console.error(e);
      return ctx.badRequest('Error');
    }
  },
}));
