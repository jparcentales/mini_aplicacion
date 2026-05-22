import { Layout, Menu } from 'antd';
import {
  BarChartOutlined,
  CheckSquareOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

const { Header } = Layout;

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  function goToPage(event: { key: string }) {
    navigate(event.key);
  }

  return (
    <Header className="navbar">
      <h2 className="navbar-title">Sistema de Tareas</h2>

      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        onClick={goToPage}
        items={[
          {
            key: '/',
            icon: <HomeOutlined />,
            label: 'Home',
          },
          {
            key: '/tasks',
            icon: <CheckSquareOutlined />,
            label: 'Tareas',
          },
          {
            key: '/stats',
            icon: <BarChartOutlined />,
            label: 'Estadisticas',
          },
        ]}
      />
    </Header>
  );
}

export default Navbar;
