🧠 Therapist AI

Therapist AI is a full-stack mental wellness web application that lets users engage in secure, AI-driven conversations to support mental health. Built with a React frontend and Node.js backend, it integrates Firebase for authentication and Firestore for message history storage, while leveraging OpenAI for intelligent, empathetic dialogue.

FEATURES

AI-powered real-time chat (OpenAI GPT)

User authentication via Firebase

Firestore integration for storing conversations

Sentiment analysis (optional)

Fully responsive frontend

RESTful backend API using Node.js + Express

TECH STACK

Frontend:

React + Vite

Firebase Auth + Firestore

OpenAI API (via backend)

Backend:

Node.js + Express

OpenAI API

CORS, body-parser

PROJECT STRUCTURE

therapist-ai/
client/
public/
src/
components/
pages/
App.tsx
index.html
vite.config.ts
.env
server/
routes/
chat.js
controllers/
chatController.js
server.js
.env
README.md

ENVIRONMENT VARIABLES

In frontend/.env:
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

In backend/.env
OPENAI_API_KEY=your_openai_api_key
PORT=5000

SETUP INSTRUCTIONS

Clone the Repository

git clone https://github.com/yourusername/therapist-ai.git
cd therapist-ai

Install Dependencies

cd backend
npm install

cd ../frontend
npm install

Add Environment Variables

Create .env files in both backend and frontend

Run the App Locally

cd backend
npm start

cd ../frontend
npm run dev

App should be live at http://localhost:5173

Backend live at http://localhost:3001