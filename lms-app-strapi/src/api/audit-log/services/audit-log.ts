/**
 * audit-log service
 */

type Event = {
  model: {
    uid: string,
  },
  result: {
    id: number
    [key: string]: any,
    createdBy?: {
      id: number
    },
    updatedBy?: {
      id: number
    },
  };
  params: object;
}

export type AuditLogService = {
  fromAfterCreate(event: Event): Promise<void>;
  fromAfterUpdate(event: Event): Promise<void>;
  fromAfterDelete(event: Event): Promise<void>;
  createLogRecord(
    {
      contentType,
      action,
      userAuthor,
      adminAuthor,
      params,
      result,
      entityId,
    }: {
      contentType: string;
      action: 'CREATE' | 'UPDATE' | 'DELETE';
      userAuthor?: number;
      adminAuthor?: number;
      params: object;
      entityId: number;
      result: object;
    },
  ): Promise<void>;
}

const getAuthor = (type: 'admin' | 'user') => {
  const ctx = strapi.requestContext.get();

  const isStrapiAdmin = Array.isArray(ctx?.state?.user?.roles);

  if (type === 'admin' && isStrapiAdmin) {
    return ctx?.state?.user?.id;
  }

  if (type === 'user' && !isStrapiAdmin) {
    return ctx?.state?.user?.id;
  }

  return undefined;
};

const getAdminAuthor = () => getAuthor('admin');

const getUserAuthor = () => getAuthor('user');

export default (): AuditLogService => ({
  fromAfterCreate(event) {
    if (event.model.uid === 'api::audit-log.audit-log') {
      return;
    }

    return this.createLogRecord({
      contentType: event.model.uid,
      action: 'CREATE',
      userAuthor: getUserAuthor(),
      adminAuthor: getAdminAuthor(),
      params: event.params,
      result: event.result,
      entityId: event.result?.id,
    });
  },
  fromAfterUpdate(event) {
    if (event.model.uid === 'api::audit-log.audit-log') {
      return;
    }

    return this.createLogRecord({
      contentType: event.model.uid,
      action: 'UPDATE',
      userAuthor: getUserAuthor(),
      adminAuthor: getAdminAuthor(),
      params: event.params,
      result: event.result,
      entityId: event.result?.id,
    });
  },
  fromAfterDelete(event) {
    if (event.model.uid === 'api::audit-log.audit-log') {
      return;
    }

    return this.createLogRecord({
      contentType: event.model.uid,
      action: 'DELETE',
      userAuthor: getUserAuthor(),
      adminAuthor: getAdminAuthor(),
      params: event.params,
      result: event.result,
      entityId: event.result?.id,
    });
  },
  createLogRecord: async (
    {
      contentType,
      action,
      userAuthor,
      adminAuthor,
      entityId,
      params,
      result,
    },
  ) => {
    if (contentType === 'api::audit-log.audit-log') {
      return;
    }

    return strapi.entityService.create(
      'api::audit-log.audit-log',
      {
        data: {
          contentType,
          action,
          userAuthor,
          adminAuthor,
          result,
          params,
          entityId,
        },
      },
    );
  },
});
