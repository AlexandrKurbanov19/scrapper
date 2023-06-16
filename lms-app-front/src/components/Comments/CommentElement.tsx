import React, {
  FC, useCallback, useMemo, useState,
} from 'react';
import { observer } from 'mobx-react-lite';
import { Comment } from '@ant-design/compatible';
import { Button, Popconfirm } from 'antd';
import useStore from 'domain/modelLayer/store/useStore';
import translateRoleName from '../../utils/translateRoleName';
import UserAvatar from '../UserAvatar';
import CommentContent from './CommentContent';

import styles from './CommentTreeCard/CommentElement.module.scss';
import { LMSComment } from './types';
import CommentEditor from './CommentTreeCard/CommentEditor';

interface IProps {
  comment: LMSComment,
  onCommentSaved: () => void,
  onDeleteComment: (commentId: string) => void,
}

const CommentElement: FC<IProps> = (
  {
    comment,
    onDeleteComment,
    onCommentSaved: _onCommentSaved,
  },
) => {
  const { profileStore: { profile } } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const meId = profile?.id || '???';

  const isMyComment = meId === comment.author.id;

  const openEditor = useCallback(() => setIsEditing(true), []);

  const deleteComment = useCallback(() => {
    onDeleteComment(comment.id);
  }, [comment.id, onDeleteComment]);

  const commentActions = useMemo(() => {
    if (!isMyComment) {
      return undefined;
    }

    return [
      <Button
        className={styles.editButton}
        type="text"
        size="small"
        onClick={openEditor}
      >
        Редактировать
      </Button>,
      <Popconfirm
        title="Удалить этот комментарий?"
        okText="Удалить"
        cancelText="Отмена"
        onConfirm={deleteComment}
      >
        <Button
          className={styles.deleteButton}
          type="text"
          size="small"
          danger
        >
          Удалить
        </Button>
      </Popconfirm>,
    ];
  }, [deleteComment, isMyComment, openEditor]);

  const exitEditMode = useCallback(() => setIsEditing(false), []);

  const onCommentSaved = useCallback(() => {
    exitEditMode();
    _onCommentSaved();
  }, [_onCommentSaved, exitEditMode]);

  const commentDateTime = useMemo(() => {
    const createdAt = comment.createdAt.format('DD.MM.YYYY HH:mm');
    const updatedAt = comment.updatedAt?.format('DD.MM.YYYY HH:mm');

    if (!updatedAt || createdAt === updatedAt) {
      return createdAt;
    }

    return `${createdAt} (изменён ${updatedAt})`;
  }, [comment.createdAt, comment.updatedAt]);

  if (isEditing) {
    return (
      <CommentEditor
        onCancel={exitEditMode}
        comment={comment}
        onCommentSaved={onCommentSaved}
        subjectContentType={comment.subjectContentType}
        subjectContentTypeId={comment.subjectContentTypeId}
      />
    );
  }

  return (
    <Comment
      actions={commentActions}
      author={`
        ${comment.author.fullName}
        (${translateRoleName(comment.author.roleName)})
      `}
      datetime={commentDateTime}
      avatar={<UserAvatar user={comment.author} />}
      content={(
        <CommentContent
          key={comment.id}
          text={comment.text}
          attaches={comment.attaches}
        />
      )}
    />
  );
};

export default observer(CommentElement);
