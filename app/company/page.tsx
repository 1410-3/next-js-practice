"use client";
import React from "react";
import { Card, Row, Col, Table} from "antd";
import {dataSource, columns} from './types'

const Company: React.FC = () => {
  return (
    <>
      <div style={{ padding: "40px 20px", backgroundColor: "#f9f9f9" }}>
        <Row justify="center">
          <Col xs={24} sm={18} md={16} lg={12}>
            <Card
              style={{ textAlign: "center", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
            >
             <strong>代表挨拶</strong>
              <br />
              <br />
              <div style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                この度は当社のウェブサイトをご訪問いただき、誠にありがとうございます。
                <br />
                私たちはジョギング後のクールダウン時にたまにゴミを拾っています。
                <br />
                今後ともゆるくよろしくおねがいいたします。
              </div>
              <div style={{ marginTop: "20px" }}>
                代表取締役 <strong>1410-3</strong>
              </div>
            </Card>
            <br />
            <Card
              style={{ textAlign: "center", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
            >
             <strong>ミッションアンドステートメント</strong>
              <br />
              <br />
              <div style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                のびのびと楽しくおしごとをすることです。
              </div>
            </Card>
            <br />
            <Card
              style={{ textAlign: "center", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
            >
              <div style={{ padding: "40px 20px" }}>
                <strong style={{ textAlign: "center", marginBottom: "20px" }}>会社概要</strong>
                <br />
                <br />
                <Table
                  dataSource={dataSource}
                  columns={columns}
                  pagination={false}
                  bordered
                  style={{ maxWidth: "800px", margin: "0 auto" }}
                />
              </div>
            </Card>
            <br />
            <Card
              style={{ textAlign: "center", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
            >
              <div style={{ padding: "40px 20px" }}>
                <strong style={{ textAlign: "center", marginBottom: "20px" }}>組織図</strong>
                <br />
                <br />
                とくになし。ひとりだから。
              </div>
            </Card>
            <br />
            <Card
              style={{ textAlign: "center", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
            >
              <div style={{ padding: "40px 20px" }}>
                <strong style={{ textAlign: "center", marginBottom: "20px" }}>社名の由来</strong>
                <br />
                <br />
                ishito-sanを数字で表すと、1 4 10 - 3 でいけたから。
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Company;
