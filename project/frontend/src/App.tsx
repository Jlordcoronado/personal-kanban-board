import { useState, useEffect } from 'react'
import './App.css'

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in progress' | 'done';
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
    .then((res) => res.json())
    .then((data) => setTasks(data))
    .catch((err) => console.error('Error fetching tasks:', err));
  }, []);
  
  return (
    <>
      <div className='app-container'>
        <h1>My Kanban Board</h1>
        <div className='task-list'>
          {tasks.map((task) => (
            <div key={task.id} className='task-card'>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>{task.status}</p>
            </div>
          ))}
        </div>
        
      </div>
    </>
  )
}

export default App
