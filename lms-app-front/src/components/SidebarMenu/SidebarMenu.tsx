import React, { FC } from 'react';
import { Menu } from 'antd';
import { observer } from 'mobx-react-lite';

import useSideBarMenu from './useSideBarMenu';
import useStore from '../../domain/modelLayer/store/useStore';
import { RoleNamesEnum } from '../../domain/types';

interface IProps {
  className?: string;
}

const SidebarMenu: FC<IProps> = ({ className = '' }) => {
  const { profileStore: { profile } } = useStore();
  const roleName = profile?.role.name || RoleNamesEnum.Guest;
  const { items, selectedKeys } = useSideBarMenu(roleName);

  return (
    <Menu
      mode="inline"
      className={`${className} h-full`}
      selectedKeys={selectedKeys}
      items={items}
    />
  );
};

export default observer(SidebarMenu);
