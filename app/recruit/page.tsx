"use client";
import React from "react";
import { Layout, Typography, Row, Col } from "antd";
import { MehOutlined } from "@ant-design/icons";
import Header from '../ui/header/components/Header'

const { Content} = Layout;
const { Title, Paragraph } = Typography;

const Recruit: React.FC = () => {
  return (
    <>
      <Header/>
      <Layout>
      {/* Header */}

      {/* Main Content */}
      <Content style={{ padding: "50px 20px", textAlign: "center", backgroundColor: "#f0f2f5" }}>
        <Row justify="center" align="middle" style={{ minHeight: "60vh" }}>
          <Col span={24}>
            <MehOutlined style={{ fontSize: "64px", color: "#faad14" }} />
            <Title level={2} style={{ marginTop: "20px" }}>
              現在、募集は行っておりません...ごめんて＞＜
            </Title>
            <Paragraph style={{ marginBottom: "40px", fontSize: "16px" }}>
              現在、新しいスタッフの募集は行っておりませんが、ジョギング後のクールダウン中にゴミを拾っているあなたは同士です！
            </Paragraph>
          </Col>
        </Row>
      </Content>
    </Layout>
    </>
    )
  }

export default Recruit;
