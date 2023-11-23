import { Strapi } from '@strapi/strapi';
import customGraphql from './custom-graphql';
import _ from 'lodash';
import utils from '@strapi/utils';
import hash from 'password-hash';
import { getService } from '@strapi/plugin-users-permissions/server/utils';
import { validateRegisterBody } from '@strapi/plugin-users-permissions/server/controllers/validation/auth';

const { ApplicationError, ValidationError } = utils.errors;
const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const { sanitize } = utils;

const sanitizeUser = (user, ctx, strapi: Strapi) => {
  const { auth } = ctx.state;
  const userSchema = strapi.getModel('plugin::users-permissions.user');

  return sanitize.contentAPI.output(user, userSchema, { auth });
};


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

      extensionService.use({
        typeDefs: `
        enum ENUM_PUBLIC_REGISTRATION_ROLE {
          CLIENT
        }

        input RegisterParentOrChildrenInput {
          role: ENUM_PUBLIC_REGISTRATION_ROLE!,
          email: String!,
          password: String!,
          phone: String!,
          firstname: String!,
          lastname: String,
          patronymic: String,
          username: String!,
        }

        input ChangeOwnPasswordInput {
          currentPassword: String!,
          newPassword: String!
        }

        type ChangeOwnPasswordResponse {
          success: Boolean!,
          message: String!,
        }


        type RegisterParentOrChildrenResponse {
          user: UsersPermissionsUserEntity,
          jwt: String,
        }

        extend type Mutation {
          registerParentOrChildren(data: RegisterParentOrChildrenInput!): RegisterParentOrChildrenResponse,
          changeOwnPassword(data: ChangeOwnPasswordInput!): ChangeOwnPasswordResponse,
        }

        `,
        resolversConfig: {
          'Mutation.registerParentOrChildren': {
            auth: false,
            middlewares: [
              // регистрация новых пользователей
              async (next, parent, args, context) => {
                const params: any = {
                  ..._.omit(args.data),
                  provider: 'local',
                };

                await validateRegisterBody(params);

                // Throw an error if the password selected by the user
                // contains more than three times the symbol '$'.
                if (hash.isHashed(params.password)) {
                  throw new ValidationError(
                    'Your password cannot contain more than three times the symbol `$`'
                  );
                }

                const userSelectedRole = args.data.role[0] + args.data.role.toLowerCase().slice(1)
                const role = await strapi
                  .query('plugin::users-permissions.role')
                  .findOne({ where: { name: userSelectedRole } });

                if (!role) {
                  throw new ApplicationError('Impossible to find the default role');
                }

                // Check if the provided email is valid or not.
                const isEmail = emailRegExp.test(params.email);
                if (isEmail) {
                  params.email = params.email.toLowerCase();
                } else {
                  throw new ValidationError('Please provide a valid email address');
                }

                params.role = role.id;

                const user = await strapi.query('plugin::users-permissions.user').findOne({
                  where: { email: params.email },
                });

                if (user) {
                  throw new ApplicationError('Email уже существует!');
                }

                try {
                  const user = await getService('user').add(params);
                  const sanitizedUser = await sanitizeUser(user, context, strapi);
                  const jwt = getService('jwt').issue(_.pick(user, ['id']));

                  return {
                    jwt,
                    user: sanitizedUser,
                  };
                } catch (err) {
                  if (_.includes(err.message, 'username')) {
                    throw new ApplicationError('Username already taken');
                  } else if (_.includes(err.message, 'email')) {
                    throw new ApplicationError('Email already taken');
                  } else {
                    strapi.log.error(err);
                    throw new ApplicationError('An error occurred during account creation');
                  }
                }
              }
            ]
          },
          'Mutation.changeOwnPassword': {
            auth: true,
            middlewares: [
              async (next, parent, args, context) => {
                const currentUser = context.state?.user;
                const validPassword = await strapi
                  .plugins['users-permissions']
                  .services
                  .user
                  .validatePassword(args.data.currentPassword, currentUser.password);

                if (!validPassword) {
                  return {
                    success: false,
                    message: 'Указан не правильный текущий пароль',
                  }
                }

                const newPassword = args.data.newPassword;

                if (newPassword.length < 8) {
                  return {
                    success: false,
                    message: 'Минимальная длинна пароля 8 символов',
                  }
                }

                try {
                  await strapi
                    .plugin('users-permissions')
                    .service('user')
                    .edit(currentUser.id, { password: newPassword });

                  return {
                    success: true,
                    message: 'Новый пароль успешно установлен',
                  }
                } catch (e) {
                  console.error(e);

                  return {
                    success: false,
                    message: 'Неизвестная ошибка',
                  }
                }
              },
            ],
          },
        }
      });
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
