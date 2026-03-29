import type { Task } from '../types/task.ts';
import { TaskCard } from './TaskCard.tsx'

interface KanbanColumnProps{
    status: Task['status'];
    title: string;
    tasks: Task[];
    moveTask: (id: string, newStatus: Task['status']) => void;
    deleteTask: (id: string)=>void;
    dragOverColumn: Task['status'] | null;
    setDragOverColumn: (status: Task['status'] | null) => void;
}

export const KanbanColumn = ({
    status,
    title,
    tasks,
    moveTask,
    deleteTask,
    dragOverColumn,
    setDragOverColumn
}: KanbanColumnProps) => {
    return(
        <div
            className={`kanban-column ${dragOverColumn === status? 'drag-over': ''}`}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => setDragOverColumn(status)}
            onDragLeave={() => setDragOverColumn(null)}
            onDrop={(e)=> {const id = e.dataTransfer.getData('taskId');
                moveTask(id,status);
                setDragOverColumn(null);
            }}
        >
            <h2>{title} ({tasks.length})</h2>
            
            <div className="task-list"> 
                
                {tasks.map((task) => (
                <TaskCard 
                    key={task.id}
                    task={task}
                    status={status}
                    moveTask={moveTask}
                    deleteTask={deleteTask}
                />
                ))}
            </div>
        </div>
    )
}
