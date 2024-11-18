import React from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';

const { Footer } = Layout;

const contents: MenuProps['items'] = ['ADDRESS', 'NEWS', 'POLICY'].map((key) => ({
  key,
  label: `${key}`,
}));

const App: React.FC = () => {
  return (
    <Layout>
      <Footer style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={contents}
            style={{
              width: '100%', 
              display: 'flex', 
              justifyContent: 'center', 
            }}
          />
        </div>
        Ant Design ©{new Date().getFullYear()} Created by 1410-3
      </Footer>
    </Layout>
  );
};

export default App;
