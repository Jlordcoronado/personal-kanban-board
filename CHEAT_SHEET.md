# 🛠️ Full-Stack Freelance Cheat Sheet (Joshua)
*Project: Personal Kanban Board*

---

## 📂 1. Project Scaffolding (WSL / Linux)
These commands set up the structure of your application.

| Command | What it does | .NET Equivalent |
| :--- | :--- | :--- |
| `mkdir <name>` | Create a new folder. | New Folder in Explorer |
| `cd <name>` | "Change Directory" (Move into a folder). | Opening a project folder |
| `code .` | Open the current folder in **VS Code**. | Opening a `.sln` in VS Studio |
| `ls` | List files in the current folder. | Solution Explorer view |

---

## 📦 2. NPM (Node Package Manager)
This is your "NuGet" for the JavaScript/TypeScript world.

| Command | What it does | Why we use it |
| :--- | :--- | :--- |
| `npm init -y` | Initializes a Node project. | Creates `package.json` (your `.csproj`) |
| `npm install <pkg>` | Install a library. | Like adding a NuGet Package |
| `npm install -D <pkg>` | Install a **DevDependency**. | Tools used *only* during coding (like compilers) |
| `npm run <script>` | Run a predefined task. | Like "Build" or "Debug" in VS |

---

## 🚀 3. Our Specific Stack (Backend)
Run these inside the `server/` folder to set up our API.

```bash
# Initialize the project
npm init -y

# Install the "Express" Web Server
npm install express

# Install TypeScript & Development Tools
npm install -D typescript @types/node @types/express ts-node-dev
```

### **The "Why" Behind the Tools:**
*   **Express:** The framework that handles HTTP requests (GET, POST).
*   **TypeScript:** Adds "Strict Types" to JavaScript (essential for .NET devs!).
*   **@types/...:** Provides "IntelliSense" so you get autocomplete in VS Code.
*   **ts-node-dev:** Automatically restarts the server when you save a file. No more manual "Rebuilds"!

---

## 📝 4. Pro-Tips for Joshua
*   **VS Code Terminal:** Press `Ctrl + ` ` (backtick) to open.
*   **Stop a Process:** Press `Ctrl + C` in the terminal to stop a running server.
*   **Auto-Complete:** Start typing a folder name and press `Tab` to finish it.
