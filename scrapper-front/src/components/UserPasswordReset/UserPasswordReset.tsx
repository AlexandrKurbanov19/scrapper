import React, { FC, useCallback } from 'react';
import {
  Button, Popconfirm,
  notification, Typography,
} from 'antd';
import { useUpdateUserPasswordMutation } from '../../generated/graphql';
import generateUserPassword from '../../utils/generateUserPassword';

const { Paragraph } = Typography;

interface IProps {
  userId: string,
}

const UserPasswordReset: FC<IProps> = (
  {
    userId,
  },
) => {
  const [api, contextHolder] = notification.useNotification();

  const [updateUserPassword, { loading: updateUserPasswordLoading }] = useUpdateUserPasswordMutation();

  const resetUserPassword = useCallback(async () => {
    const newPassword = generateUserPassword();
    await updateUserPassword({
      variables: {
        id: userId,
        password: newPassword,
      },
    });
    api.success({
      message: 'Новый пароль',
      description: (
        <Paragraph copyable>{newPassword}</Paragraph>
      ),
      duration: 0,
    });
  }, [api, userId, updateUserPassword]);

  return (
    <Popconfirm
      title="Сброс пароля пользователю"
      description={(
        <>
          Вы уверены что хотите сбросить пароль пользователю?
          <br />
          После сброса вам будет показан новый пароль пользователя.
        </>
      )}
      onConfirm={resetUserPassword}
      okText="OK"
      cancelText="Отмена"
    >
      {contextHolder}
      <Button
        type="primary"
        danger
        loading={updateUserPasswordLoading}
      >
        Сбросить пароль
      </Button>
    </Popconfirm>
  );
};

export default UserPasswordReset;
