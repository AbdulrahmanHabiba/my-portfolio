# 🌐 My Portfolio Website  

## ✨ Overview  
A **modern and responsive portfolio website** built with **React, TypeScript, and Vite**.  
This portfolio not only showcases my **skills, projects, and services** as a Frontend Developer specializing in **React & Next.js**, but also includes a powerful **Admin Dashboard** for managing projects with **Firebase Authentication** and **role-based access**.  

## 🚀 Features  
- 📱 **Responsive Design**: Works perfectly across all devices  
- 🌙 **Dark/Light Mode**: Theme toggle functionality  
- 🎭 **Interactive Sections**:  
  - 👋 Hero section with typewriter effect  
  - 🙋 About Me  
  - 🛠 Services Offered  
  - ⚡ Skills Showcase  
  - 💼 Portfolio/Projects Gallery  
  - 📩 Contact form with **EmailJS integration**  
- 🔑 **Admin Dashboard**:  
  - 🔐 Firebase Authentication with role-based access  
  - 📝 **CRUD for Projects** (Add, Update, Delete)  
  - 📂 **Drag & Drop** project reordering using **DnD Kit**  
  - 📊 Project management with **React Query** for data fetching  

## 🛠 Technologies Used  
- **Frontend:** ⚛️ React 19, TypeScript  
- **Build Tool:** ⚡ Vite  
- **Styling:** 🎨 TailwindCSS 4  
- **UI Components:** 🧩 ShadCN UI + Radix  
- **State/Data:** TanStack Query  
- **Auth & DB:** 🔥 Firebase (Auth + Firestore)  
- **Animations:** 🎬 Framer Motion  
- **Routing:** 🧭 React Router v7  
- **Drag & Drop:** 🎯 DnD Kit  

## 📂 Project Structure  
/public → Static assets
/src
├── assets → Images and other assets
├── components → Reusable UI components
├── dashboard → Admin dashboard (Firebase + CRUD + DnD)
├── lib → Utilities, hooks, configs
├── pages → Page components
├── sections → Portfolio sections
└── types → TypeScript definitions

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/AbdulrahmanHabiba/my-portfolio

# Navigate to the folder
cd portfolio-website

# Install dependencies
npm install

# Start the dev server
npm run dev
