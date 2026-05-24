const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const logo = document.querySelector('.logo');

menuBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('toonmenu');
    menuBtn.classList.toggle('is-open', isOpen);
    logo.classList.toggle('is-visible', isOpen);
    menuBtn.setAttribute('aria-expanded', isOpen);
    mobileNav.setAttribute('aria-hidden', !isOpen);
});

const container = document.getElementById('stars');
const starCount = 15; // aantal sterren

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const size = Math.random() * 100 + 60; // 60px - 160px
    const x = Math.random() * 100;        // random x positie
    const y = Math.random() * 100;        // random y positie
    const duration = Math.random() * 4 + 3; // 3s - 7s
    const delay = Math.random() * 4;      // 0s - 4s delay

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;

    container.appendChild(star);
}