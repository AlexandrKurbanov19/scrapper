import { Strapi } from '@strapi/strapi';
import { AuditLogService } from './api/audit-log/services/audit-log';
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
    const auditLogService: AuditLogService = strapi.service('api::audit-log.audit-log');

    strapi.db.lifecycles.subscribe({
      async beforeCreate(event) {
        if (event.model.uid === 'api::student.student') {
          const email = event.params.data.email;

          const [studentRole] = await strapi.query('plugin::users-permissions.role').findMany({
            filters: {
              name: Roles.Student,
            },
            limit: 1,
          });

          if (!studentRole) {
            throw new Error('Can`t find role');
          }

          const newPassword = generateUserPassword();

          event.params.data.user = await strapi.plugins['users-permissions'].services.user.add({
            blocked: false,
            username: email,
            email: email,
            password: newPassword,
            provider: 'local',
            role: studentRole,
          });
        }

        if (event.model.uid === 'api::parent.parent') {
          const email = event.params.data.email;

          const [parentRole] = await strapi.query('plugin::users-permissions.role').findMany({
            filters: {
              name: Roles.Parent,
            },
            limit: 1,
          });

          if (!parentRole) {
            throw new Error('Can`t find role');
          }

          const newPassword = generateUserPassword();

          event.params.data.user = await strapi.plugins['users-permissions'].services.user.add({
            blocked: false,
            username: email,
            email: email,
            password: newPassword,
            provider: 'local',
            role: parentRole.id,
          });
        }
      },
      async afterCreate(event) {
        try {
          await auditLogService.fromAfterCreate(event);
        } catch (e) {
          console.error(e);
        }
      },
      async beforeUpdate(event) {
        if (event.model.uid === 'api::student.student') {
          const email = event.params.data.email;
          const studentId = event.params.where.id;

          const student = await strapi.query('api::student.student').findOne({
            where: {
              id: studentId,
            },
            populate: {
              user: true,
            }
          });

          await strapi.plugins['users-permissions'].services.user.edit(student.user.id, {
            email: email,
            username: email,
          });
        }

        if (event.model.uid === 'api::parent.parent') {
          const email = event.params.data.email;
          const parentId = event.params.where.id;

          const parent = await strapi.query('api::parent.parent').findOne({
            where: {
              id: parentId,
            },
            populate: {
              user: true,
            }
          });

          await strapi.plugins['users-permissions'].services.user.edit(parent.user.id, {
            email: email,
            username: email,
          });
        }
      },
      async afterUpdate(event) {
        try {
          await auditLogService.fromAfterUpdate(event);
        } catch (e) {
          console.error(e);
        }
      },
      async beforeDelete(event) {
        try {
          await this.beforeDeleteMany(event);
        } catch (e) {
          console.error(e);
        }
      },
      async beforeDeleteMany(event) {
        try {
          const entitiesToDelete = await strapi.db.query(event.model.uid).findMany({
            where: event.params.where,
          });

          for (let i = 0; i < entitiesToDelete.length; i++) {
            await auditLogService.fromAfterDelete({
              model: event.model,
              params: event.params,
              result: entitiesToDelete[i],
            });
          }
        } catch (e) {
          console.error(e);
        }
      },
      async afterCreateMany(event) {
        try {
          const createdEntities = await strapi.db.query(event.model.uid).findMany({
            where: {
              id: {
                $in: event.result.ids,
              },
            },
          });

          for (let i = 0; i < createdEntities.length; i++) {
            await auditLogService.fromAfterCreate({
              model: event.model,
              params: event.params.data[i],
              result: createdEntities[i],
            });
          }
        } catch (e) {
          console.error(e);
        }
      },
      async afterUpdateMany(event) {
        try {
          const updatedEntities = await strapi.db.query(event.model.uid).findMany({
            where: event.params.where,
          });

          for (let i = 0; i < updatedEntities.length; i++) {
            await auditLogService.fromAfterUpdate({
              model: event.model,
              params: event.params,
              result: updatedEntities[i],
            });
          }
        } catch (e) {
          console.error(e);
        }
      },
    });
  },
};
