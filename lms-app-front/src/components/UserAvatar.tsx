import React, { FC, useMemo } from 'react';
import { Avatar } from 'antd';
import { AvatarProps } from 'antd/lib/skeleton/Avatar';
import { observer } from 'mobx-react-lite';

interface IProps extends AvatarProps {
  spinning?: boolean;
  user?: {
    lastname?: string | null,
    avatarUrl?: string | null,
  } | null,
  small?: boolean
}

const UserAvatar: FC<IProps> = (
  {
    user,
    small,
    ...avatarProps
  },
) => {
  const avatarStyle = useMemo(() => ({
    fontSize: small ? 14 : undefined,
  }), [small]);

  return (
    <Avatar
      size={!small ? 32 : 20}
      src={user?.avatarUrl}
      alt="Фото профиля"
      {...avatarProps}
      style={avatarStyle}
    >
      {user?.avatarUrl
        ? null
        : user?.lastname?.trim().charAt(0).toUpperCase()}
    </Avatar>
  );
};

export default observer(UserAvatar);
