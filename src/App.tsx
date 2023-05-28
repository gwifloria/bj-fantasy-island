import { Breadcrumb, ConfigProvider, Layout, Menu } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import {
  RouterProvider
} from "react-router-dom";
import './App.css';
import { themeConfig } from './constants/theme';
import { router, routesList } from './router';


function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: { ...themeConfig },
        }}
      >
        <Layout className="layout">
          <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              items={routesList.map((item)=>{return {
                title:item.id,
                key:item.id
              }})}
            />
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content" >
              <RouterProvider router={router} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>BJ FANTASY ISLAND@2023</Footer>
        </Layout>
      </ConfigProvider>
    </>
  )
}

export default App
