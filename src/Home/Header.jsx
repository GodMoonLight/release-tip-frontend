import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

import styles from './Header.module.scss';


export default function (props) {

  function handleLogout() {

  }

  const UserMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/welcome/info">
          <UserOutlined style={{ marginRight: 10 }}/>个人中心
        </Link>
      </Menu.Item>
      <Menu.Divider/>
      <Menu.Item onClick={handleLogout}>
        <LogoutOutlined style={{ marginRight: 10 }}/>退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout.Header className={styles.header}>

      <div className={styles.right}>
        <Dropdown overlay={UserMenu} style={{ background: '#000' }}>
          <span className={styles.action}>
            <Avatar style={{ backgroundColor: '#87d068', marginRight: 8 }} icon={<UserOutlined/>}/>
            {localStorage.getItem('nickname')}
          </span>
        </Dropdown>
      </div>
    </Layout.Header>
  )
}
