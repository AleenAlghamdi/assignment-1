# AI Usage Report

This document explains **how AI was used** while building and refining this portfolio, what decisions it influenced, and how the final output was verified

---

## 1) Summary
I used AI to adjust the layout and improve the documentation. Specifically:
- **Layout refinements (CSS/HTML):** improve responsive wrapping for the Projects grid and Skills chips, ensure proper centering/alignment, and fix dark‑mode surface colors
- **Frontend behavior (JS):** validate a minimal theme‑toggle pattern that adds/removes a `.dark` class on `<body>` and persists preference in `localStorage`
- **Documentation:** draft and refine the `README.md`, and this `ai-usage-report.md` (organization)

AI served as a pair‑design assistant; all code and text were reviewed and edited by me before inclusion

---

## 2) AI Assistance VS My Work
### AI-assisted
- Proposed CSS tweaks for responsive wrapping (Projects grid, Skills list) 
- Suggested a contrast theme by clarifying the usage of CSS variables for backgrounds and surfaces
- Helped outline the documentation structure and phrasing

### My Work
- I typed the HTML, CSS, and JS files, then made some adjustments and looked up explanations for a few concepts by browsing other people’s portfolios
- I used a class-based approach for each element to allow more variety in design and make the UI more visually appealing
- I tested visual changes across viewport sizes and kept only changes that improved readability and layout stability
- I verified the theme toggle works (toggle button → updates class on `<body>` → preference saved to `localStorage`)

---

## 3) Prompts 
> Exact prompts varied - here are examples of what I asked the AI

1. The website should wrap and take space below on small screens. skills chips should center and wrap. Suggest minimal CSS changes and keep class names
2. Skills chips should be centered and wrap nicely. What Flex or Grid settings and gap values should I use?
3. Move the "See projects" and "Contact me" buttons to the left while keeping spacing consistent on mobile and desktop
4. Rewrite this paragraph to be clear and consistent in tone. Fix grammar and preserve meaning

---

## 4) Evaluation & Testing
- **Manual visual testing** on desktop and small viewport (Chrome)
- **Functional check** for theme toggle persistence (refresh and revisit behavior)
- **Content review** for README and this report to ensure clarity and accuracy