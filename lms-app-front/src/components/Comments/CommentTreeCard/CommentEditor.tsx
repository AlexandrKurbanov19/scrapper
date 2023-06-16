import React, {
  ChangeEvent,
  FC, useCallback,
  useMemo,
  useState,
} from 'react';
import { observer } from 'mobx-react-lite';
import {
  Form, Button, Space, Input,
} from 'antd';
import { Comment } from '@ant-design/compatible';
import isEqual from 'lodash/isEqual';
import TextArea from 'antd/lib/input/TextArea';
import { computed } from 'mobx';
import useStore from 'domain/modelLayer/store/useStore';
import LmsUpload, { Attaches } from '../../common/LmsUpload/LmsUpload';
import { LMSComment } from '../types';
import {
  Enum_Comment_Subjectcontenttype,
  useCreateCommentMutation,
  useEditCommentMutation,
} from '../../../generated/graphql';
import UserAvatar from '../../UserAvatar';
import { useNavigationLocking } from '../../../hooks/blockNavigationHooks';

interface IProps {
  comment?: LMSComment,
  onCommentSaved: () => void,
  onCancel?: () => void,
  subjectContentType: Enum_Comment_Subjectcontenttype,
  subjectContentTypeId: string,
}

const CommentEditor: FC<IProps> = (
  {
    comment,
    onCommentSaved,
    onCancel,
    subjectContentType,
    subjectContentTypeId,
  },
) => {
  const initialText = comment?.text || '';
  const [text, setText] = useState(initialText);
  const presetAttaches = useMemo(() => comment?.attaches || [], [comment?.attaches]);

  const { profileStore } = useStore();
  const userId = profileStore?.profile?.userId;

  const meData = useMemo(() => computed(() => ({
    lastname: profileStore?.profile?.lastname,
    avatarUrl: profileStore?.profile?.avatarUrl,
  })), [profileStore?.profile?.avatarUrl, profileStore?.profile?.lastname]).get();

  const [attaches, setAttaches] = useState<Attaches>([]);
  const [key, setKey] = useState(String(new Date().getTime()));

  const [createComment, { loading }] = useCreateCommentMutation();
  const [editComment] = useEditCommentMutation();

  const onClickSaveComment = useCallback(async () => {
    if (!userId) {
      return;
    }

    if (comment) {
      await editComment({
        variables: {
          id: comment.id,
          data: {
            text,
            attaches,
          },
        },
        onCompleted: () => {
          onCommentSaved();
        },
      });
    } else {
      await createComment({
        variables: {
          data: {
            subjectContentTypeId,
            subjectContentType,
            text,
            attaches,
            authorUser: userId,
          },
        },
        onCompleted: () => {
          onCommentSaved();
          setText('');
          setKey(String(new Date().getTime()));
        },
      });
    }
  }, [
    comment,
    text,
    attaches,
    onCommentSaved,
    subjectContentType,
    subjectContentTypeId,
    userId,
    createComment,
    editComment,
  ]);

  const haveChanges = useMemo(() => {
    if (!comment?.id) {
      if (text.length > 0) {
        return true;
      }

      return attaches.length > 0;
    }

    if (!isEqual(presetAttaches, attaches)) {
      return true;
    }

    return initialText !== text;
  }, [attaches, comment, presetAttaches, text, initialText]);

  useNavigationLocking(haveChanges);

  const onChangeText = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }, []);

  return (
    <Comment
      avatar={<UserAvatar user={meData} />}
      content={(
        <>
          <Form.Item>
            <TextArea
              rows={4}
              onChange={onChangeText}
              value={text}
              placeholder="Напишите тут комментарий..."
            />
          </Form.Item>
          <Form.Item
            name="attaches"
            noStyle
          >
            <Input type="hidden" />
          </Form.Item>
          <Form.Item>
            <Space
              direction="vertical"
              size={16}
              align="start"
            >
              <div>
                <LmsUpload
                  attaches={presetAttaches}
                  key={key}
                  name="file"
                  uploadType="any"
                  onAttachesChange={setAttaches}
                />
              </div>
              <Space
                direction="horizontal"
                size={16}
                align="start"
              >
                <Button
                  htmlType="submit"
                  loading={loading}
                  onClick={onClickSaveComment}
                  type="primary"
                  disabled={!text && !(attaches?.length !== 0)}
                >
                  {comment?.id ? 'Сохранить' : 'Добавить'}
                </Button>
                {onCancel && (
                  <Button
                    htmlType="reset"
                    onClick={onCancel}
                    type="text"
                  >
                    Отмена
                  </Button>
                )}
              </Space>
            </Space>
          </Form.Item>
        </>
      )}
    />
  );
};

export default observer(CommentEditor);
