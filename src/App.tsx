import { ConfigProvider, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { themeConfig } from './constants/theme';
import { useRoutes } from 'react-router-dom';
import { routesList } from './router';


function App() {
  const element = useRoutes(routesList);

  return (
    <>
      <ConfigProvider
        theme={{
          token: { ...themeConfig },
        }}
      >
        <Layout className="layout">
          <Header style={{ display: 'flex', alignItems: 'center' }}>
            <NavigationBar></NavigationBar>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content" >
              {element}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>BJ FANTASY ISLAND@2023</Footer>
        </Layout>
      </ConfigProvider>
    </>
  )
}

export default App
