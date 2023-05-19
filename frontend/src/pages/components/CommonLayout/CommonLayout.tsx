import React, { FC, ReactNode } from 'react';
import {Grid, Layout} from 'antd';
import HeaderCustom from "../HeaderCustom/HeaderCustom";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import FooterCustom from "../Footer/Footer";

const { Sider, Content } = Layout;

interface IProps {
  contentLoading?: boolean;
  children?: ReactNode;
}

const CommonLayout: FC<IProps> = (
  {
    children,
    contentLoading = false,
  },
) => {
  const screens = Grid.useBreakpoint();

  return (
    <Layout className="min-h-full">
      <HeaderCustom />
      <Layout className="flex-row">
        {screens.lg && (
          <SidebarMenu />
        )}
        <Content className="max-w-full min-h-full bg-[#FAFAFA]">
          {children}
        </Content>
      </Layout>
      <FooterCustom />
    </Layout>
  );
};

export default CommonLayout;
