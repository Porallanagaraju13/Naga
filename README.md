# 🌐 Poralla Nagaraju — Personal Portfolio

> A modern, responsive developer portfolio showcasing my projects, skills, experience, and certifications — built with React, TypeScript, Vite, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat&logo=tailwind-css)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-black?style=flat)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

---

## 🔗 Live Demo

🚀 [View Portfolio Live](https://porallanagaraju13.github.io/Naga) *(update with your deployed URL)*

---

## 🧠 Overview

This is my **personal developer portfolio** — a single-page application that presents who I am, what I've built, and how to reach me. It features smooth UI interactions, dark mode support, a built-in chatbot widget, and a fully responsive layout across all screen sizes.

---

## ✨ Features

- 🌙 Dark / Light mode toggle
- 🤖 Built-in Chatbot widget (app-wide)
- 📊 Stats section with animated charts (Recharts)
- 🧭 Smooth client-side routing (React Router)
- 📱 Fully responsive — mobile, tablet, desktop
- 🎨 Clean UI with shadcn/ui + Radix UI primitives
- 🔔 Toast notifications (Sonner)
- ⚡ Lightning-fast dev experience with Vite + SWC
- 🌟 Particle background animation

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Frontend Framework | React 18 + TypeScript |
| Build Tool | Vite 5 (SWC plugin) |
| Styling | Tailwind CSS, tailwind-merge, tailwindcss-animate |
| UI Components | shadcn/ui (Radix UI primitives) |
| Routing | React Router DOM |
| Data Fetching | TanStack Query (React Query) |
| Charts | Recharts |
| Icons | Lucide React |
| Theming | next-themes |
| Notifications | Sonner, shadcn Toaster |

---

## 📂 Project Structure

```
Naga/
│
├── public/                        # Static assets (resume, certificates, images)
├── src/
│   ├── assets/                    # Images and static files
│   ├── components/
│   │   ├── ui/                    # shadcn/ui primitives
│   │   ├── About.tsx              # About Me section
│   │   ├── Certifications.tsx     # Certifications section
│   │   ├── Chatbot.tsx            # Global chatbot widget
│   │   ├── Contact.tsx            # Contact section
│   │   ├── Experience.tsx         # Work/internship experience
│   │   ├── Footer.tsx             # Footer
│   │   ├── Hero.tsx               # Hero/landing section
│   │   ├── Navigation.tsx         # Navbar
│   │   ├── ParticleBackground.tsx # Animated background
│   │   ├── Projects.tsx           # Projects showcase
│   │   └── Stats.tsx              # Skills & stats
│   ├── contexts/
│   │   └── ThemeContext.tsx        # Dark/light theme context
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx              # Homepage (all sections)
│   │   └── NotFound.tsx           # 404 page
│   ├── App.tsx                    # Providers, router, chatbot
│   └── main.tsx                   # React root entry
│
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- npm or bun

### 1. Clone the Repository
```bash
git clone https://github.com/Porallanagaraju13/Naga.git
cd Naga
```

### 2. Install Dependencies
```bash
npm install
# or
bun install
```

### 3. Start the Dev Server
```bash
npm run dev
```

The app runs at **http://localhost:8080** by default.

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Production build → `dist/` |
| `npm run build:dev` | Development-mode build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## 🚢 Deployment

This is a static Vite app — deploy it anywhere:

| Platform | Steps |
|----------|-------|
| **GitHub Pages** | Use the included `.github/workflows` CI/CD |
| **Vercel** | Connect repo → auto-deploy on push |
| **Netlify** | Drag & drop `dist/` or connect repo |
| **Cloudflare Pages** | Connect repo → set build command `npm run build` |

```bash
# Build for production
npm run build

# Preview before deploying
npm run preview
```

---

## 📄 Portfolio Sections

| Section | Description |
|---------|-------------|
| 🦸 Hero | Name, title, tagline, and CTA buttons |
| 👤 About | Background, education, and interests |
| 📊 Stats | Skills, tools, and proficiency metrics |
| 💼 Experience | Internships and work experience |
| 🚀 Projects | Featured projects with links |
| 🏅 Certifications | Courses and certification badges |
| 📬 Contact | Contact form and social links |

---

## 👤 Author

**Poralla Nagaraju**
- 🎓 B.Tech CSE (AI & ML), JNTUH — 2025
- 📍 Hyderabad, India
- 🔗 [GitHub Profile](https://github.com/Porallanagaraju13)

---

## 📝 License

This project is licensed under the MIT License.
