import { ConfigProvider, Layout, theme } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { useRoutes } from 'react-router-dom';
import './App.scss';
import { NavigationBar } from './components/NavigationBar';
import { themeConfig } from './constants/theme';
import { routesList } from './router';
const { useToken } = theme;

const MainLayout = () => {
  const element = useRoutes(routesList);
  const { token: customTheme } = useToken();

  return <Layout className="layout">
    <Header className='header' style={{ backgroundColor: customTheme.colorPrimary, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <NavigationBar></NavigationBar>
    </Header>
    <Content className='content'>
      {element}
    </Content>
  </Layout>
}

function App() {
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

export default App
