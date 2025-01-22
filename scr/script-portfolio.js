const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");
const navLinkItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
});

navLinkItems.forEach(link => {
    link.addEventListener("click", function(event) {
        navLinks.classList.remove("active");
        overlay.classList.remove("active");

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

overlay.addEventListener("click", function() {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onscroll = function() {
    changeNavbarBackground();
};

function changeNavbarBackground() {
    const navbar = document.querySelector('.navbar');
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}