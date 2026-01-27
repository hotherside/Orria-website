// ============================================
// CAROUSEL FUNCTIONALITY
// ============================================
class Carousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.carousel-slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000; // 5 seconds

        this.init();
    }

    init() {
        if (this.slides.length === 0) return;

        // Set up indicator clicks
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToSlide(index);
                this.resetAutoPlay();
            });
        });

        // Pause on hover
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', () => {
                this.pauseAutoPlay();
            });

            carouselContainer.addEventListener('mouseleave', () => {
                this.startAutoPlay();
            });
        }

        // Touch support for mobile
        this.setupTouchEvents();

        // Start autoplay
        this.startAutoPlay();
    }

    goToSlide(index) {
        // Remove active class from current slide and indicator
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');

        // Update current slide
        this.currentSlide = index;

        // Add active class to new slide and indicator
        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');
    }

    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(next);
    }

    prevSlide() {
        const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prev);
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }

    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    resetAutoPlay() {
        this.pauseAutoPlay();
        this.startAutoPlay();
    }

    setupTouchEvents() {
        const carouselContainer = document.querySelector('.carousel-container');
        if (!carouselContainer) return;

        let touchStartX = 0;
        let touchEndX = 0;

        carouselContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carouselContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });

        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
                this.resetAutoPlay();
            }
        };

        this.handleSwipe = handleSwipe;
    }
}

// ============================================
// SMOOTH SCROLLING
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
let lastScroll = 0;
const nav = document.querySelector('.nav');

function updateNavOnScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.boxShadow = 'none';
        nav.style.background = 'rgba(255, 255, 255, 0.9)';
    }

    lastScroll = currentScroll;
}

// ============================================
// ENHANCED SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger animation for feature cards
            const delay = entry.target.dataset.animationDelay || 0;

            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }, delay);

            // Unobserve after animation
            animationObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// ============================================
// PARALLAX SCROLLING
// ============================================
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');

    if (heroVisual && scrolled < window.innerHeight) {
        // Subtle parallax effect
        requestAnimationFrame(() => {
            heroVisual.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }

    ticking = false;
}

function onScroll() {
    if (!ticking) {
        requestAnimationFrame(() => {
            updateParallax();
            updateNavOnScroll();
        });
        ticking = true;
    }
}

// ============================================
// RESPECT REDUCED MOTION PREFERENCE
// ============================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel
    new Carousel();

    // Set up scroll animations
    if (!prefersReducedMotion) {
        const featureCards = document.querySelectorAll('.feature-card');
        const pricingCards = document.querySelectorAll('.pricing-card');
        const steps = document.querySelectorAll('.step');

        // Add staggered delays to feature cards
        featureCards.forEach((card, index) => {
            card.dataset.animationDelay = index * 100;
            card.style.opacity = '0';
            card.style.transform = 'translateY(40px) scale(0.95)';
            card.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            animationObserver.observe(card);
        });

        // Pricing cards
        pricingCards.forEach((card, index) => {
            card.dataset.animationDelay = index * 100;
            card.style.opacity = '0';
            card.style.transform = 'translateY(40px) scale(0.95)';
            card.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            animationObserver.observe(card);
        });

        // Steps
        steps.forEach((step, index) => {
            step.dataset.animationDelay = index * 150;
            step.style.opacity = '0';
            step.style.transform = 'translateY(40px) scale(0.98)';
            step.style.transition = 'opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            animationObserver.observe(step);
        });

        // Set up parallax scrolling
        window.addEventListener('scroll', onScroll, { passive: true });
    }
});

// ============================================
// DOWNLOAD BUTTON TRACKING
// ============================================
document.querySelectorAll('a[href="#download"]').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Download button clicked');
        alert('Coming soon to the App Store! We\'ll notify you when Orria launches.');
    });
});

// ============================================
// MOBILE MENU (Future Enhancement)
// ============================================
const createMobileMenu = () => {
    const navLinks = document.querySelector('.nav-links');

    if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-toggle')) {
        const toggle = document.createElement('button');
        toggle.className = 'mobile-menu-toggle';
        toggle.innerHTML = '☰';
        toggle.style.cssText = `
            display: block;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--text-primary);
        `;

        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
        });

        document.querySelector('.nav-container').appendChild(toggle);
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();
