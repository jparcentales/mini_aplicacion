import { useState } from 'react';
import { Button, Input, Select, Card } from 'antd';

interface TaskFormProps {
  addTask: (title: string, priority: string) => Promise<void>;
}

function TaskForm(props: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Alta');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (title.trim() === '') {
      alert('Debes escribir una tarea');
      return;
    }

    await props.addTask(title, priority);

    setTitle('');
    setPriority('Alta');
  }

  return (
    <Card title="Agregar nueva tarea">
      <form onSubmit={handleSubmit}>
        <p>Tarea:</p>

        <Input
          placeholder="Ejemplo: Estudiar React"
          value={title}
          onChange={function (event) {
            setTitle(event.target.value);
          }}
        />

        <p>Prioridad:</p>

        <Select
          value={priority}
          style={{ width: '100%' }}
          onChange={function (value) {
            setPriority(value);
          }}
          options={[
            { value: 'Alta', label: 'Alta' },
            { value: 'Media', label: 'Media' },
            { value: 'Baja', label: 'Baja' },
          ]}
        />

        <Button type="primary" htmlType="submit" style={{ marginTop: '15px' }}>
          Agregar tarea
        </Button>
      </form>
    </Card>
  );
}

export default TaskForm;
