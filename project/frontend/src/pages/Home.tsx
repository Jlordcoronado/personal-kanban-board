import { useState, useEffect } from 'react';
import type { Task } from '../types/task.ts';
import { KanbanColumn } from '../component/KanbanColumn.tsx';
import '../css/App.css'

function Home(){
    const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [dragOverColumn, setDragOverColumn] = useState<Task['status'] | null>(null);

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

  const deleteAllTasks = async() =>{

    if (!window.confirm("Are you sure you want to delete ALL task? This cannot be undone")){
      return;
    }
    try{
      const res = await fetch(API_URL, { method: 'DELETE' });
      if(res.ok){
        setTasks([]);
      }
    } catch (err) {
      console.error('Error deleting all tasks:', err);
    }
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
      
      <button className="delButton" type="button" onClick={deleteAllTasks}>Delete All Tasks</button>
      
      <div className="kanban-board">
      
           <KanbanColumn
             status="todo"
             title="To Do"
             tasks={tasks.filter(t => t.status === 'todo')}
             moveTask={moveTask}
             deleteTask={deleteTask}
             dragOverColumn={dragOverColumn}
             setDragOverColumn={setDragOverColumn}
            />

      
        <KanbanColumn
          status="in progress"
          title="In Progress"
          tasks={tasks.filter(t => t.status === 'in progress')}
          moveTask={moveTask}
          deleteTask={deleteTask}
          dragOverColumn={dragOverColumn}
          setDragOverColumn={setDragOverColumn}
        />
      
        <KanbanColumn
          status="done"
          title="Done"
          tasks={tasks.filter(t => t.status === 'done')}
          moveTask={moveTask}
          deleteTask={deleteTask}
          dragOverColumn={dragOverColumn}
          setDragOverColumn={setDragOverColumn}
        />
        
      </div>
    </div>
  );
}

export default Home