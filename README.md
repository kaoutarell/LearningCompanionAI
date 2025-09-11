# 📚 Converso LMS

![Next.js](https://img.shields.io/badge/Next.js-13.4-blue?logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6?logo=typescript)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red)

**Converso LMS** is a modern Learning Management SaaS application that enables real-time interactive teaching sessions. It features user authentication, subscriptions, and payments with seamless integrations of Supabase, Stripe, and AI-powered agents.

> Build, teach, and collaborate in a real-time learning environment enhanced with an AI vocal assistant.

---

## 🛠️ Tech Stack

- ![Next.js](https://img.shields.io/badge/Next.js-13.4-blue?logo=next.js) **Next.js**
- ![React](https://img.shields.io/badge/React-18-61DAFB?logo=react) **React**
- ![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6?logo=typescript) **TypeScript**
- Supabase – Authentication & database
- Stripe – Subscriptions & payments
- 🎤 Vapi – Real-time AI vocal agent integration
- 🎨 TailwindCSS – Responsive, modern UI
- 🛡️ Clerk – Authentication & user management
- 🧭 Junie AI – AI-powered navigation & assistance
- 📊 Sentry – Error tracking & monitoring

---

## 🚀 LMS Overview

### 🔑 Authentication & User Management

- Secure signup/login with Supabase & Clerk
- Role-based access (Admin, Instructor, Student)
- Profile management

### 💳 Subscriptions & Payments

- Stripe integration for subscriptions
- Tiered pricing models (Free, Pro, Enterprise)
- Automatic billing & invoice handling

### 🖥️ Real-Time Teaching

- Live interactive classrooms
- Audio-enabled sessions with Vapi AI vocal agent
- Chat & collaboration features

### 🤖 AI Enhancements

- Voice-based AI tutoring & assistance
- Contextual help via Junie AI
- Smart session summaries

### 🧠 How It Works

1. Sign Up → Create an account using email or social login.
2. Choose a Plan → Subscribe via Stripe to unlock premium features.
3. Join a Session → Enter live teaching rooms in real-time.
4. Engage → Use voice-enabled AI to interact, ask questions, and get feedback.
5. Track Progress → Monitor learning outcomes and subscription details.

---

## 🧪 Development Notes

- Fully serverless architecture with Supabase.
- Webhooks used for Stripe subscription lifecycle.
- Real-time updates powered by Supabase channels.
- AI vocal agent powered by Vapi SDK.

## How to Run Locally ?

### Clone & Run :
```
git clone https://github.com/your-username/converso-lms.git
cd converso-lms
npm install
npm run dev
```
### Setup the env variables
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
STRIPE_SECRET_KEY=...
VAPI_API_KEY=...
CLERK_SECRET_KEY=...

```

<hr/>
<div align="center"> Made with 💜 by the butterfly dev for learning purposes </div>
