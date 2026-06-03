import { ConfigProvider, Layout } from 'antd';
import type { ReactNode } from 'react';
import Navbar from './Navbar';

const { Content } = Layout;

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3b82f6',
          colorBgBase: '#000000',
          colorBgContainer: '#111827',
          colorText: '#f9fafb',
          colorTextSecondary: '#d1d5db',
          colorBorder: '#374151',
          borderRadius: 8,
        },
      }}
    >
      <Layout className="app-layout">
        <Navbar />

        <Content className="app-content">{children}</Content>
      </Layout>
    </ConfigProvider>
  );
}

export default AppLayout;
