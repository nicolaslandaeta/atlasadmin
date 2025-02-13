const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia('(width < 768px)')

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e) {
    const isMobile = e.matches;
    if(isMobile) {
        navbar.setAttribute('inert', '');
    } else {
        navbar.removeAttribute('inert');
    }
}

function openSidebar() {
    navbar.classList.add('show')
    openButton.setAttribute('aria-expanded', 'true')
    navbar.removeAttribute('inert')
}

function closeSidebar() {
    navbar.classList.remove('show')
    openButton.setAttribute('aria-expanded', 'false')
    if(media.matches) {
        navbar.setAttribute('inert')
    }
}

const navLinks = document.querySelectorAll('nav a')

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar()
    })
})

updateNavbar(media)

// Feature Cards Flip
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            // Solo activar en móvil
            if (window.innerWidth <= 768) {
                this.classList.toggle('flipped');
            }
        });
    });

    // Opcional: Resetear cards al cambiar tamaño de ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            featureCards.forEach(card => {
                card.classList.remove('flipped');
            });
        }
    });
});