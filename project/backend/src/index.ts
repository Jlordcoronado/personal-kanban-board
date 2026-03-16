import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


//The model(Interface) 
interface Task {
    id: string;
    title: string;
    description: string;
    status: 'todo' | 'in progress' | 'done';
}

// Mock Data - Temporary storage for tasks
const tasks: Task[] = [
    {id : '1', title: 'Setup backend', description: 'Install Express and TS', status: 'done'},
    {id : '2', title: 'Setup frontend',description: 'Install React and Vite', status: 'done'},
    {id : '3', title: 'Connect API', description: 'Fetch data from the backend', status: 'todo'},
];

// API Routes

app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});