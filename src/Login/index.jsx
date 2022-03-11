import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Tabs, Modal, message } from 'antd';
import { UserOutlined, LockOutlined, CopyrightOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';
import styles from './login.module.css';


export default function () {
  const [form] = Form.useForm();
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loginType, setLoginType] = useState('default');
  const [codeVisible, setCodeVisible] = useState(false);
  const [codeLoading, setCodeLoading] = useState(false);

  useEffect(() => {

  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (counter > 0) {
        setCounter(counter - 1)
      }
    }, 1000)
  }, [counter])

  function handleSubmit() {
    const formData = form.getFieldsValue();
    if (codeVisible && !formData.captcha) return message.error('请输入验证码');
    setLoading(true);
    formData['type'] = loginType;

  }

  function doLogin(data) {

  }

  function handleCaptcha() {
    setCodeLoading(true);
    const formData = form.getFieldsValue(['username', 'password']);
    formData['type'] = loginType;

  }

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div>Release Tip</div>
        <div className={styles.desc}>灵活、强大、易用的开源运维平台</div>
      </div>
      <div className={styles.formContainer}>
        <Tabs className={styles.tabs} onTabClick={v => setLoginType(v)}>
          <Tabs.TabPane tab="OAuth登录" key="default"/>
          <Tabs.TabPane tab="普通登录" key="ldap"/>
        </Tabs>
        <Form form={form}>
          <Form.Item name="username" className={styles.formItem}>
            <Input
              size="large"
              autoComplete="off"
              placeholder="请输入账户"
              prefix={<UserOutlined className={styles.icon}/>}/>
          </Form.Item>
          <Form.Item name="password" className={styles.formItem}>
            <Input
              size="large"
              type="password"
              autoComplete="off"
              placeholder="请输入密码"
              onPressEnter={handleSubmit}
              prefix={<LockOutlined className={styles.icon}/>}/>
          </Form.Item>
          <Form.Item hidden={!codeVisible} name="captcha" className={styles.formItem}>
            <div style={{display: 'flex'}}>
              <Form.Item noStyle name="captcha">
                <Input
                  size="large"
                  autoComplete="off"
                  placeholder="请输入验证码"
                  prefix={<MailOutlined className={styles.icon}/>}/>
              </Form.Item>
              {counter > 0 ? (
                <Button disabled size="large" style={{marginLeft: 8}}>{counter} 秒后重新获取</Button>
              ) : (
                <Button size="large" loading={codeLoading} style={{marginLeft: 8}}
                        onClick={handleCaptcha}>获取验证码</Button>
              )}
            </div>
          </Form.Item>
        </Form>

        <Button
          block
          size="large"
          type="primary"
          className={styles.button}
          loading={loading}
          onClick={handleSubmit}>登录</Button>
      </div>

      <div className={styles.footerZone}>
        <div className={styles.linksZone}>
          <a className={styles.links} title="官网" href="https://spug.cc" target="_blank"
             rel="noopener noreferrer">官网</a>
          <a className={styles.links} title="Github" href="https://github.com/openspug/spug" target="_blank"
             rel="noopener noreferrer"><GithubOutlined/></a>
          <a title="文档" href="https://spug.cc/docs/about-spug/" target="_blank"
             rel="noopener noreferrer">文档</a>
        </div>
        <div style={{color: 'rgba(0, 0, 0, .45)'}}>Copyright <CopyrightOutlined/> 2022 By JiaQi</div>
      </div>
    </div>
  )
}
