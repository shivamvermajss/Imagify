🚀 Imagify – AI Image Generation SaaS

A full-stack AI-powered image generation platform with authentication, credit-based usage system, and secure payment integration.

🌐 Live Demo

🔗 Frontend: https://your-vercel-url.vercel.app

🔗 Backend API: https://your-render-url.onrender.com

🧠 Overview

Imagify is a modern AI SaaS platform where users can:

🎨 Generate AI images from text prompts

🔐 Authenticate securely

💳 Purchase credits

⭐ Track remaining credits in real-time

📊 View generated results

The application uses a credit-based system, ensuring scalable and controlled AI usage.

✨ Features

🔑 User Authentication (Login / Logout)

💰 Credit-Based Usage System

💳 Payment Integration

⚡ Real-Time Credit Updates

📦 RESTful API Architecture

🌍 Production Deployment (Vercel + Render)

🔔 Toast Notifications

📱 Fully Responsive UI

🏗️ Tech Stack
Frontend

React (Vite)

Tailwind CSS

React Router

React Toastify

Backend

Node.js

Express.js

MongoDB

JWT Authentication

Deployment

Vercel (Frontend)

Render (Backend)

MongoDB Atlas (Database)

📂 Project Structure
imagify/
│
├── client/               # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
│
├── server/               # Node Backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── server.js
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/shivamvermajss/imagify_1.git
cd imagify_1
2️⃣ Setup Frontend
cd client
npm install
npm run dev
3️⃣ Setup Backend
cd server
npm install
npm start
🔐 Environment Variables

Create a .env file in server:

MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
RAZORPAY_KEY=your_key
RAZORPAY_SECRET=your_secret


🚀 Deployment Guide
Frontend (Vercel)

Connect GitHub repo

Auto deploy on push

Backend (Render)

Create Web Service

Add environment variables

Deploy

📸 Screenshots
🏠 Home Page

<img width="1904" height="911" alt="image" src="https://github.com/user-attachments/assets/0145b297-d8cd-46f0-ab4a-305a2ef43faf" />

Result Page 
<img width="1896" height="903" alt="image" src="https://github.com/user-attachments/assets/6526610c-147b-4da3-ad27-c5526d6de380" />



⭐ Credit System

💳 Buy Credits Page
<img width="1897" height="904" alt="image" src="https://github.com/user-attachments/assets/22fb1186-f2af-4eca-8d88-1c7cf6013f82" />
<img width="1892" height="903" alt="image" src="https://github.com/user-attachments/assets/ea993f4f-4b42-4146-92b6-b9ec13501c92" />




🛡️ Future Improvements

Admin Dashboard

Image History Storage

Stripe Integration

Subscription Model

Usage Analytics

👨‍💻 Author

Shivam Verma
GitHub: https://github.com/shivamvermajss
LinkedIn: https://www.linkedin.com/in/shivam-verma-227b37384

⭐ Show Your Support

If you like this project:

⭐ Star the repository
🍴 Fork it
🚀 Deploy your own version
