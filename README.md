# Premium Salary Calculator

> A performant, offline-capable salary calculator built as a Progressive Web App (PWA). Calculates U.S. net income with support for federal, state, FICA, and 401(k) deductions.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Demo-premium--salary-blue?logo=render&logoColor=white)](https://premium-salary.onrender.com)

---

## 📦 Project Overview

- **Type**: Single-page web application (PWA)
- **Stack**: HTML5, CSS3, JavaScript (Vanilla)
- **Host**: [Render.com](https://render.com)
- **Features**:
  - U.S. Federal + FICA + State tax calculations
  - Custom 401(k) contribution support
  - Weekly, bi-weekly, monthly, and annual pay options
  - Filing statuses: Single, Married (joint/separate), Head of Household
  - Offline PWA functionality with install prompt
  - Responsive, mobile-friendly interface
  - Secure local data storage (no cloud sync)

---

## 📁 Project Structure

premium-salary/

├── index.html # Main interface

├── style.css # App styles

├── script.js # Core logic

├── manifest.json # PWA metadata

├── service-worker.js # Offline support

└── /icons # App icons


---

## 🧪 Local Setup

```bash
git clone https://github.com/jb24000/premium-salary.git
cd premium-salary
npx live-server
This launches at http://127.0.0.1:8080 (or similar)

🚀 Deployment
The app is 100% static and deployable via:

GitHub Pages

Render Static Site

Netlify / Vercel

Make sure:

manifest.json and service-worker.js are correctly linked

Hosted over HTTPS for full PWA support

🧰 Feature Breakdown
Feature	Description
🧮 Net Pay Breakdown	Federal, FICA, and State taxes accurately computed
💼 401(k) Support	Deferral percentage reduces taxable income
📆 Pay Frequencies	Annual, Monthly, Bi-weekly, Weekly
👪 Filing Statuses	Single, Married, Head of Household
🕵️ Offline Access	Works fully without internet via Service Worker
📱 Mobile Ready	Fast, responsive, and installable on any device

🛡️ Privacy & Security
✅ No signup or personal data collection

✅ All calculations run client-side

✅ No ads, trackers, or third-party scripts

✅ LocalStorage used for calculation history

📲 Progressive Web App
Fully installable on iOS and Android

Add to Home Screen support

Service Worker handles caching & offline access

🧾 License
MIT © 2025 Melvin Bonner

🔗 Links
🔹 Live App

🧑‍💼 Portfolio

🐙 GitHub Repo

