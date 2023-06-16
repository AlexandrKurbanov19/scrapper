import React, {
  Dispatch, FC, SetStateAction, useCallback,
} from 'react';
import {
  Button,
  Menu, MenuProps,
} from 'antd';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import {
  CalendarOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  ReadOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import styles from './StudentLeftSidebarMenu.module.scss';
import { STUDENT_DASHBOARD, STUDENT_LESSONS } from '../../routes';

export type StudentListSidebarMenuProps = Omit<MenuProps, 'items' | 'selectedKeys'> & {
  setCollapsed: Dispatch<SetStateAction<boolean>> | undefined
  collapsed: boolean | undefined
  locationPathname: Location['pathname']
};

const studentMenuItems: MenuProps['items'] = [
  {
    key: STUDENT_DASHBOARD,
    label: (<Link to={STUDENT_DASHBOARD}>Дашборд</Link>),
    icon: <HomeOutlined />,
  },
  {
    key: STUDENT_LESSONS,
    label: (<Link to={STUDENT_LESSONS}>Мои занятия</Link>),
    icon: <ReadOutlined />,
  },
  {
    key: 'Календарь',
    label: (<Link to="/">Календарь</Link>),
    icon: <CalendarOutlined />,
  },
  {
    key: 'Сообщения',
    label: (<Link to="/">Сообщения</Link>),
    icon: <MessageOutlined />,
  },
  {
    key: 'Настройки',
    label: (<Link to="/">Настройки</Link>),
    icon: <SettingOutlined />,
  },
];

const StudentLeftSidebarMenu: FC<StudentListSidebarMenuProps> = ({
  setCollapsed,
  collapsed,
  locationPathname,
  ...props
}) => {
  const sidebarMenuContainerClass = cn([
    'flex items-stretch justify-between',
    styles.sidebarMenuContainer,
  ]);

  const menuClassName = cn([
    'h-full',
    props.className,
    styles.menu,
  ]);

  const selectedKeys = [
    STUDENT_DASHBOARD,
    STUDENT_LESSONS,
  ].filter((key) => locationPathname.search(key) > -1);

  const onSetCollapsedHandler = useCallback(() => {
    if (setCollapsed) {
      setCollapsed((prev) => !prev);
    }
  }, [setCollapsed]);

  return (
    <div className={sidebarMenuContainerClass}>
      <div>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <Menu
          inlineCollapsed={collapsed}
          className={menuClassName}
          selectedKeys={selectedKeys}
          items={studentMenuItems}
          {...props}
        />
      </div>
      <Button type="link" onClick={onSetCollapsedHandler} className={styles.collapseButton}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </div>
  );
};

export default StudentLeftSidebarMenu;
