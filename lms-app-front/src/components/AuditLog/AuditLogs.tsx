import React, { FC, useCallback } from 'react';
import {
  List, Spin, Typography, Card, Button,
  Modal,
} from 'antd';
import type { DeepExtractTypeSkipArrays } from 'ts-deep-extract-types';
import { absurd } from 'fp-ts/function';
import moment from 'moment';
import ReactJson from 'react-json-view';

import { Enum_Auditlog_Action, GetAuditLogQuery, useGetAuditLogQuery } from '../../generated/graphql';
import { RoleNamesEnum } from '../../domain/types';
import UserAvatar from '../UserAvatar';

const translateAction = (action: Enum_Auditlog_Action | undefined) => {
  switch (action) {
    case Enum_Auditlog_Action.Create:
      return 'Создание';
    case Enum_Auditlog_Action.Update:
      return 'Редактирование';
    case Enum_Auditlog_Action.Delete:
      return 'Удаление';
    case undefined:
      return '???';
    default:
      absurd(action);
      throw new Error('Unknown action');
  }
};

export enum AuditLogContentTypeEnum {
  STUDENT = 'api::student.student',
}

interface IProps {
  entityId: string,
  contentType: AuditLogContentTypeEnum
}

const AuditLogs: FC<IProps> = (
  {
    entityId,
    contentType,
  },
) => {
  const { data, loading } = useGetAuditLogQuery({
    variables: {
      filters: {
        entityId: {
          eq: Number(entityId),
        },
        contentType: {
          eq: contentType,
        },
      },
      pagination: {
        pageSize: 100000,
      },
    },
    pollInterval: 10000,
  });

  const events = data?.auditLogs?.data;

  const getAuthor = (event: DeepExtractTypeSkipArrays<GetAuditLogQuery, ['auditLogs', 'data']>) => {
    const authorUser = event.attributes?.userAuthor;
    if (!authorUser) {
      return undefined;
    }

    const combineFullName = (
      {
        firstname,
        lastname,
        patronymic,
      }: {
        firstname?: string | null,
        lastname?: string | null,
        patronymic?: string | null,
      },
    ) => [firstname, lastname, patronymic].filter(Boolean).join(' ');

    const getRoleBasedContent = () => {
      if (authorUser.data?.attributes?.curator?.data) {
        return {
          id: authorUser.data?.attributes?.curator.data?.id,
          roleName: RoleNamesEnum.Curator,
          ...authorUser.data?.attributes?.curator.data?.attributes,
        };
      }

      if (authorUser.data?.attributes?.parent?.data) {
        return {
          id: authorUser.data?.attributes?.parent.data?.id,
          roleName: RoleNamesEnum.Parent,
          ...authorUser.data?.attributes?.parent.data?.attributes,
        };
      }

      if (authorUser.data?.attributes?.student?.data) {
        return {
          id: authorUser.data?.attributes?.student.data?.id,
          roleName: RoleNamesEnum.Student,
          ...authorUser.data?.attributes?.student.data?.attributes,
        };
      }

      if (authorUser.data?.attributes?.tutor?.data) {
        return {
          id: authorUser.data?.attributes?.tutor.data?.id,
          roleName: RoleNamesEnum.Tutor,
          ...authorUser.data?.attributes?.tutor.data?.attributes,
        };
      }

      if (authorUser.data?.attributes?.teacher?.data) {
        return {
          id: authorUser.data?.attributes?.teacher.data?.id,
          roleName: RoleNamesEnum.Teacher,
          ...authorUser.data?.attributes?.teacher.data?.attributes,
        };
      }

      if (authorUser.data?.attributes?.administrator?.data) {
        return {
          id: authorUser.data?.attributes?.administrator.data?.id,
          roleName: RoleNamesEnum.Administrator,
          ...authorUser.data?.attributes?.administrator.data?.attributes,
        };
      }

      return {
        id: '???',
        roleName: 'Strapi',
        fullName: 'Супер пользователь',
        lastname: 'Strapi',
        avatarUrl: undefined,
      };
    };

    const roleBasedContent = getRoleBasedContent();

    return {
      id: roleBasedContent.id || '???',
      roleName: roleBasedContent.roleName,
      fullName: combineFullName(roleBasedContent),
      lastname: roleBasedContent.lastname,
      avatarUrl: roleBasedContent.avatarUrl || undefined,
    };
  };

  const onShowMore = useCallback((item: DeepExtractTypeSkipArrays<GetAuditLogQuery, ['auditLogs', 'data']>) => () => Modal.info(
    {
      title: (
        <>
          Действие:
          {'\u00A0'}
          {translateAction(item.attributes?.action)}
          <br />
          Дата:
          {'\u00A0'}
          {moment(item.attributes?.createdAt).format('DD.MM.YYYY HH:mm')}
        </>
      ),
      content: (
        <ReactJson
          theme="chalk"
          indentWidth={2}
          onAdd={false}
          onDelete={false}
          onEdit={false}
          onSelect={false}
          enableClipboard={false}
          displayDataTypes={false}
          quotesOnKeys={false}
          src={item.attributes?.result}
        />
      ),
    },
  ), []);

  const actions = useCallback((item: DeepExtractTypeSkipArrays<GetAuditLogQuery, ['auditLogs', 'data']>) => [
    <Button onClick={onShowMore(item)}>
      Показать изменения
    </Button>,
  ], [onShowMore]);

  const renderItem = useCallback((item: DeepExtractTypeSkipArrays<GetAuditLogQuery, ['auditLogs', 'data']>) => {
    const author = getAuthor(item);

    return (
      <List.Item
        actions={actions(item)}
      >
        <List.Item.Meta
          avatar={author ? (<UserAvatar user={author} />) : undefined}
          title={author?.fullName || 'Супер пользователь'}
          description={(
            <>
              Действие:
              {'\u00A0'}
              {translateAction(item.attributes?.action)}
              <br />
              Дата:
              {'\u00A0'}
              {moment(item.attributes?.createdAt).format('DD.MM.YYYY HH:mm')}
            </>
          )}
        />
      </List.Item>
    );
  }, [actions]);

  return (
    <Card>
      <div>
        <Typography.Title level={4}>
          Лог событий
        </Typography.Title>
        {!events && loading && (
          <Spin />
        )}
        {!events && !loading && (
          <Typography.Text>Нет событий</Typography.Text>
        )}
        {events && (
          <List
            size="small"
            dataSource={events}
            renderItem={renderItem}
          />
        )}
      </div>
    </Card>
  );
};

export default AuditLogs;
