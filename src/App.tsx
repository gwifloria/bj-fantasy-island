import { ConfigProvider, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { useRoutes } from 'react-router-dom';
import './App.scss';
import { NavigationBar } from './components/NavigationBar';
import { themeConfig } from './constants/theme';
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
          <Header style={{ display: 'flex', background: 'none', alignItems: 'center', justifyContent: 'flex-end' }}>
            <NavigationBar></NavigationBar>
          </Header>
          <Content style={{ padding: '32px 48px' }}>
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
