// script.js
// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLightTheme = body.classList.contains('light-theme');
    themeToggle.innerHTML = isLightTheme ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});