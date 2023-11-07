import React, {useState} from 'react';
import {Layout, Menu, Switch} from 'antd';
import {BulbOutlined, CodeSandboxOutlined} from '@ant-design/icons';
import CalculateForm from './components/form/Form.component.jsx';
import {getThemeStyles} from "./utils/getStyles.js";

const {Header, Content} = Layout;

export default function App() {
    const [theme, setTheme] = useState('dark');

    const handleThemeChange = checked => {
        const newTheme = checked ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <Layout style={getThemeStyles(theme, {minHeight: "100vh", height: "100%"})}>
            <Header style={getThemeStyles(theme, {padding: 0})}>
                <Menu theme={theme} mode="horizontal">
                    <Menu.Item key="logo">
                        <CodeSandboxOutlined/>
                        Trade Smart!
                    </Menu.Item>
                    <Menu.Item key="themeSwitcher"
                               className="theme-switcher"
                               style={{width: 'fit-content', marginLeft: 'auto'}}
                    >
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
                <CalculateForm theme={theme}/>
            </Content>
        </Layout>
    );
}