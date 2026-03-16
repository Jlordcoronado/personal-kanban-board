# 🎓 Git & GitHub Setup Guide
*How to save your code to the cloud and work from anywhere.*

---

## 🧠 Why Git?
- **Git** is like a "Save Game" for your code. It tracks every change you make.
- **GitHub** is like a cloud backup. It stores your code online so you can access it from your laptop, share it, or show it to employers.

---

## 🛠️ Phase 1: Local Setup (Do this once per machine)

### 1. Configure Your Identity
Git needs to know who you are so it can label your changes.
Run these commands in your terminal (replace with your info):

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## 🚀 Phase 2: Project Setup (Do this once per project)

### 1. Initialize Git
Turn your project folder into a Git repository.
**Command:**
```bash
git init
```
*(You will see a message: "Initialized empty Git repository in...")*

### 2. The `.gitignore` File (Crucial!)
We must tell Git to **ignore** massive folders like `node_modules` (dependencies) and secrets like `.env`.
**Action:** Create a file named `.gitignore` in your project root with this content:

```
# Dependencies (Massive folders we can re-install)
node_modules/

# Build Output
dist/
build/

# Environment Variables (Secrets - NEVER commit these!)
.env
.env.local

# System Files
.DS_Store
Thumbs.db

# IDE Settings
.vscode/
.idea/
```

### 3. Save Your Changes (Commit)
This takes a "snapshot" of your current code.
**Commands:**
```bash
git add .
git commit -m "Initial commit: Project setup"
```

---

## ☁️ Phase 3: Connect to GitHub

### 1. Create a Repository
1.  Go to [GitHub.com](https://github.com/new).
2.  **Name:** `personal-kanban` (or whatever you like).
3.  **Description:** "My first full-stack app!"
4.  **Public/Private:** Choose Public (great for portfolio) or Private.
5.  **Do NOT** check "Add a README", ".gitignore", or "license". Keep it empty.
6.  Click **Create repository**.

### 2. Link & Push
Copy the commands GitHub gives you under "…or push an existing repository from the command line":

```bash
git remote add origin <YOUR_GITHUB_URL>
git branch -M main
git push -u origin main
```

*(You might be asked to sign in to GitHub in the browser)*

---

## 💻 Phase 4: Working on Another Machine (Laptop)

To get your code on your laptop:

1.  Install Git on your laptop.
2.  Open a terminal/command prompt.
3.  Run:
    ```bash
    git clone <YOUR_GITHUB_URL>
    ```
4.  Enter the folder: `cd personal-kanban`
5.  **Important:** Install dependencies! (Since we ignored `node_modules`)
    ```bash
    npm install
    # (Do this inside both backend/ and frontend/ folders if needed)
    ```

---

## 🔄 Daily Workflow

1.  **Work** on your code.
2.  **Save** your work:
    ```bash
    git add .
    git commit -m "Added new feature"
    ```
3.  **Upload** to GitHub:
    ```bash
    git push
    ```
4.  **Download** on the other machine:
    ```bash
    git pull
    ```
