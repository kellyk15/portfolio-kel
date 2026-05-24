const loader = document.querySelector('.loader');

if (loader) {
    window.addEventListener('load', () => {
        // Wacht tot de letter-animaties klaar zijn (~1.2s delay + animatieduur)
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 2200);
    });
}

const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const logo = document.querySelector('.logo');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('toonmenu');
        menuBtn.classList.toggle('is-open', isOpen);
        logo.classList.toggle('is-visible', isOpen);
        menuBtn.setAttribute('aria-expanded', isOpen);
        mobileNav.setAttribute('aria-hidden', !isOpen);
    });
}

const container = document.getElementById('stars');
if (container) {
    const starCount = 15;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const size = Math.random() * 100 + 60;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 4 + 3;
        const delay = Math.random() * 4;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;

        container.appendChild(star);
    }
}

// https://claude.ai/chat/e93c6d49-c98e-47a8-bd96-41126a36563c
const projectImage = document.querySelector('.project-image-container img');
const sections = document.querySelectorAll('.project-item-section');

if (projectImage && sections.length > 0) {
    const images = [
        '../images/projects/works-buddy.png',
        '../images/projects/works-buddy-2.png',
        '../images/projects/works-buddy-3.png',
        '../images/projects/works-buddy-3.png',
        '../images/projects/works-buddy-4.png',
        '../images/projects/works-buddy-5.png',
        '../images/projects/works-buddy-10.png',
        '../images/projects/works-buddy-6.png',
        '../images/projects/works-buddy-7.png',
        '../images/projects/works-buddy-8.png',
        '../images/projects/works-buddy-9.png',
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(sections).indexOf(entry.target);
                projectImage.style.opacity = '0';

                setTimeout(() => {
                    projectImage.src = images[index];
                    projectImage.style.opacity = '1';
                }, 200);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -300px 0px' // wacht tot section 200px in beeld is
    });

    sections.forEach(section => observer.observe(section));
}