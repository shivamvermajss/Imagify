# 🚀 Imagify AI – Full Stack AI SaaS Platform

Imagify AI is a production-ready full-stack SaaS platform that allows users to generate AI images using a credit-based system with secure Stripe payment integration.

🔗 **Live Demo:** https://imagify-coral.vercel.app  
🔗 **Backend API:** https://imagify-vf94.onrender.com  

---

## 📌 Features

- 🔐 JWT Authentication (Register / Login)
- 🎨 AI Image Generation (Clipdrop API)
- 💳 Stripe Checkout Integration
- 🔄 Secure Webhook Credit System
- 💾 MongoDB Atlas Database
- 🚀 Deployed Backend (Render)
- ⚡ Deployed Frontend (Vercel)
- 🛡 Production CORS Configuration
- 🌐 SPA Routing Fix (Vercel Rewrite Rules)

---

## 🏗 Architecture

Frontend (React + Vite)  
⬇  
Backend (Node.js + Express)  
⬇  
MongoDB Atlas  
⬇  
Stripe Webhooks (Secure Credit Update)

---

## 🧠 How It Works

1. User registers and receives default credits.
2. User generates images (credits decrease).
3. User purchases credits via Stripe Checkout.
4. Stripe sends a webhook event to backend.
5. Backend verifies Stripe signature.
6. Credits are securely updated in MongoDB.
7. User sees updated balance instantly.

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- Tailwind CSS
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Stripe API
- Webhook Signature Verification

### Deployment
- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

## 🔐 Security Features

- JWT-based authentication
- Hashed passwords (bcrypt)
- Stripe webhook signature verification
- Environment variable protection
- Production CORS restriction
- Raw body parsing for webhook security

---

## ⚙️ Local Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/shivamvermajss/Imagify.git
cd Imagify
