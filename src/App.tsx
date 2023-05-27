import { Breadcrumb, ConfigProvider, Layout, Menu } from 'antd';
import './App.css';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { themeConfig } from './constants/theme';

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {...themeConfig},
        }}
      >
        <Layout className="layout">
          <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={new Array(15).fill(null).map((_, index) => {
                const key = index + 1;
                return {
                  key,
                  label: `nav ${key}`,
                };
              })}
            />
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content" >
              Content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </ConfigProvider>
    </>
  )
}

export default App
