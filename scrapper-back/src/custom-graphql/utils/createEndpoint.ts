import { Strapi } from '@strapi/strapi';
import strapiMappers from '@strapi/plugin-graphql/server/services/utils/mappers';
import generated from '@strapi/utils';

const {
  pagination: { withDefaultPagination },
} = generated;

interface IParams {
  next: () => any,
  parent: any
  args: {
    filters: any,
    pagination?: any,
    sort?: string[],
  },
  context: any,
  info: any,
}

const createEndpoint = (response: object, strapi: Strapi, uid: string) => async (params: IParams) => {
  const { args } = params;

  const mappers = strapiMappers({ strapi });

  const { pagination = {}, filters = {}, sort } = args || {};

  const { config } = strapi.plugin('graphql');

  const defaultLimit = config('defaultLimit');
  const maxLimit = config('maxLimit');

  const paginationToEntityService = withDefaultPagination(pagination, {
    maxLimit,
    defaults: {
      offset: { limit: defaultLimit },
      page: { pageSize: defaultLimit },
    },
  });

  const filtersToEntityService = mappers.graphQLFiltersToStrapiQuery(
    filters ?? {},
    strapi.getModel(uid),
  );

  const result = await strapi.entityService.findMany(uid, {
    sort,
    filters: filtersToEntityService,
    ...response,
    ...paginationToEntityService,
  });

  const { start, limit } = paginationToEntityService;
  const safeLimit = Math.max(limit, 1);

  const total = await strapi.entityService.count(uid, {
    filters: filtersToEntityService,
    ...response,
  });

  const pageSize = limit === -1 ? total - start : safeLimit;
  const pageCount = limit === -1 ? safeLimit : Math.ceil(total / safeLimit);
  const page = limit === -1 ? safeLimit : Math.floor(start / safeLimit) + 1;

  const paginationMeta = {
    total, page, pageSize, pageCount,
  };

  return {
    data: result,
    meta: {
      pagination: paginationMeta,
    },
  };
};

export default createEndpoint;
