// === Theme toggle only ===

// elements we touch
const btn= document.getElementById("themeToggle"); // the toggle button
const icon   = document.querySelector(".toggle-icon"); // the emoji inside the button

// pick a starting theme: saved choice wins, else follow OS preference
const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches; // OS setting
const startDark = saved ? saved === "dark" : prefersDark; // decide initial mode

// apply initial theme + icon
document.body.classList.toggle("dark", startDark); // add/remove .dark on <body>
if (icon) icon.textContent = startDark ? '☀️' : '🌑';    // sun for dark mode, moon for light

// click to toggle theme and remember it
btn?.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark'); // flip state
    document.body.classList.toggle('dark', isDark);             // apply class
    localStorage.setItem('theme', isDark ? 'dark' : 'light');         // save choice
    if (icon) icon.textContent = isDark ? '☀️' : '🌑';                // update icon
});
