import { ConfigProvider, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import {
  RouterProvider
} from "react-router-dom";
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { themeConfig } from './constants/theme';
import { router } from './router';


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
            <NavigationBar></NavigationBar>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb> */}
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
