const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item h3');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');
    });
});

// Contagem regressiva
const timer = () => {
    const eventDate = new Date('2024-12-31T23:59:59').getTime();
    const now = new Date().getTime();
    const gap = eventDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    document.getElementById('days').innerText = Math.floor(gap / day);
    document.getElementById('hours').innerText = Math.floor((gap % day) / hour);
    document.getElementById('minutes').innerText = Math.floor((gap % hour) / minute);
    document.getElementById('seconds').innerText = Math.floor((gap % minute) / second);
};

setInterval(timer, 1000);
