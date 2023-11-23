import React, { FC, ReactNode } from 'react';
import { Layout } from 'antd';
import styles from './CenterLayout.module.scss';

const { Content } = Layout;

const CenterLayout: FC<{ children?: ReactNode }> = ({ children }) => (
  <Layout className={styles.centerLayout}>
    <Content className={styles.centerContent}>{children}</Content>
  </Layout>
);

export default CenterLayout;
