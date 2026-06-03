import { Card, Empty, Spin } from 'antd';
import TaskItem from './TaskItem';
import type { Task } from '../../types/Task';

interface TaskListProps {
  tasks: Task[];
  loading: boolean;
  completeTask: (id: number) => void;
  editTask: (id: number, title: string, priority: string) => void;
  deleteTask: (id: number) => void;
}

function TaskList(props: TaskListProps) {
  if (props.loading) {
    return (
      <Card title="Lista de tareas">
        <div className="loading-box">
          <Spin />
          <p>Cargando tareas...</p>
        </div>
      </Card>
    );
  }

  if (props.tasks.length === 0) {
    return <Empty description="No hay tareas registradas" />;
  }

  return (
    <Card title="Lista de tareas">
      {props.tasks.map(function (task) {
        return (
          <TaskItem
            key={task.id}
            task={task}
            completeTask={props.completeTask}
            editTask={props.editTask}
            deleteTask={props.deleteTask}
          />
        );
      })}
    </Card>
  );
}

export default TaskList;
