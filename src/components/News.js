import React from 'react'
import { useState } from 'react'
import { Card, Row, Col, Avatar, Button } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from '../styles/news.module.css'

const { Meta } = Card
const News = () => {
//   const { loadings } = this.state
  return (
    <>
      <section className={styles.sectionRow}>
        <Row gutter={[32, 32]}>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="This is the description"
                description="Card title"
              />
            </Card>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
        <Button
          type="primary"
          style={{display: 'flex', margin: '50px auto'}}
          onClick={() => this.enterLoading(1)}
        >
          Read More
        </Button>
      </section>
    </>
  )
}

export default News
