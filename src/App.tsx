import { ConfigProvider, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { useNavigate, useRoutes } from 'react-router-dom';
import './App.scss';
import { NavigationBar } from './components/NavigationBar';
import { themeConfig } from './constants/theme';
import { routesList } from './router';

import { UserOutlined } from '@ant-design/icons';

function App() {
  const element = useRoutes(routesList);
  const navigate = useNavigate()

  return (
    <>
      <ConfigProvider
        theme={{
          token: { ...themeConfig },
        }}
      >
        <Layout className="layout">
          <Header style={{ display: 'flex', alignItems: 'center',justifyContent:'space-between' }}>
            <NavigationBar></NavigationBar>
            <UserOutlined onClick={()=>navigate('/personalCenter')}  style={{fontSize:'20px',color:'#fff',cursor:'pointer'}}/>
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
