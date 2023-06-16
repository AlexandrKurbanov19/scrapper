import { Strapi } from '@strapi/strapi';
import customGraphql from './custom-graphql';
import { Roles } from './constants/roles';
import generateUserPassword from './utils/generateUserPassword';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register: async function ({strapi}: { strapi: Strapi }) {
    const extensionService = strapi.plugin('graphql').service('extension');

    customGraphql.forEach((customGraphqlExtension: any) => {
      if (typeof customGraphqlExtension === 'function') {
        extensionService.use(customGraphqlExtension(strapi));
      } else {
        extensionService.use(customGraphqlExtension);
      }
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(
    { strapi },
  ) {
  },
};
