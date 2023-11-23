import myProfileEndpoint from './myProfileEndpoint';

const prefix = 'MyProfile';
const queryName = `myProfile`;

export default {
  typeDefs: `
      type ${prefix}Meta {
        pagination: Pagination!
      }

      type ${prefix}Role {
        id: ID!
        name: String!
      }

      type ${prefix}Response {
        id: ID!
        email: String!
        firstname: String
        lastname: String
        patronymic: String
        avatarUrl: String
        role: ${prefix}Role!
      }

      extend type Query {
        ${queryName}: ${prefix}Response!,
      }
  `,
  resolversConfig: {
    [`Query.${queryName}`]: {
      middlewares: [
        myProfileEndpoint,
      ],
    },
  },
};
