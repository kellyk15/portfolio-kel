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


// soundeffects
const worksItems = document.querySelectorAll('.works-item')

worksItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        
        let muziek = new Audio("../pop.mp3")
        muziek.play()

        setTimeout(() => {
            window.location.href = item.href
        }, 200)
    })
})

// works-item (links naar andere pagina)
// document.querySelectorAll('.works-item').forEach(item => {
//     item.addEventListener('click', (e) => {
//         e.preventDefault()
//         new Audio("../pop.mp3").play()
//         setTimeout(() => {
//             window.location.href = item.href
//         }, 200)
//     })
// })

// more-item (opent popover, geen navigatie)
document.querySelectorAll('.more-item').forEach(item => {
    item.addEventListener('click', () => {
        new Audio("../pop.mp3").play()
    })
})