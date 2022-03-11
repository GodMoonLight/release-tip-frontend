import React, { useState } from 'react'
import { DashBoard, EnvIcon, Logo } from '../images'
import { Link, Outlet, useMatch,useLocation } from 'react-router-dom'
import './index.scss'

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined, DashboardOutlined, DeploymentUnitOutlined, NodeIndexOutlined,
} from '@ant-design/icons';
import Header from "./Header";
const { SubMenu } = Menu;

const { Content, Footer, Sider } = Layout




function Home() {

  const [collapsed, setCollapsed] = useState(false);

  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/");
  const key = path.length > 1 && path[1] !== "" ? path[1] : "dashboard";
  // key = useMatch('/env') != null ? 'env' : key
  console.log(key);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}  width="175" collapsedWidth="60" className="manage-sider">
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={[key]} mode="inline">
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>

          <SubMenu key="release-menu" icon={<NodeIndexOutlined />} title="应用发布">
            <Menu.Item key="release"><Link to="release">发布计划</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="config-center" icon={<DeploymentUnitOutlined/>} title="配置中心">
            <Menu.Item key="env"><Link to="env">环境管理</Link></Menu.Item>
            <Menu.Item key="service"><Link to="service">服务配置</Link></Menu.Item>
            <Menu.Item key="application"><Link to="application">应用配置</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
        </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Env Management ©2020 Created by Jia Qi</Footer>
      </Layout>

    </Layout>
  )
}

export default Home
