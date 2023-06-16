import React, { FC, ReactNode, useContext } from 'react';
import { Layout } from 'antd';
import cn from 'classnames';
import { useLocation } from 'react-router';
import Spinner from '../../Spinner';
import StudentLeftSidebarMenu from '../../StudentLeftSidebarMenu';
import styles from './StudentLayout.module.scss';
import LayoutContext from '../LayoutContext';

const { Content } = Layout;

interface StudentLayoutProps {
  contentLoading?: boolean;
  children?: ReactNode;
  rightSidebar: ReactNode;
}

const StudentLayout: FC<StudentLayoutProps> = ({
  children,
  contentLoading = false,
  rightSidebar,
}) => {
  const layoutContext = useContext(LayoutContext);
  const location = useLocation();

  const studentSiderClassName = cn([
    'min-h-full flex-row',
    styles.studentLayout,
  ]);

  return (
    <Layout className={studentSiderClassName}>
      <div className={styles.leftSidebarContainer}>
        <StudentLeftSidebarMenu
          collapsed={layoutContext?.collapsed}
          setCollapsed={layoutContext?.setCollapsed}
          locationPathname={location.pathname}
          mode="inline"
        />
      </div>
      <Spinner spinning={contentLoading}>
        <Content className={cn([
          'm-auto max-w-[856px]',
          styles.contentContainer,
        ])}
        >
          <div className={styles.contentPaddingWrapper}>
            {children}
          </div>
        </Content>
      </Spinner>
      <div className={styles.rightSidebarContainer}>
        {rightSidebar}
      </div>
    </Layout>
  );
};

export default StudentLayout;
