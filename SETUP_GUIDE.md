# 🚀 Full-Stack Setup Guide (React + Node.js)
*A beginner's cheat sheet for starting new projects.*

---

## 🛠️ Part 1: The Backend (The API)
Think of this as your "Server" or "Data Layer."

### **1. Create Folder & Initialize**
```bash
mkdir backend && cd backend
npm init -y
```
*   **Why?** Creates your `package.json` (the `.csproj` of the Node world).

### **2. Install Core Packages**
```bash
npm install express cors dotenv uuid
```
*   **Why?** 
    *   `express`: Your web server.
    *   `cors`: Allows your Frontend to talk to this Backend.
    *   `dotenv`: For secret variables (like API keys).
    *   `uuid`: For generating unique IDs for tasks.

### **3. Install Developer Tools (TypeScript)**
```bash
npm install -D typescript @types/node @types/express @types/cors @types/uuid tsx
npx tsc --init
```
*   **Why?** 
    *   `typescript`: Adds strict types (essential for .NET devs!).
    *   `@types/...`: Gives you "IntelliSense" (autocomplete) in Cursor.
    *   `tsx`: Runs your code instantly without a slow "Build" step.

### **4. Configure `package.json`**
Add these two lines inside your `package.json`:
1.  `"type": "module"` (Allows modern `import` syntax).
2.  `"scripts": { "dev": "tsx watch src/index.ts" }` (Allows you to run `npm run dev`).

### **5. Create your first file (`src/index.ts`)**
*   **Why?** This is your `Program.cs` or `Startup.cs`. It's where the server starts.

---

## 🎨 Part 2: The Frontend (The UI)
This is your "Dashboard" or "User Interface."

### **1. Scaffold with Vite**
```bash
# Run this inside your main project folder
mkdir frontend && cd frontend
npm create vite@latest . -- --template react-ts
npm install
```
*   **Why?** 
    *   `vite`: The fastest way to build modern web apps.
    *   `react-ts`: Sets up React with TypeScript already configured.

### **2. Cleanup Boilerplate**
*   Open `App.tsx` and delete the default logos/counters.
*   **Why?** Gives you a clean slate to start your own design.

### **3. Start Development**
```bash
npm run dev
```
*   **Why?** This starts the "Hot Reload" server. Any change you save will show up instantly in your browser!

---

## 💡 Pro-Tips for Joshua:
*   **Always use the Ubuntu Terminal** in Cursor/WSL to avoid Windows path errors.
*   **One Terminal per part:** Keep one terminal running `npm run dev` for the Backend and another for the Frontend.
*   **Ctrl + C:** Stops a running server.
