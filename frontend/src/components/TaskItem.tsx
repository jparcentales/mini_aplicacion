import { Button, Tag } from 'antd';
import type { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

function TaskItem(props: TaskItemProps) {
  const task = props.task;

  let priorityColor = 'green';

  if (task.priority === 'Alta') {
    priorityColor = 'red';
  }

  if (task.priority === 'Media') {
    priorityColor = 'orange';
  }

  return (
    <div className="task-item">
      <div>
        <h3 className={task.completed ? 'completed-task' : ''}>
          {task.completed ? 'Completada: ' : 'Pendiente: '}
          {task.title}
        </h3>

        <Tag color={priorityColor}>{task.priority}</Tag>

        <Tag color={task.completed ? 'green' : 'blue'}>
          {task.completed ? 'Completada' : 'Pendiente'}
        </Tag>
      </div>

      <div>
        <Button onClick={() => props.completeTask(task.id)}>
          {task.completed ? 'Marcar pendiente' : 'Completar'}
        </Button>

        <Button
          danger
          onClick={() => props.deleteTask(task.id)}
          style={{ marginLeft: '8px' }}
        >
          Eliminar
        </Button>
      </div>
    </div>
  );
}

export default TaskItem;
