import React, { useContext } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import ruRU from 'antd/lib/locale/ru_RU';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { useLocation } from 'react-router';
import { MenuProps } from 'antd/es/menu';
import getTheme from '../../antToken';
import StudentLeftSidebarMenu from './index';
import LayoutContextProvider from '../layout/LayoutContextProvider';
import LayoutContext from '../layout/LayoutContext';

const meta: Meta<typeof StudentLeftSidebarMenu> = {
  title: 'StudentLeftSidebarMenu',
  component: StudentLeftSidebarMenu,
};

export default meta;

type Story = StoryObj<typeof StudentLeftSidebarMenu>;

const containerStyles = {
  width: 300,
  height: '100vh',
};

const ComponentDefault = (args: { mode: MenuProps['mode'] | undefined }) => {
  const layoutContext = useContext(LayoutContext);
  const location = useLocation();

  return (
    <div
      style={containerStyles}
    >
      <StudentLeftSidebarMenu
        setCollapsed={layoutContext?.setCollapsed}
        locationPathname={location.pathname}
        collapsed={layoutContext?.collapsed}
        {...args}
      />
    </div>
  );
};

export const StudentLeftSidebarMenuDefault: Story = {
  name: 'Default',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    mode: 'inline',
  },
  decorators: [
    (Story) => (
      <ConfigProvider
        locale={ruRU}
        theme={getTheme('light')}
      >
        <LayoutContextProvider>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </LayoutContextProvider>
      </ConfigProvider>
    ),
  ],
  render: (args) => <ComponentDefault mode={args.mode} />,
};
