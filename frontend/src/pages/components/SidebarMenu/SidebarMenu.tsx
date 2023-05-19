import React, {useMemo, useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import {Button, Menu, MenuProps} from "antd";
import MenuItem from 'antd/es/menu/MenuItem';
import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import LoginPage from "../../LoginPage/LoginPage";
import WebscraperForm from "../../webscraperPage/WebscraperForm";


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem((
    <Link href="/">
      Главная
    </Link>
  ), '1'
  ),
  getItem(
    (
      <Link href="/webscraperPage/WebscraperForm">
        Демо-Парсер
      </Link>
    ),
    '2'
  ),
  getItem(
    (
      <Link href="/instruction">
        Инструкция
      </Link>
    ),
    '3'
  ),
];

const SidebarMenu = () => (
    <div className="w-[256px]">
      <Menu
        style={{ width: 256, fontSize: 16 }}
        mode="inline"
        items={items}
      />
    </div>
  );

export default SidebarMenu;