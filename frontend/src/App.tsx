import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { message } from 'antd';

import AppLayout from './layout/AppLayout';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Stats from './pages/Stats';
import {
  createTask,
  deleteTaskRequest,
  getTasks,
  updateTask,
} from './service/api';

import type { Task } from './types/Task';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    loadTasks();
  }, []);

  async function loadTasks() {
    setLoading(true);

    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch {
      message.error('No se pudo cargar la lista de tareas');
    } finally {
      setLoading(false);
    }
  }

  async function addTask(title: string, priority: string) {
    try {
      const response = await createTask(title, priority);

      const newTask = response.data;
      setTasks([...tasks, newTask]);
      message.success('Tarea agregada');
    } catch {
      message.error('No se pudo agregar la tarea');
    }
  }

  async function completeTask(id: number) {
    try {
      const selectedTask = tasks.find(function (task) {
        return task.id === id;
      });

      if (!selectedTask) {
        return;
      }

      const response = await updateTask(id, {
        completed: !selectedTask.completed,
      });

      const updatedTask = response.data;

      const updatedTasks = tasks.map(function (task) {
        if (task.id === id) {
          return updatedTask;
        }

        return task;
      });

      setTasks(updatedTasks);
    } catch {
      message.error('No se pudo actualizar la tarea');
    }
  }

  async function editTask(id: number, title: string, priority: string) {
    try {
      const response = await updateTask(id, {
        title: title,
        priority: priority,
      });

      const updatedTask = response.data;

      const updatedTasks = tasks.map(function (task) {
        if (task.id === id) {
          return updatedTask;
        }

        return task;
      });

      setTasks(updatedTasks);
      message.success('Tarea editada');
    } catch {
      message.error('No se pudo editar la tarea');
    }
  }

  async function deleteTask(id: number) {
    try {
      await deleteTaskRequest(id);

      const filteredTasks = tasks.filter(function (task) {
        return task.id !== id;
      });

      setTasks(filteredTasks);
      message.success('Tarea eliminada');
    } catch {
      message.error('No se pudo eliminar la tarea');
    }
  }

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/tasks"
          element={
            <Tasks
              tasks={tasks}
              loading={loading}
              addTask={addTask}
              completeTask={completeTask}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          }
        />

        <Route path="/stats" element={<Stats tasks={tasks} />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
