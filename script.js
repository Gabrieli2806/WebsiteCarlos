// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe video cards
document.querySelectorAll('.video-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Image Gallery Modal
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.querySelector('.modal-close');
const modalPrev = document.querySelector('.modal-prev');
const modalNext = document.querySelector('.modal-next');

let currentGallery = [];
let currentImageIndex = 0;

// Function to open modal
function openModal(imageSrc, gallery, index) {
    modal.classList.add('active');
    modalImage.src = imageSrc;
    currentGallery = gallery;
    currentImageIndex = index;
    document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Function to show next image
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
    modalImage.src = currentGallery[currentImageIndex];
}

// Function to show previous image
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
    modalImage.src = currentGallery[currentImageIndex];
}

// Panoramic gallery click handlers
const panoramicItems = document.querySelectorAll('.panoramic-item');
const panoramicImages = Array.from(panoramicItems).map(item => item.querySelector('img').src);

panoramicItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        openModal(panoramicImages[index], panoramicImages, index);
    });
});

// Vertical gallery click handlers
const verticalItems = document.querySelectorAll('.vertical-item');
const verticalImages = Array.from(verticalItems).map(item => item.querySelector('img').src);

verticalItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        openModal(verticalImages[index], verticalImages, index);
    });
});

// Modal controls
modalClose.addEventListener('click', closeModal);
modalNext.addEventListener('click', showNextImage);
modalPrev.addEventListener('click', showPrevImage);

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        }
    }
});

// Carousel Functionality
class Carousel {
    constructor(trackId, dotsContainerId, carouselType) {
        this.track = document.getElementById(trackId);
        this.dotsContainer = document.getElementById(dotsContainerId);
        this.items = Array.from(this.track.children);
        this.currentIndex = 0;
        this.carouselType = carouselType;

        this.init();
    }

    init() {
        // Create dots
        this.items.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });

        this.dots = Array.from(this.dotsContainer.children);

        // Add event listeners to buttons
        document.querySelectorAll(`[data-carousel="${this.carouselType}"]`).forEach(btn => {
            if (btn.classList.contains('carousel-prev')) {
                btn.addEventListener('click', () => this.prevSlide());
            } else if (btn.classList.contains('carousel-next')) {
                btn.addEventListener('click', () => this.nextSlide());
            }
        });

        // Auto play
        this.startAutoPlay();
    }

    goToSlide(index) {
        this.currentIndex = index;
        const offset = -100 * index;
        this.track.style.transform = `translateX(${offset}%)`;
        this.updateDots();
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.goToSlide(this.currentIndex);
        this.resetAutoPlay();
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.goToSlide(this.currentIndex);
        this.resetAutoPlay();
    }

    updateDots() {
        this.dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 5000);
    }

    resetAutoPlay() {
        clearInterval(this.autoPlayInterval);
        this.startAutoPlay();
    }
}

// Initialize carousels
const panoramicCarousel = new Carousel('panoramicTrack', 'panoramicDots', 'panoramic');
const verticalCarousel = new Carousel('verticalTrack', 'verticalDots', 'vertical');

// YouTube Video Click to Play
document.querySelectorAll('.youtube-card').forEach(card => {
    card.addEventListener('click', function() {
        const videoId = this.getAttribute('data-video-id');
        const iframe = document.createElement('iframe');
        iframe.setAttribute('width', '100%');
        iframe.setAttribute('height', '250');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
        iframe.setAttribute('title', 'YouTube video player');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        iframe.setAttribute('allowfullscreen', '');

        this.querySelector('.youtube-thumbnail').replaceWith(iframe);
    });
});

// Observe YouTube items
document.querySelectorAll('.youtube-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});