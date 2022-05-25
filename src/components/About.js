import React, { useState } from 'react'
import { Image, Button, Typography, Row, Col, Card, Input } from 'antd'
import Image1 from '../assets/IMG-2159.jpg'
import Image2 from '../assets/IMG-9572.JPG'
import Image3 from '../assets/IMG-1718.jpg'
import styles from '../styles/header.module.css'
// import { Typography } from 'antd'

const { Title, Text } = Typography

const About = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className={styles.about}>
        <div className={styles.aboutImage}>
          <Image
            preview={{ visible: false }}
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
          <h1 className={styles.infoh1}>About Me</h1>
          <p className={styles.infop}>
            <span style={{ display: 'block', fontWeight: 'bolder' }}>
              Content Writer, Brand Storyteller
            </span>
            Every storyteller is answering a question, for me i am mostly trying
            to answer the question about how to use content as a leveraging tool
            to promote brands. I love stories! I love to tell them, I love to
            consume them. I love to be transported to places - from the streets
            of Seoul in a K-Drama to Diagon Alley. I love to use stories to
            communicate, to make brands more relatable and closer to their
            audience.
          </p>
        </div>
      </div>
      <div className={styles.career}>
        <div className={styles.careerInfo}>
          <Title level={3}>Career highlights</Title>
        </div>
        <div className={styles.careerInfoList}>
          <div className={styles.careerInfoListItem}>
            <div className={styles.careerInfoListItemTitle}>
              <Title level={5}>Content Manager</Title>
              <Text>Risevest Technologies, Lagos</Text>
              <Text>January 2021 - Present</Text>
            </div>
            <div className={styles.careerInfoListItemTitle}>
              <Title level={5}>Project Manager</Title>
              <Text>Grandeur Haven </Text>
              <Text>January 2019 - January 2021</Text>
            </div>
            <div className={styles.careerInfoListItemTitle}>
              <Title level={5}>Staff Writer</Title>
              <Text>FSSgistblog</Text>
              <Text>2012 - 2015</Text>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.award}>
        <div className={styles.awardInfo}>
          <Title level={3}>Awards & Certificates</Title>
        </div>
        <div className={styles.awardInfoList}>
          <div className={styles.awardInfoListItem}>
            <div className={styles.awardInfoListItemTitle}>
              {/* <Title level={5}>The Strategy of Content Marketing</Title> */}
              <Text>University of California, Davis- 2022</Text>
            </div>
            <div className={styles.awardInfoListItemTitle}>
              {/* <Title level={5}>/Title> */}
              <Text>Accra Fellow YALI Regional leadership center West Africa 2019</Text>
              {/* <Text></Text> */}
            </div>
            <div className={styles.awardInfoListItemTitle}>
              {/* <Title level={5}>Member</Title> */}
              <Text>Chartered institute of Personnel management Nigeria </Text>
              {/* <Text>2020</Text> */}
            </div>
            <div className={styles.awardInfoListItemTitle}>
              {/* <Title level={5}>Member</Title> */}
              <Text>Project management institute</Text>
              {/* <Text>2020</Text> */}
            </div>
            <div className={styles.awardInfoListItemTitle}>
              {/* <Title level={5}>Student of the Year</Title> */}
              <Text>Political science class of 2015</Text>
            </div>
            <div className={styles.awardInfoListItemTitle}>
              {/* <Title level={5}>Assmus best Graduating student</Title> */}
              <Text>Department ofPolitical science 2015</Text>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.info}>
        <Title level={1}>
          He has written and co-produced a docuseries, worked on ads, and his
          writing has been published in ThisDay Newspaper and The Republic
          Journal. He also co-won the 2021 first-place Excellence in Lagos
          Journalism Prize for In-Depth Reporting. His interests and experience
          span fashion, beauty/wellness, pop culture, women, and more. You can
          commission him or subscribe to his monthly newsletter to read his
          wide-ranging thoughts on these topics. He loves building community and
          developing content that drives conversation.
        </Title>
        <Button type="primary" size="large">
          CONTACT ME
        </Button>
      </div> */}
      {/* <div>
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
      </div> */}
    </>
  )
}

export default About
