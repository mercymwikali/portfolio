import './App.css';
import Nav from './components/Nav';
import { Layout } from 'antd';
import AppRoutes from './Routes';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
  };
  const layoutStyle = {
    overflow: 'hidden',
  //   width: 'calc(100% - 8px)',
    maxWidth: 'calc(100%)',
    height:'100%'
  };
  return (
    <Layout style={layoutStyle}  >
      <Nav style={headerStyle} />
      <AppRoutes/>
      <Analytics />
    </Layout>
  );
}

export default App;
