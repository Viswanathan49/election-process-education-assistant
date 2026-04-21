# Election Process Education Assistant

A complete MVP web application designed to simplify the Indian voting process for first-time voters and citizens looking to update their details. Built rapidly for the PromptWars Hackathon.

## Features

- **Eligibility Checker**: An interactive yes/no wizard determining voter eligibility based on ECI guidelines.
- **Guided Workflows**: Step-by-step visual flows explaining registration timelines and polling day procedures.
- **Forms & Documents**: A clean, accessible breakdown of Forms 6, 7, and 8 along with acceptable proof of identity, age, and address.
- **Assistant**: A mock conversational interface delivering quick answers to frequently asked questions.
- **Responsive & Accessible**: Works flawlessly on mobile screens, utilizing a clean, civic-tech UI design.
- **Dark Mode**: Integrated seamless dark mode toggle.

## Architecture & Tech Stack

This project is a stateless frontend application to ensure maximum availability and simplicity.
- **Framework**: React / Vite
- **Routing**: `react-router-dom`
- **Styling**: Vanilla CSS with custom properties for theming (Look Ma, no Tailwind!)
- **Icons**: `lucide-react`
- **Data**: Centralized mock state located in `src/data/mockData.js`. No backend or database is necessary for this MVP.

## Project Structure

```
prompt-wars/
├── public/
├── src/
│   ├── components/      # Reusable UI (Button, Card, Layout)
│   ├── data/            # mockData.js (Central store for forms/workflows)
│   ├── pages/           # Assistant, Eligibility, Forms, Home, Resources, Workflow
│   ├── App.jsx          # React Router setup
│   ├── index.css        # Global styles & Dark Mode variables
│   └── main.jsx         # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## How to Run Locally

You'll need Node.js installed.

1. Clone or navigate to the repository directory (`prompt-wars`):
   ```bash
   cd prompt-wars
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open the displayed local URL (typically `http://localhost:5173`) in your browser.

## How to Deploy

Since this is a static Vite application without a backend, it can be deployed for free in minutes on Netlify, Vercel, or GitHub Pages.

### Vercel / Netlify Deployment
1. Push your code to a GitHub repository.
2. Log into Vercel/Netlify, choose "Add New Project", and link your GitHub repo.
3. The platform will auto-detect Vite. Ensure the build command is `npm run build` and the output directory is `dist`.
4. Deploy! Your app will be live globally.

### GitHub Pages Deployment
1. Install `gh-pages`: `npm install gh-pages --save-dev`
2. Update `package.json` with `"homepage": "https://<yourusername>.github.io/<repo-name>"`
3. Add a script in `package.json`: `"deploy": "gh-pages -d dist"`
4. Run `npm run build && npm run deploy`.

---
*Disclaimer: This is a hackathon project built for educational purposes. Always rely on official sources like `voters.eci.gov.in` for actual voter services.*
