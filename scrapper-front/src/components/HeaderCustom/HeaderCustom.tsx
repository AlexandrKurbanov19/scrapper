import React, { FC } from 'react';
import { Header } from 'antd/lib/layout/layout';
import type { DropdownProps } from 'antd';
import { Button, Dropdown, Grid } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';

import useStore from 'domain/modelLayer/store/useStore';
import {
  LOGIN, LOGOUT, PROFILE, REGISTRATION,
} from '../../routes';
import UserAvatar from '../UserAvatar';
import translateRoleName from '../../utils/translateRoleName';

import styles from './HeaderCustom.module.scss';
import useSideBarMenu from '../SidebarMenu/useSideBarMenu';
import { RoleNamesEnum } from '../../domain/types';

interface IProps {
}

const profileMenuItems = [
  {
    key: PROFILE,
    label: (
      <Link to={PROFILE}>Профиль</Link>
    ),
  },
  {
    key: LOGOUT,
    label: (
      <Link to={LOGOUT}>Выйти</Link>
    ),
  },
];

const { useBreakpoint } = Grid;

const menuTrigger: ('click' | 'hover' | 'contextMenu')[] = ['click'];

const profileMenu: DropdownProps['menu'] = {
  items: profileMenuItems,
};

export const HeaderCustom: FC<IProps> = () => {
  const { profileStore: { profile } } = useStore();

  const { lg } = useBreakpoint();

  const sideBarMenu = useSideBarMenu(profile?.role.name || RoleNamesEnum.Guest);

  return (
    <Header
      className={cn([
        'flex items-center px-6 sm:px-12',
        styles.header,
      ])}
    >
      {!lg && (
        <Dropdown
          arrow
          menu={sideBarMenu}
          placement="bottomLeft"
          trigger={menuTrigger}
        >
          <Button
            size="large"
            type="text"
            className="mr-1 pl-0"
          >
            <MenuOutlined className="text-white text-2xl" />
          </Button>
        </Dropdown>
      )}

      {lg && (
        <h2 className="text-white">AdAnalyzerPro</h2>
      )}

      {
        profile && (
          <div className="ml-auto">
            <div className="flex items-center text-white pl-4 leading-5">
              <span className="text-xs sm:text-base">
                {`${profile?.fullName} (${translateRoleName(profile?.role.name || '???')})`}
              </span>

              <Dropdown
                menu={profileMenu}
              >
                <UserAvatar
                  user={profile}
                  className="ml-2.5 shrink-0"
                />
              </Dropdown>
            </div>
          </div>
        )
      }
      {
        !profile && (
          <div className="ml-auto flex gap-1 lg:gap-4 lg:flex-wrap">
            <Link to={REGISTRATION}>
              <Button size="small" block>
                Зарегистрироваться?
              </Button>
            </Link>
            <Link to={LOGIN}>
              <Button size="small" block>
                Войти?
              </Button>
            </Link>
          </div>
        )
      }

    </Header>
  );
};

export default observer(HeaderCustom);
