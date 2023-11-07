import React, {useState} from 'react';
import {Layout, Menu, Switch} from 'antd';
import {BulbOutlined, CodeSandboxOutlined} from '@ant-design/icons';
import CalculateForm from './components/Form';

const {Header, Content} = Layout;

export default function App() {
    const [theme, setTheme] = useState('dark');

    const handleThemeChange = checked => {
        const newTheme = checked ? 'dark' : 'light';
        setTheme(newTheme);
    };

    const getThemeStyles = (theme, additionalStyles) => {
        return {
            ...additionalStyles,
            background: theme === 'dark' ? '#000' : '',
            color: theme === 'dark' ? '#fff' : '',
        }
    }

    return (
        <Layout style={getThemeStyles(theme, {minHeight: "100vh", height: "100%"})}>
            <Header style={getThemeStyles(theme, {padding: 0})}>
                <Menu theme={theme} mode="horizontal">
                    <Menu.Item key="logo">
                        <CodeSandboxOutlined/>
                        Logo
                    </Menu.Item>
                    <Menu.Item key="themeSwitcher" style={{float: 'right'}}>
                        <BulbOutlined/>
                        <Switch
                            checked={theme === 'dark'}
                            onChange={handleThemeChange}
                            checkedChildren="Dark"
                            unCheckedChildren="Light"
                        />
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={getThemeStyles(theme)}>
                <CalculateForm/>
            </Content>
        </Layout>
    );
}