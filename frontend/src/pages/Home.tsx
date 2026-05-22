import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Card>
      <h1>Sistema interactivo de gestion de tareas personales</h1>

      <p>
        Bienvenido. En esta aplicacion puedes agregar tareas, marcarlas como
        completadas, eliminarlas y revisar tus estadisticas.
      </p>

      <Link to="/tasks">
        <Button type="primary">Ir a tareas</Button>
      </Link>

      <Link to="/stats">
        <Button style={{ marginLeft: '10px' }}>Ir a estadisticas</Button>
      </Link>
    </Card>
  );
}

export default Home;
