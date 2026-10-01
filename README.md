# Kalaipriya S — Machine Learning & AI Engineer Portfolio

A modern, high-performance personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## 🌟 Features
- **Multi-Page Architecture**: Client-side routing with React Router v6 (`/`, `/about`, `/projects`, `/skills`, `/contact`).
- **AI / Modern Cyber Aesthetic**: Dark modern palette, subtle glassmorphism cards, ambient radial glows, and responsive typography.
- **Real & Authentic Data**: Centered on B.E. Computer Science & Engineering (AIML) at KIT – Kalaignar Karunanidhi Institute of Technology (3rd year). No fake companies or inflated statistics.
- **Interactive Project Showcase**: Filter by domain (Machine Learning, Deep Learning, Generative AI, Full Stack), instant search, and architecture modal view.
- **Skills Matrix & Academic Timeline**: Categorized technical competencies and verified coursework.
- **Interactive Contact Page**: Direct one-click copy email button, social profile links, and client-side validated contact form.
- **Fully Responsive**: Optimized for Mobile, Tablet, Laptop, and Ultra-wide desktop screens.

---

## 🚀 Quick Start (Running in VS Code)

1. Open this folder in VS Code:
   ```bash
   code .
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port displayed in terminal) in your browser.

3. Build for production:
   ```bash
   npm run build
   ```

---

## 🛠️ How to Customize Your Content

All data is separated into clean, easy-to-edit JavaScript files in `src/data/`:

| File | What to Edit |
| --- | --- |
| `src/data/personalInfo.js` | Your name, bio, email, location, GitHub/LinkedIn links, tagline |
| `src/data/projects.js` | Add your real ML models, repository links, metrics, and architecture summaries |
| `src/data/skills.js` | Add new frameworks, libraries, or programming languages as you learn |
| `src/data/education.js` | Update your coursework, CGPA/marks, and college achievements |
| `src/data/certifications.js` | Add certificates from Coursera, NPTEL, DeepLearning.AI, etc. |

---

## 🌐 1-Click Deployment (Vercel or Netlify)

### Option 1: Vercel (Recommended)
1. Push this folder to your GitHub account (`github.com/kalaipriya031/portfolio`).
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Click **Deploy**. Vercel will automatically detect Vite and publish it live with free SSL!

### Option 2: Netlify
1. Run `npm run build`.
2. Drag and drop the generated `dist` folder into [app.netlify.com/drop](https://app.netlify.com/drop).