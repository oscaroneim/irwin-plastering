# 🏗️ Irwin Plastering Website

A sleek and responsive marketing website for [Irwin Plastering](https://irwinplastering.com), built with modern web technologies and optimized for SEO, performance, and accessibility.

---

## ⚙️ Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 15** | React framework with SSR support |
| **React 19** | UI library |
| **Tailwind CSS + ShadCN UI** | Styling & component primitives |
| **Zod + React Hook Form** | Form validation |
| **next-sitemap** | Sitemap + robots.txt generation |
| **EmailJS** | Client-side contact form email handling |
| **Vercel** | Hosting, CI/CD, analytics |
| **Snyk** | Security scanning via CI |
| **Prettier + ESLint** | Code formatting and linting |

---

## 🚀 Getting Started

### Clone the repo down and run:

```bash
npm i
```

### Run the development server:

```bash
npm run dev
```

## ✉️ Contact Form Setup
The form on the Contact page uses EmailJS to send submissions without a backend.

### EmailJS Environment Variables
Set the following in your .env.local:

 ```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

You can generate these by signing up at emailjs.com.

## ☁️ Deployment (Vercel)
This project is deployed to Vercel.

### Steps
Push to GitHub

Connect repo to Vercel via dashboard

Add environment variables for:

NEXT_PUBLIC_EMAILJS_SERVICE_ID

NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

SNYK_TOKEN (optional for CI)

✅ Vercel automatically handles CI/CD, preview deployments, and analytics.

## 🔐 Snyk Integration (CI/CD)
This project integrates Snyk for security testing in GitHub Actions.

Make sure you set a SNYK_TOKEN in your GitHub repo Secrets.

## 📁 Project Structure

```bash
├── public/                     # Static assets
├── src/
│   ├── components/             # Reusable components
│   ├── pages/                  # App routes (Next.js)
│   ├── styles/                 # Tailwind base styles
├── next.config.js
├── next-sitemap.config.js
├── tailwind.config.js
├── tsconfig.json
└── eslint.config.js
```

## 👷‍♂️ Maintained by
Irwin Plastering
https://irwinplastering.com

Website by [your name/team] 🚀

