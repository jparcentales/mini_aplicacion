import TaskForm from '../components/tasks/TaskForm';
import TaskList from '../components/tasks/TaskList';
import type { Task } from '../types/Task';

interface TasksProps {
  tasks: Task[];
  loading: boolean;
  addTask: (title: string, priority: string) => Promise<void>;
  completeTask: (id: number) => void;
  editTask: (id: number, title: string, priority: string) => void;
  deleteTask: (id: number) => void;
}

function Tasks(props: TasksProps) {
  return (
    <>
      <h1>Mis tareas</h1>

      <TaskForm addTask={props.addTask} />

      <br />

      <TaskList
        tasks={props.tasks}
        loading={props.loading}
        completeTask={props.completeTask}
        editTask={props.editTask}
        deleteTask={props.deleteTask}
      />
    </>
  );
}

export default Tasks;
