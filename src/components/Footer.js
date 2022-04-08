import React from 'react'
import { Space } from 'antd'
import {
  MailOutlined,
  InstagramFilled,
  TwitterOutlined,
  FacebookFilled,
  LinkedinFilled,
} from '@ant-design/icons'
import { Footer } from 'antd/lib/layout/layout'
import styles from '../styles/header.module.css'

const FooterSection = () => {
  return (
    <Footer className={styles.footer}>
      <Space>
        <FacebookFilled />
        <LinkedinFilled />
        <InstagramFilled />
        <TwitterOutlined />
        {/* <MailOutlined /> */}
      </Space>
      <div className={styles.footerDiv}>
        <p className={styles.footerP}>Copyright ©2022 Created by Amma</p>
      </div>
    </Footer>
  )
}

export default FooterSection
