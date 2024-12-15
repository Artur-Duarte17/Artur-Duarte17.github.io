// script.js

// Alternar visibilidade do menu no botão hambúrguer
const buttonToggle = document.getElementById('button-toggle');
const navLinks = document.querySelector('.nav-links');

buttonToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show-nav');
});

// Animação de rolagem suave para links internos
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const destino = document.querySelector(link.getAttribute('href'));
        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Controle de progresso dinâmico para habilidades
const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
    const progressBar = skill.querySelector('.progress-bar');
    const largura = progressBar.style.width;

    // Animação simulada ao carregar a página
    progressBar.style.width = '0';

    setTimeout(() => {
        progressBar.style.transition = 'width 1.5s';
        progressBar.style.width = largura;
    }, 500);
});
