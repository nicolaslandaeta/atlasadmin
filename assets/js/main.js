// Initialize mobile menu functionality
function initMobileMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.links');
    const body = document.body;

    if (!burgerMenu || !navLinks) return;

    function toggleMenu() {
        burgerMenu.classList.toggle('active');
        navLinks.classList.toggle('show');
        body.classList.toggle('menu-open');
    }

    function closeMenu() {
        burgerMenu.classList.remove('active');
        navLinks.classList.remove('show');
        body.classList.remove('menu-open');
    }

    burgerMenu.addEventListener('click', toggleMenu);

    document.addEventListener('click', (e) => {
        if (!burgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
            closeMenu();
        }
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    return { closeMenu };
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = initMobileMenu();
});
