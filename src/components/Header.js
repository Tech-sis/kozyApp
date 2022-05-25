import React from 'react'
import logo from '../assets/logo.svg'
import { Layout, Menu, Input } from 'antd'
import styles from '../styles/header.module.css'
import { MenuOutlined } from '@ant-design/icons'

const { Header } = Layout
const { Search } = Input

const onSearch = (value) => console.log(value)

const NavHeader = () => {
  return (
    <>
      <Header className="header">
        <div className={styles.logo}>
          <h1 className={styles.h1}>Oyeyemi Kosoko</h1>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          overflowedIndicator={<MenuOutlined />}
        >
          <Menu.Item key="1">About</Menu.Item>
          <Menu.Item key="2">Money Diaries</Menu.Item>
          <Menu.Item key="3">Newsletter</Menu.Item>
          <Menu.Item key="4">Rants</Menu.Item>
        </Menu>
      </Header>
    </>
  )
}

export default NavHeader
