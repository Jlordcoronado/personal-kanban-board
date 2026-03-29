import type { Task } from '../types/task.ts';

export interface TaskCardProps {
  task: Task;
  status: Task['status'];
  moveTask: (id: string, newStatus: Task['status']) => void;
  deleteTask: (id: string) => void

}

export const TaskCard = ({task, status, moveTask, deleteTask}: TaskCardProps) =>{
    return(
        <div
          className="task-card"
          draggable="true"
          onDragStart={(e) => e.dataTransfer.setData('taskId', task.id)}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div className="task-actions">
            {status !== 'todo' && (
              <button onClick={() => moveTask(task.id, 'todo')}>To Do</button>
            )}
            {status !== 'in progress' && (
              <button onClick={() => moveTask(task.id, 'in progress')}>In Progress</button>
            )}
            {status !== 'done' && (
              <button onClick={() => moveTask(task.id, 'done')}>Done</button>
            )}
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        </div>

        );
};