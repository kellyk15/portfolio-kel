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