"use client";
import React from "react";
import { Layout, Typography, List, Avatar, Divider } from "antd";
import Header from '../ui/header/components/Header'

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const newsData = [
  {
    title: "地域清掃イベントが大成功！",
    description: "メンタルケアをするためにジョギング後のクールダウンで梅おにぎりのパッケージを拾うことに成功しました。",
    date: "2024-11-18",
    avatar: "https://via.placeholder.com/40",
  },
  {
    title: "環境保護プロジェクト開始",
    description: "朝のゴミ出しのついでに地域清掃をすることで少しだけ良い気分を味わうことができます。",
    date: "2024-11-15",
    avatar: "https://via.placeholder.com/40",
  },
];

const News = () => {
  return (
  <>
  <Header/>
  <Layout>
      <Content style={{ padding: "50px 20px", backgroundColor: "#f0f2f5" }}>
        <Title level={4}>最新のニュース一覧</Title>
        <Divider />

        <List
          itemLayout="horizontal"
          dataSource={newsData}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.link}>{item.title}</a>}
                description={
                  <div>
                    <Paragraph style={{ margin: 0 }}>{item.description}</Paragraph>
                    <small style={{ color: "#888" }}>公開日: {item.date}</small>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  </>
  )
}

export default News

 