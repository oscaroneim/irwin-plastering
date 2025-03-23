# 🏗️ Irwin Plastering Website

A sleek and responsive marketing website for [Irwin Plastering](https://irwinplastering.com), built with modern web technologies and optimized for SEO, performance, and accessibility.

---

## ⚙️ Tech Stack

| Tool                         | Purpose                                 |
| ---------------------------- | --------------------------------------- |
| **Next.js 15**               | React framework with SSR support        |
| **React 19**                 | UI library                              |
| **Tailwind CSS + ShadCN UI** | Styling & component primitives          |
| **Zod + React Hook Form**    | Form validation                         |
| **next-sitemap**             | Sitemap + robots.txt generation         |
| **EmailJS**                  | Client-side contact form email handling |
| **Vercel**                   | Hosting, CI/CD, analytics               |
| **Snyk**                     | Security scanning via CI                |
| **Prettier + ESLint**        | Code formatting and linting             |

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

## 📬 How EmailJS Works

Overview:
When a user submits the Contact form on the website, their message is sent to your email inbox directly via EmailJS. No backend server is needed.

### 🧑‍💻 For Admins: How You’ll Receive Contact Submissions

Set up an EmailJS account:

Go to emailjs.com and sign up

Connect your email provider (e.g. irwinplastering@gmail)

Create an email template and service

In your EmailJS dashboard:

Copy the following:

Service ID

Template ID

Public Key

Add these to the Vercel project:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Whenever a user submits the form:

EmailJS sends their message directly to your chosen email inbox using your configured template.

You’ll get an email with:

Their name

Their email

Their message

No extra action is required by you. Just check your inbox!

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
