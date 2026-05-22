import { Card, Empty } from 'antd';
import TaskItem from './TaskItem';
import type { Task } from '../types/Task';

interface TaskListProps {
  tasks: Task[];
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

function TaskList(props: TaskListProps) {
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
            deleteTask={props.deleteTask}
          />
        );
      })}
    </Card>
  );
}

export default TaskList;
