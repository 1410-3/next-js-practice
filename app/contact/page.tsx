"use client";
import React from "react";
import { Layout, Typography, Button } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import Header from '../ui/header/components/Header'

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Contact = () => {
  return (
    <>
    <Header />
    <Layout>
      <Content style={{ padding: "50px 20px", textAlign: "center", backgroundColor: "#f0f2f5" }}>
        <Title level={4}>お問い合わせはこちら</Title>
        <Paragraph style={{ fontSize: "16px", marginBottom: "20px" }}>
          ご不明な点やお問い合わせは、以下のリンク先からお手続きください。
        </Paragraph>
        <Button
          type="primary"
          size="large"
          icon={<LinkOutlined />}
          href="https://x.com/times_1410_3"
          target="_blank"
          rel="noopener noreferrer"
        >
          1410-3のXへ移動
        </Button>
      </Content>
    </Layout>
    </>
  );
};

export default Contact;
