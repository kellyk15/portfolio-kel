// content.js
const projectImage = document.querySelector('.project-image-container img');
const sections = document.querySelectorAll('.project-item-section');

if (projectImage && sections.length > 0) {
    const images = [
        '../images/projects/works-content.png',   // Context
        '../images/projects/works-content.png',   // What is this app?
        '../images/projects/works-content-2.png', // Homescreen
        '../images/projects/works-content-3.png', // Detailpage
        '../images/projects/works-content-4.png', // Dashboard
        '../images/projects/works-content-5.png', // Questionnaire
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(sections).indexOf(entry.target);
                const newSrc = images[index];

                if (newSrc && projectImage.src !== newSrc) {
                    projectImage.style.opacity = '0';
                    setTimeout(() => {
                        projectImage.src = newSrc;
                        projectImage.style.opacity = '1';
                    }, 200);
                }
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -200px 0px'
    });

    sections.forEach(section => observer.observe(section));
}