document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.boxShadow = '0 5px 15px rgba(26, 188, 156, 0.5)';
        });
        project.addEventListener('mouseleave', () => {
            project.style.boxShadow = 'none';
        });
    });
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
