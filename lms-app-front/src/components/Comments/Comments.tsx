import React, { FC, useCallback } from 'react';
import { Card, Typography, Spin } from 'antd';
import compact from 'lodash/compact';
import { observer } from 'mobx-react-lite';

import type { DeepExtractTypeSkipArrays } from 'ts-deep-extract-types';
import moment from 'moment';
import {
  Enum_Comment_Subjectcontenttype,
  GetCommentsQuery,
  useGetCommentsQuery,
  useRemoveCommentMutation,
} from '../../generated/graphql';
import useStore from '../../domain/modelLayer/store/useStore';
import CommentElement from './CommentElement';
import CommentEditor from './CommentTreeCard/CommentEditor';
import { LMSComment } from './types';
import { Attaches } from '../common/LmsUpload/LmsUpload';
import { RoleNamesEnum } from '../../domain/types';

interface IProps {
  subjectContentType: Enum_Comment_Subjectcontenttype,
  subjectContentTypeId: string,
}

const exchangeCommentToLMSComment = (
  comment: DeepExtractTypeSkipArrays<GetCommentsQuery, ['comments', 'data']>,
): LMSComment | undefined => {
  if (!comment || !comment.attributes || !comment.id) {
    return undefined;
  }

  const getAuthor = (): LMSComment['author'] => {
    const authorUser = comment.attributes?.authorUser;
    if (!authorUser) {
      throw new Error('Нет автора');
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

      throw new Error('Нет автора комментария');
    };

    const roleBasedContent = getRoleBasedContent();

    return {
      id: roleBasedContent.id || '???',
      roleName: roleBasedContent.roleName,
      fullName: combineFullName(roleBasedContent),
      avatarUrl: roleBasedContent.avatarUrl || undefined,
    };
  };

  const author = getAuthor();

  return {
    id: comment.id,
    text: comment.attributes.text || '',
    subjectContentTypeId: comment.attributes.subjectContentTypeId,
    subjectContentType: comment.attributes.subjectContentType,
    createdAt: moment(comment.attributes.createdAt),
    updatedAt: comment.attributes?.updatedAt ? moment(comment.attributes?.updatedAt) : undefined,
    attaches: comment.attributes.attaches as Attaches || undefined,
    author,
  };
};

const Comments: FC<IProps> = (
  {
    subjectContentType,
    subjectContentTypeId,
  },
) => {
  const { profileStore: { profile } } = useStore();

  const { data, loading, refetch } = useGetCommentsQuery({
    variables: {
      subjectContentType,
      subjectContentTypeId,
    },
    pollInterval: 10000, // раз в 10 сек переполучаем комментарии
  });

  const [removeComment] = useRemoveCommentMutation();

  const onDeleteComment = useCallback(async (commentId: string) => (
    removeComment({
      variables: {
        id: commentId,
      },
      onCompleted: () => {
        refetch();
      },
    })
  ), [removeComment, refetch]);

  const comments = data?.comments?.data ? compact(data?.comments?.data.map(exchangeCommentToLMSComment)) : undefined;

  return (
    <Card>
      <div>
        <Typography.Title level={4}>
          Комментарии
        </Typography.Title>
      </div>
      {!data && loading && (
        <Spin />
      )}
      {comments?.map((comment) => (
        <CommentElement
          key={comment.id}
          comment={comment}
          onDeleteComment={onDeleteComment}
          onCommentSaved={refetch}
        />
      ))}
      {profile?.id && (
        <CommentEditor
          subjectContentType={subjectContentType}
          subjectContentTypeId={subjectContentTypeId}
          onCommentSaved={refetch}
        />
      )}
    </Card>
  );
};

export default observer(Comments);
