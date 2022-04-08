import React, { useState } from 'react'
import { Image, Button, Typography, Row, Col, Input } from 'antd'
import Image1 from '../assets/IMG-2159.jpg'
import Image2 from '../assets/IMG-9572.JPG'
import Image3 from '../assets/IMG-1718.jpg'
import styles from '../styles/header.module.css'
// import { Typography } from 'antd'

const { Title } = Typography

const About = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className={styles.about}>
        <div className={styles.aboutImage}>
          <Image
            preview={{ visible: false }}
            width={400}
            src={Image2}
            onClick={() => setVisible(true)}
          />
          <div style={{ display: 'none' }}>
            <Image.PreviewGroup
              preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
            >
              <Image src={Image1} />
              <Image src={Image3} />
              <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
            </Image.PreviewGroup>
          </div>
        </div>
        <div className={styles.aboutInfo}>
          <h1>
            Oyeyemi Kosoko is a writer and social strategist currently based in
            Lagos, Nigeria.
          </h1>
          <p>
            This website is too serious. Subscribe or listen to the TMR
            Newsletter for my fun side.
          </p>
        </div>
      </div>
      <div className={styles.info}>
        <Title level={1}>
          He has written and co-produced a docuseries, worked on ads, and his
          writing has been published in ThisDay Newspaper and The Republic
          Journal. He also co-won the 2021 first-place Excellence in Lagos
          Journalism Prize for In-Depth Reporting. His interests and experience
          span fashion, beauty/wellness, pop culture, women, and more. You can
          commission him or subscribe to his monthly newsletter to read his
          wide-ranging thoughts on these topics. He loves building community
          and developing content that drives conversation.
        </Title>
        <Button type="primary" size="large">
          CONTACT ME
        </Button>
      </div>
      <div>
        <Title level={1} className={styles.newsletter}>
          Get in Touch.
        </Title>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 8, offset: 2 }}>
            <a
              href="mailto:kosokooyeyemi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.email}
            >
              Contact me: kosokooyeyemi@gmail.com
            </a>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 12, offset: 2 }}>
            <Title level={4} className={styles.signEmail}>
              Sign up to my newsletter to get the latest updates on my writing
              and my life!
            </Title>
            <Input
              placeholder="Enter your email"
              className={styles.aboutInput}
            />
            <Button type="primary" size="large" className={styles.newsBtn}>
              SUBSCRIBE
            </Button>
          </Col>
        </Row>
        ,
      </div>
    </>
  )
}

export default About
