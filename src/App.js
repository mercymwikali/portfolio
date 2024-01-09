import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import { Layout } from 'antd';
import Home from './components/Home';
import AppRoutes from './Routes';

function App() {
  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
  };
  const contentStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    minheight:290
  };
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
  };
  const layoutStyle = {
    overflow: 'hidden',
  //   width: 'calc(100% - 8px)',
    maxWidth: 'calc(100%)',
    height:'100%'
  };
  return (
    <Layout style={layoutStyle} >
      <Nav style={headerStyle} />
      <AppRoutes/>
    </Layout>
  );
}

export default App;
