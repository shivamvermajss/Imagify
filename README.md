# 🎨 Imagify – AI Image Generation SaaS

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)
![Stripe](https://img.shields.io/badge/Payments-Stripe-purple?logo=stripe)
![Razorpay](https://img.shields.io/badge/Payments-Razorpay-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

> 🚀 Imagify is a full-stack AI-powered SaaS platform that generates high-quality images from text prompts, featuring secure authentication, credit-based usage, and integrated payment systems.

---

## 🌟 Highlights

* ✨ AI-powered text-to-image generation using external APIs
* 🔐 Secure authentication & authorization using JWT
* 🪙 Credit-based usage system (pay-per-generation model)
* 💳 Integrated payment gateways (Razorpay & Stripe)
* ⚡ Fast and responsive frontend built with React + Vite
* 📦 Scalable backend using MVC architecture
* 🔄 Real-time credit tracking and deduction
* ☁️ Production-ready deployment (Vercel, MongoDB Atlas)

---

## 🧠 How It Works

User enters prompt → Frontend sends request → Backend processes request →
AI API generates image → Credits deducted → Image returned to user

---

## 🏗️ System Architecture

Frontend (React + Vite)
↓
Backend (Node.js + Express API)
↓
AI Image Generation Service
↓
MongoDB Database
↓
Payment Gateway (Stripe / Razorpay)

---

## 🏗️ Tech Stack

### Frontend

* React.js (Vite)
* Context API (State Management)
* CSS

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* RESTful API Architecture

### Payments & Services

* Razorpay (India payments)
* Stripe (Global payments)
* External AI API (Image generation)

---

## 📂 Folder Structure

imagify/
├── client/        # React frontend
│   ├── components/
│   ├── pages/
│   ├── context/
│
├── server/        # Backend (Node + Express)
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   └── config/

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

git clone https://github.com/shivamvermajss/Imagify.git
cd imagify

### 2️⃣ Backend Setup

cd server
npm install
npm run dev

### 3️⃣ Frontend Setup

cd client
npm install
npm run dev

---

## 🔑 Environment Variables

Create a `.env` file inside `/server`:

MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret

STRIPE_SECRET_KEY=your_stripe_key

AI_API_KEY=your_ai_api_key

---

## 📊 Core Features

* 🔐 User authentication (JWT + bcrypt hashing)
* 🧠 AI-based image generation from text prompts
* 🪙 Credit system with usage tracking
* 💳 Secure payment integration (Razorpay & Stripe)
* 📦 Modular backend with MVC architecture
* 🔒 Protected routes using middleware
* ⚡ Optimized frontend performance with Vite

---

## 🚀 Deployment

Frontend → Vercel
Backend → Render / Railway
Database → MongoDB Atlas

---

## 🔒 Security Features

* Password hashing using bcrypt
* Token-based authentication (JWT)
* Route protection via middleware
* Secure payment verification & webhook handling

---

## 📈 Future Enhancements

* 🖼️ Image history & download dashboard
* 🎨 Support for multiple AI models (DALL·E, Stable Diffusion)
* 📱 Fully responsive mobile UI
* 💼 Subscription-based pricing model
* 📊 Admin dashboard & analytics
* 🌍 Multi-language support

---

## 👨‍💻 Author

**Shivam Verma**
💼 Full Stack Developer
🔗 GitHub: https://github.com/shivamvermajss

---

## ⭐ Support

If you found this project useful:

* ⭐ Star the repository
* 🍴 Fork it
* 🤝 Contribute

---

## 📜 License

This project is licensed under the MIT License.
