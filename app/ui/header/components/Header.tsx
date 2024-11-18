import React from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu,  } from 'antd';

const { Header } = Layout;

const contents: MenuProps['items'] = ['会社案内', '事業内容', '採用情報', 'ニュース', 'お問い合わせ'].map((key) => ({
  key,
  label: `${key}`,
}));

const App: React.FC = () => {

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={contents}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
    </Layout>
  );
};

export default App;
