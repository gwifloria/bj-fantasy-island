import { ConfigProvider, Layout, theme } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { memo, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.scss';
import { NavigationBar } from './components/NavigationBar';
import { themeConfig } from './constants/theme';
import { routesList } from './router';
import { ContactMe } from './components/ContactMe';
const { useToken } = theme;

const MainLayout = () => {
  const element = useRoutes(routesList);
  const { token: customTheme } = useToken();

  return <Layout className="layout">
  <Header className='header' style={{ backgroundColor: customTheme.colorBgLayout, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <NavigationBar></NavigationBar>
    <ContactMe></ContactMe>
  </Header>
  <Content className='content'>
    {element}
  </Content>
</Layout>
}

function App() {
  useEffect(()=>{
    console.log(222);
  },[])
  return (
    <>
      <ConfigProvider
        theme={{
          token: { ...themeConfig },
        }}
      >
        <MainLayout />
      </ConfigProvider>
    </>
  )
}

export default memo(App)
