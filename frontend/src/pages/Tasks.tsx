import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import type { Task } from '../types/Task';

interface TasksProps {
  tasks: Task[];
  addTask: (title: string, priority: string) => Promise<void>;
  completeTask: (id: number) => void;
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
        completeTask={props.completeTask}
        deleteTask={props.deleteTask}
      />
    </>
  );
}

export default Tasks;
