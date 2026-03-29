# 💻 Setting Up Your Laptop Environment

Follow these steps to pull the project and start development on your new laptop.

## 1. Prerequisites
Ensure you have the following installed:
- **Git**
- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

## 2. Clone the Repository
Open your terminal or command prompt and run:
```bash
git clone https://github.com/Jlordcoronado/personal-kanban-board.git
cd personal-kanban-board
```

## 3. Install Dependencies
You need to install packages for both the backend and the frontend.

### Backend Setup
```bash
cd project/backend
npm install
```

### Frontend Setup
```bash
cd ../frontend
npm install
```

## 4. Run the Application
You will need two terminal windows/tabs open (one for each service).

### Start the Backend (Terminal 1)
```bash
cd project/backend
npm run dev
```

### Start the Frontend (Terminal 2)
```bash
cd project/frontend
npm run dev
```

## 5. Staying Synced
Before you start working each session, always pull the latest changes:
```bash
git pull origin main
```

When you finish working on your laptop and want to sync back:
```bash
git add .
git commit -m "Brief description of changes"
git push origin main
```
