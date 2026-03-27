import { useState, useEffect } from 'react';
import './App.css';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in progress' | 'done';
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const API_URL = 'http://localhost:5000/api/tasks';

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add a new task
  const addTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newTitle,
          description: newDescription,
          status: 'todo',
        }),
      });
      const newTask = await res.json();
      setTasks([...tasks, newTask]);
      setNewTitle('');
      setNewDescription('');
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  // Update task status
  const moveTask = async (id: string, newStatus: Task['status']) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const updatedTask = await res.json();
      setTasks(tasks.map((t) => (t.id === id ? updatedTask : t)));
    } catch (err) {
      console.error('Error moving task:', err);
    }
  };

  // Delete task
  const deleteTask = async (id: string) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setTasks(tasks.filter((t) => t.id !== id));
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  const renderColumn = (status: Task['status'], title: string) => {
    const columnTasks = tasks.filter((t) => t.status === status);
    return (
      <div className="kanban-column">
        <h2>
          {title} ({columnTasks.length})
        </h2>
        <div className="task-list">
          {columnTasks.map((task) => (
            <div key={task.id} className="task-card">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <div className="task-actions">
                {status !== 'todo' && (
                  <button onClick={() => moveTask(task.id, 'todo')}>
                    To Do
                  </button>
                )}
                {status !== 'in progress' && (
                  <button onClick={() => moveTask(task.id, 'in progress')}>
                    In Progress
                  </button>
                )}
                {status !== 'done' && (
                  <button onClick={() => moveTask(task.id, 'done')}>
                    Done
                  </button>
                )}
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="app-container">
      <h1>Personal Kanban Board</h1>

      <form className="add-task-form" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Task Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="kanban-board">
        {renderColumn('todo', 'To Do')}
        {renderColumn('in progress', 'In Progress')}
        {renderColumn('done', 'Done')}
      </div>
    </div>
  );
}

export default App;
