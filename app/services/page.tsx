"use client";
import React from "react";
import { Layout,  Row, Col, Card } from "antd";
import { EnvironmentOutlined, TeamOutlined, SmileOutlined } from "@ant-design/icons";
import Header from '../ui/header/components/Header'

const Services: React.FC = () => {
  const { Content } = Layout;
  return (
    <>
      <Header/>
      <Content style={{ padding: "50px", marginTop: 64 }}>
      <div style={{ textAlign: "center", marginBottom: 50 }}>
        <strong>事業内容</strong>
        <br />
        <br />
        <h1>「地域をきれいに！ブロークンウィンドウ現象を防ぐぞ！」</h1>
        <p>地域清掃では、ぼっちではありますが確実に地域住民に目撃されています。あの子はゴミを拾う子と。</p>
      </div>

      <Row gutter={[16, 16]} justify="center">
        <Col span={8}>
          <Card title="地域に根ざした活動" bordered={false} hoverable>
            <EnvironmentOutlined style={{ fontSize: 40, color: "#52c41a" }} />
            <p>地元の方々と協力したいですが、ぼっちのためひとりで地域をきれいにします。</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="みんなで協力" bordered={false} hoverable>
            <TeamOutlined style={{ fontSize: 40, color: "#1890ff" }} />
            <p>参加者が楽しく活動できる場を提供します。参加者は私だけです。</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="笑顔と感謝" bordered={false} hoverable>
            <SmileOutlined style={{ fontSize: 40, color: "#faad14" }} />
            <p>活動を通じて地域との絆を深めます。地域のおばあちゃんからは部活にいく高校生と思われています。</p>
          </Card>
        </Col>
      </Row>
      </Content>
    </>
    )
  }

export default Services;
