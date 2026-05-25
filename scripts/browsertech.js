// browsertech.js
const projectImage = document.querySelector('.project-image-container img');
const sections = document.querySelectorAll('.project-item-section');

if (projectImage && sections.length > 0) {
    const images = [
        '../images/projects/works-bt-1.png', // Context
        '../images/projects/works-bt-1.png', // Approach & Process
        '../images/projects/works-bt-1.png', // Progressive disclosure
        '../images/projects/works-bt-1.png', // Screen reader validation
        '../images/projects/works-bt-2.png', // Contextual tooltips
        '../images/projects/works-bt-2.png', 
        '../images/projects/works-bt-3.png', // Safe reset
        '../images/projects/works-bt-4.png', // Autocomplete
        '../images/projects/works-bt-1.png', // Reflection
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