import React, { useState } from 'react';
import { Layout, Menu, Switch } from 'antd';
import { BulbOutlined, CodeSandboxOutlined } from '@ant-design/icons';
import CalculateForm from './components/Form';

const { Header, Content } = Layout;

export default function App() {
  const [theme, setTheme] = useState('dark');

  const handleThemeChange = checked => {
    const newTheme = checked ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <Layout
      style={{
        background: theme === 'dark' ? '' : '#fff'
      }}
    >
      <Header>
        <Menu theme={theme} mode="horizontal">
          <Menu.Item key="logo">
            <CodeSandboxOutlined />
            Logo
          </Menu.Item>
          <Menu.Item key="themeSwitcher" style={{ float: 'right' }}>
            <BulbOutlined />
            <Switch
              checked={theme === 'dark'}
              onChange={handleThemeChange}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <CalculateForm />
      </Content>
    </Layout>
  );
}