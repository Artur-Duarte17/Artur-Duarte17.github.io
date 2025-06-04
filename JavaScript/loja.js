 // Intersection Observer for Sections
 const sections = document.querySelectorAll('section');
 const options = {
     threshold: 0.1
 };

 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.style.opacity = 1;
             entry.target.style.transform = 'translateY(0)';
         }
     });
 }, options);

 sections.forEach(section => {
     observer.observe(section);
 });

 // Mobile Menu Toggle
 const menuToggle = document.querySelector('.menu-toggle');
 const nav = document.querySelector('nav');
 const header = document.querySelector('header');

 menuToggle.addEventListener('click', () => {
     nav.classList.toggle('active');

     // Toggle menu icon animation
     menuToggle.classList.toggle('active');

     if (menuToggle.classList.contains('active')) {
         menuToggle.innerHTML = `
             <span style="transform: rotate(45deg) translate(5px, 5px);"></span>
             <span style="opacity: 0;"></span>
             <span style="transform: rotate(-45deg) translate(5px, -5px);"></span>
         `;
     } else {
         menuToggle.innerHTML = `
             <span></span>
             <span></span>
             <span></span>
         `;
     }
 });

 // Close mobile menu when a nav link is clicked
 const navLinks = document.querySelectorAll('nav a');
 navLinks.forEach(link => {
     link.addEventListener('click', () => {
         nav.classList.remove('active');
         menuToggle.classList.remove('active');
         menuToggle.innerHTML = `
             <span></span>
             <span></span>
             <span></span>
         `;
     });
 });

 // Scroll Header Effect
 window.addEventListener('scroll', () => {
     const header = document.querySelector('header');
     if (window.scrollY > 50) {
         header.style.backgroundColor = 'rgba(0,0,0,0.9)';
     } else {
         header.style.backgroundColor = '#000';
     }
 });



 /*________________________________________________*/

 let cart = [];

 function addToCart(product, price) {
     cart.push({ product, price });
     updateCart();
     alert(`${product} adicionado ao carrinho por R$ ${price.toFixed(2)}!`);
 }

 function updateCart() {
     const cartItems = document.getElementById('cart-items');
     cartItems.innerHTML = '';
     cart.forEach((item, index) => {
         cartItems.innerHTML += `<li>${item.product} - R$ ${item.price.toFixed(2)}</li>`;
     });
 }

 function toggleCart() {
     const cartSection = document.getElementById('cart');
     cartSection.style.display = cartSection.style.display === 'block' ? 'none' : 'block';
 }

 function clearCart() {
     cart = [];
     updateCart();
 }