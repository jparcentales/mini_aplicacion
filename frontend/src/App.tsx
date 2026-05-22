import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ConfigProvider, Layout, message } from 'antd';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Stats from './pages/Stats';

import type { Task } from './types/Task';

const { Content } = Layout;
const API_URL = 'http://localhost:3001/tasks';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(function () {
    loadTasks();
  }, []);

  async function loadTasks() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data);
    } catch {
      message.error('No se pudo cargar la lista de tareas');
    }
  }

  async function addTask(title: string, priority: string) {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          priority: priority,
        }),
      });

      const newTask = await response.json();
      setTasks([...tasks, newTask]);
      message.success('Tarea agregada');
    } catch {
      message.error('No se pudo agregar la tarea');
    }
  }

  async function completeTask(id: number) {
    try {
      const response = await fetch(`${API_URL}/${id}/complete`, {
        method: 'PATCH',
      });

      const updatedTask = await response.json();

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

  async function deleteTask(id: number) {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

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
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3b82f6',
          colorBgBase: '#000000',
          colorBgContainer: '#111827',
          colorText: '#f9fafb',
          colorTextSecondary: '#d1d5db',
          colorBorder: '#374151',
          borderRadius: 8,
        },
      }}
    >
      <Layout className="app-layout">
        <Navbar />

        <Content className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/tasks"
              element={
                <Tasks
                  tasks={tasks}
                  addTask={addTask}
                  completeTask={completeTask}
                  deleteTask={deleteTask}
                />
              }
            />

            <Route path="/stats" element={<Stats tasks={tasks} />} />
          </Routes>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
