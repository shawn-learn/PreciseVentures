// Simple mobile navigation toggle
// Toggle 'active' class for nav menu when nav toggle button is clicked
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.site-nav ul');

if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}
