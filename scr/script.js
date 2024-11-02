
//Transição da navbar

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');

    function handleScroll() {
        if (window.scrollY > 50) { 
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
});


//Mudar o idioma da pagina

const languageToggleButton = document.getElementById('language-toggle');

const content = {
    en: {
        welcome: "Welcome,",
        title: "I'm a Software Developer!",
        level: "Intern Level",
        about: "About Me",
        aboutText: [
            "<I discovered myself as passionate about programming!>",
            "\u2022 Studying Systems Analysis and Development at PUC Minas.",
            "\u2022 I haven't had any professional experience as a programmer yet.",
            "\u2022 I'm specializing in JS and Python.",
            "\u2022 I have a basic level of English, where I can have conversations that are not very elaborate."
        ],
        codetext: "<Hello, my name is Gabriel!>"
    },
    pt: {
        welcome: "Bem-vindo,",
        title: "Sou um Desenvolvedor de Software!",
        level: "Nível de Estágio",
        about: "Sobre Mim",
        aboutText: [
            "<Descobri que sou apaixonado por programação!>",
            "\u2022 Estudando Análise e Desenvolvimento de Sistemas na PUC Minas.",
            "\u2022 Ainda não tive experiência profissional como programador.",
            "\u2022 Estou me especializando em JS e Python.",
            "\u2022 Tenho um nível básico de inglês, onde consigo ter conversas que não são muito elaboradas."
        ],
        codetext: "<Olá, meu nome é Gabriel!>"
    }
};

let currentLanguage = 'en';

function updateContent() {
    document.querySelector('.home h1').innerText = content[currentLanguage].welcome;
    document.querySelector('.home h3').innerText = content[currentLanguage].title;
    document.querySelector('.home p').innerText = content[currentLanguage].level;

    document.querySelector('.about-text h2').innerText = content[currentLanguage].about;
    document.querySelector('.about-text h4').innerText = content[currentLanguage].aboutText[0];
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    aboutParagraphs.forEach((p, index) => {
        p.innerText = content[currentLanguage].aboutText[index + 1];
    });
}

languageToggleButton.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    updateContent();
});


updateContent();
