import { Roles } from '../../../constants/roles';

const myProfileEndpoint = async (next, parent, args, context) => {
  const { user } = context.state;

  if (!user) {
    throw new Error('Authentication requested');
  }

  console.log(user);
  

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
  

  return {
    id: user.id,
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname,
    patronymic: user.patronymic,
    avatarUrl: user.avatarUrl,
    role: {
      id: user?.role.id,
      name: user?.role.name,
    },
  }
};

export default myProfileEndpoint;
