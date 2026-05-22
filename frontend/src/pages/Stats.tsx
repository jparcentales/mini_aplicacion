import { Card, Col, Row, Statistic } from 'antd';
import type { Task } from '../types/Task';

interface StatsProps {
  tasks: Task[];
}

function Stats(props: StatsProps) {
  const totalTasks = props.tasks.length;

  const completedTasks = props.tasks.filter(function (task) {
    return task.completed === true;
  }).length;

  const pendingTasks = totalTasks - completedTasks;

  return (
    <>
      <h1>Estadisticas</h1>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="Total de tareas" value={totalTasks} />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card>
            <Statistic title="Completadas" value={completedTasks} />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card>
            <Statistic title="Pendientes" value={pendingTasks} />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Stats;
