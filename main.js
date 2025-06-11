// Basic JavaScript for mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', function () {
            menu.classList.toggle('hidden');
        });
    }

    // Add any other JavaScript interactions here
});