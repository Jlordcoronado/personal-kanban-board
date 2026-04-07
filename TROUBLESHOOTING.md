# 🛠️ Troubleshooting & Setup Guide (Lessons Learned)

This file tracks specific errors encountered during the development of the Personal Kanban Board and how they were resolved. Use this for reference when setting up new environments.

---

## 🎨 Tailwind CSS v4 Setup Issues

### 1. Error: `Cannot find module '@tailwindcss/vite'`
- **Symptoms:** TypeScript error in `vite.config.ts` or the "Problems" tab in Cursor/VS Code.
- **The Fix:**
    1. Ensure the package is installed: `npm install -D @tailwindcss/vite`.
    2. Update `tsconfig.node.json` to include the types:
       ```json
       "types": ["node", "@tailwindcss/vite"]
       ```
    3. **Restart the TS Server:** `Ctrl + Shift + P` -> "TypeScript: Restart TS Server".

### 2. Error: Tailwind styles not applying (page stays white/messy)
- **Symptoms:** You added Tailwind classes but the UI doesn't change.
- **The Fix:** 
    - Check if legacy CSS files (like `App.css`) are still imported. They often have high-specificity styles that block Tailwind. 
    - **Action:** Remove `import './App.css'` from `App.tsx` and `Home.tsx`.

---

## 🔐 Git & SSH Security Issues

### 1. Error: `fatal: detected dubious ownership in repository`
- **Symptoms:** Occurs when running Git commands in PowerShell/Windows on a folder inside WSL.
- **The Fix:** Tell Git the directory is safe (run this in the terminal where the error appeared):
    ```bash
    git config --global --add safe.directory '%(prefix)///wsl.localhost/Ubuntu/home/joshua/kanbanproject/personal-kanban-board'
    ```

### 2. Error: `Invalid username or token. Password authentication is not supported`
- **Symptoms:** GitHub rejects your password during `git push`.
- **The Fix:** Switch to **SSH Keys**.
    1. Generate key: `ssh-keygen -t ed25519 -C "your@email.com"`.
    2. Add to agent: `ssh-add ~/.ssh/id_ed25519`.
    3. Copy public key (`cat ~/.ssh/id_ed25519.pub`) to GitHub Settings.
    4. **Crucial:** Change the remote URL to use SSH:
       ```bash
       git remote set-url origin git@github.com:Jlordcoronado/personal-kanban-board.git
       ```

---

## 🌓 Dark Mode Issues

### 1. Error: Background doesn't turn dark despite `class="dark"`
- **Symptoms:** `<html class="dark">` is set but the background stays white.
- **The Fix:** Tailwind v4 needs explicit CSS variable mapping in `index.css`:
    ```css
    :root { background: white; color: black; }
    .dark { background: #0f172a; color: #f8fafc; }
    ```
