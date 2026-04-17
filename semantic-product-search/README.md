# Semantic Product Search

A production-ready full-stack semantic search application.

## Project Structure
- `/backend`: FastAPI server, Python vector services (FAISS/SentenceTransformers).
- `/frontend`: React + Vite client using exact CSS modules.

## 🚀 Setup Instructions

### 1. Backend (FastAPI + FAISS)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Or `venv\Scripts\activate` on Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```
API runs on: **http://localhost:8000**
Swagger Docs: **http://localhost:8000/docs**

### 2. Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
Client runs on: **http://localhost:5173**