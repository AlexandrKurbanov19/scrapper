import { Strapi } from '@strapi/strapi';
import responseStructToGraphql from './responseStructToGraphql';
import createEndpoint from './createEndpoint';

interface IParams {
  auth: boolean,
  policies?: string[]
  uid: string, // api::fast-comment.fast-comment
  queryName: string, // fastComment
  prefix: string, // FastComment
  response: object,
  filterType: string, // например CommentFiltersInput
}

const createQuery = (
  {
    uid,
    prefix,
    response,
    queryName,
    filterType,
    auth,
    policies,
  }: IParams,
) => ({ strapi }: { strapi: Strapi, nexus: object, typeRegistry: object }) => {
  const { typeDefs, typeName } = responseStructToGraphql({
    strapi,
    struct: response,
    prefix,
    uid,
  });

  return {
    typeDefs: `
      ${typeDefs}

      type ${prefix}Meta {
        pagination: Pagination!
      }

      type ${prefix}Response {
        data: [${typeName}!]!
        meta: ${prefix}Meta!
      }

      extend type Query {
        ${queryName}(filters: ${filterType}, sort: [String!], pagination: PaginationArg = {}): ${prefix}Response!,
      }
    `,
    resolversConfig: {
      [`Query.${queryName}`]: {
        auth,
        policies,
        middlewares: [
          createEndpoint(response, strapi, uid),
        ],
      },
    },
  };
};

export default createQuery;
