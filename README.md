# Assignment 1 - Personal Portfolio

A simple, responsive personal portfolio built with **HTML**, **CSS**, and **JavaScript**. The site highlights an intro, projects, skills, 
and a contact form, with a built‑in **light/dark theme toggle**

## Project Description
This portfolio showcases my work and background in a clean, minimal layout:
- **Intro** with a headline, short tagline, and action buttons
- **About** section with a brief bio and skills chips
- **Projects** grid with two example projects (visual identity design and a JavaFX app)
- **Skills** section listing key tools and strengths
- **Contact** section with a client‑side validated form (no backend)

**Tech stack:** HTML, CSS, and a tiny JS file for theme toggling

**Structure (key files):**
```
README.md
index.html
css/
  styles.css
js/
  script.js
assets/
  images and media
docs/
  ai-usage-report.md      
  technical-documentation.md 
```

## Setup — Run Locally

### Open the file directly
1. Download or clone the repository
2. Double‑click `index.html` to open it in your browser 
   *(Works because all assets are relative paths. No build step required)*

## How to Use / Modify
- Edit content and sections in `index.html`
- Adjust colors, spacing, and layout in `css/styles.css` (CSS variables are defined for both light and dark modes)
- The theme toggle logic lives in `js/script.js` (adds/removes `.dark` on `<body>` and persists to `localStorage`)

## Short Summary of AI Use
I used AI **to adjust layout and improve the documentation**:
- Helped refine **responsive grid behavior** (projects wrapping, skill chips centering) and **dark‑mode surface colors** for better contrast and consistency
- Assisted with **section organization** (this file), while I verified and edited the output to fit my style and the course rubric

> I iterated on AI suggestions, tested visually (desktop & mobile), and kept only changes that improved readability, accessibility, and maintainability


