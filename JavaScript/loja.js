class LojaApp {
    constructor() {
        this.cart = [];
        this.init();
    }

    init() {
        try {
            this.setupSectionAnimations();
            this.setupMobileMenu();
            this.setupScrollEffects();
            this.setupCart();
        } catch (error) {
            console.error('Erro ao inicializar loja:', error);
        }
    }

    setupSectionAnimations() {
        const sections = document.querySelectorAll('section');
        if (!sections.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => observer.observe(section));
    }

    setupMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav');
        
        if (!menuToggle || !nav) return;

        const menuHTML = {
            active: '<span class="line active-1"></span><span class="line active-2"></span><span class="line active-3"></span>',
            inactive: '<span class="line"></span><span class="line"></span><span class="line"></span>'
        };

        menuToggle.addEventListener('click', () => {
            try {
                const isActive = nav.classList.toggle('active');
                menuToggle.classList.toggle('active', isActive);
                menuToggle.innerHTML = isActive ? menuHTML.active : menuHTML.inactive;
            } catch (error) {
                console.error('Erro no menu mobile:', error);
            }
        });

        // Fechar menu ao clicar em links
        nav.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.innerHTML = menuHTML.inactive;
            }
        });
    }

    setupScrollEffects() {
        const header = document.querySelector('header');
        if (!header) return;

        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    header.style.backgroundColor = window.scrollY > 50 ? 'rgba(0,0,0,0.9)' : '#000';
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    setupCart() {
        window.addToCart = (product, price) => this.addToCart(product, price);
        window.toggleCart = () => this.toggleCart();
        window.clearCart = () => this.clearCart();
    }

    addToCart(product, price) {
        try {
            if (!product || typeof price !== 'number') {
                throw new Error('Produto ou preço inválido');
            }
            
            this.cart.push({ product, price });
            this.updateCart();
            this.showNotification(`${product} adicionado ao carrinho por R$ ${price.toFixed(2)}!`);
        } catch (error) {
            console.error('Erro ao adicionar ao carrinho:', error);
            this.showNotification('Erro ao adicionar produto ao carrinho', 'error');
        }
    }

    updateCart() {
        try {
            const cartItems = document.getElementById('cart-items');
            if (!cartItems) return;

            const fragment = document.createDocumentFragment();
            this.cart.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.product} - R$ ${item.price.toFixed(2)}`;
                fragment.appendChild(li);
            });
            
            cartItems.innerHTML = '';
            cartItems.appendChild(fragment);
        } catch (error) {
            console.error('Erro ao atualizar carrinho:', error);
        }
    }

    toggleCart() {
        try {
            const cartSection = document.getElementById('cart');
            if (!cartSection) return;
            
            cartSection.classList.toggle('visible');
        } catch (error) {
            console.error('Erro ao alternar carrinho:', error);
        }
    }

    clearCart() {
        try {
            this.cart = [];
            this.updateCart();
            this.showNotification('Carrinho limpo!');
        } catch (error) {
            console.error('Erro ao limpar carrinho:', error);
        }
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LojaApp();
});
