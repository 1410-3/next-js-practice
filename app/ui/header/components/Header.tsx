import React from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

// メニュー項目の定義
const contents: MenuProps['items'] = [
  { key: 'company', label: '会社案内' },
  { key: 'services', label: '事業内容' },
  { key: 'recruit', label: '採用情報' },
  { key: 'news', label: 'ニュース' },
  { key: 'contact', label: 'お問い合わせ' },
];

const App: React.FC = () => {
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    switch (e.key) {
      case 'company':
        window.location.href = '/company'; 
        break;
      case 'services':
        window.location.href = '/services'; 
        break;
      case 'recruit':
        window.location.href = '/recruit'; 
        break;
      case 'news':
        window.location.href = '/news';
        break;
      case 'contact':
        window.location.href = '/contact';
        break;
      default:
        break;
    }
  };

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['company']}
          items={contents}
          style={{ flex: 1, minWidth: 0 }}
          onClick={handleMenuClick} // クリックイベントを設定
        />
      </Header>
    </Layout>
  );
};

export default App;
