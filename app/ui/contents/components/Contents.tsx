
import React from 'react';
import {Layout, theme } from 'antd';

const { Content } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
       <Content style={{ padding: '0 48px' }}>
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        
            <div 
              className={`
                  my-4 text-center
                  font-bold text-5xl tracking-tight
                  bg-gradient-to-r from-cyan-400 via-green-400 to-pink-400
                  bg-clip-text text-transparent 
              `}
            >
            Next.JSのお勉強をしていた気がするんですが、<br />
            気のせいだったので慌ててなにかつくっている by 1410-3
            </div>
            </div>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default App;
