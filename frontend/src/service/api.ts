import axios from 'axios';
import type { Task } from '../types/Task';

const API_URL = 'http://localhost:3001/tasks';

export function getTasks() {
  return axios.get<Task[]>(API_URL);
}

export function createTask(title: string, priority: string) {
  return axios.post<Task>(API_URL, {
    title: title,
    priority: priority,
  });
}

export function updateTask(id: number, data: Partial<Task>) {
  return axios.put<Task>(`${API_URL}/${id}`, data);
}

export function deleteTaskRequest(id: number) {
  return axios.delete(`${API_URL}/${id}`);
}
