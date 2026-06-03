import { Button, Tag } from 'antd';
import type { Task } from '../../types/Task';

interface TaskItemProps {
  task: Task;
  completeTask: (id: number) => void;
  editTask: (id: number, title: string, priority: string) => void;
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

  function handleEdit() {
    const newTitle = window.prompt('Nuevo nombre de la tarea:', task.title);

    if (!newTitle || newTitle.trim() === '') {
      return;
    }

    const newPriority = window.prompt(
      'Nueva prioridad: Alta, Media o Baja',
      task.priority,
    );

    if (
      newPriority !== 'Alta' &&
      newPriority !== 'Media' &&
      newPriority !== 'Baja'
    ) {
      alert('La prioridad debe ser Alta, Media o Baja');
      return;
    }

    props.editTask(task.id, newTitle, newPriority);
  }

  return (
    <div className="task-item">
      <div>
        <h3 className={task.completed ? 'completed-task' : ''}>
          {task.completed ? '[v] ' : '[ ] '}
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

        <Button onClick={handleEdit} style={{ marginLeft: '8px' }}>
          Editar
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
