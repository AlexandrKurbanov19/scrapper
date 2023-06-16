import type { RouterConfig } from '@strapi/strapi/lib/types/factories';
import { HandlerConfig } from '@strapi/strapi/lib/types/factories';

const disableAllRestOnRoute = (): RouterConfig => {
  const routeConfig: RouterConfig = {
    config: {},
  };

  const hConfig: HandlerConfig = {
    policies: ['global::disabled-api'],
  };

  routeConfig.config = {
    find: hConfig,
    findOne: hConfig,
    create: hConfig,
    update: hConfig,
    delete: hConfig,
  };

  return routeConfig;
};

export default disableAllRestOnRoute;
