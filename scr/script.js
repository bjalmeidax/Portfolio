// Transição da navbar ao rolar a página
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');
    const languageToggleButton = document.getElementById('language-toggle');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

});
