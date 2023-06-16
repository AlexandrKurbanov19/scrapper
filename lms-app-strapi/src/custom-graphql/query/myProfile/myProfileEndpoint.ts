import { Roles } from '../../../constants/roles';

const myProfileEndpoint = async (next, parent, args, context) => {
  const { user } = context.state;

  if (!user) {
    throw new Error('Authentication requested');
  }

  const upUser = await strapi
    .query('plugin::users-permissions.user')
    .findOne({
      where: {
        id: user.id,
      },
      fields: ['id', 'email'],
      populate: {
        role: {
          fields: ['id', 'name']
        }
      },
    });

  if (!upUser) {
    throw new Error('User not found');
  }

  if (upUser.role.name === Roles.Administrator) {
    const [administator] = await strapi
      .entityService
      .findMany('api::administrator.administrator', {
        // fields: ['title', 'description'],
        filters: {
          user: {
            id: {
              $eq: user.id,
            },
          },
        },
        limit: 1,
      });

    if (!administator) {
      throw new Error('Administrator not found');
    }

    return {
      ...administator,
      role: upUser.role,
      userId: user.id,
    };
  }

  if (upUser.role.name === Roles.Student) {
    const [student] = await strapi
      .entityService
      .findMany('api::student.student', {
        filters: {
          user: {
            id: {
              $eq: user.id,
            },
          },
        },
        limit: 1,
      });

    if (!student) {
      throw new Error('Student not found');
    }

    return {
      ...student,
      role: upUser.role,
      userId: user.id,
    };
  }

  throw new Error('Not implemented for this role');
};

export default myProfileEndpoint;
