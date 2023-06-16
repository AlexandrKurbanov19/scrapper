import React, { FC, ReactNode } from 'react';
import { Grid, Layout } from 'antd';

import { HeaderCustom } from '../../HeaderCustom/HeaderCustom';
import SidebarMenu from '../../SidebarMenu/SidebarMenu';
import Spinner from '../../Spinner';

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
          <Sider className="!shadow-md" width={215}>
            <SidebarMenu />
          </Sider>
        )}
        <Spinner spinning={contentLoading}>
          <Content className="max-w-full bg-[#FAFAFA] p-[24px]">
            {children}
          </Content>
        </Spinner>
      </Layout>
    </Layout>
  );
};

export default CommonLayout;
