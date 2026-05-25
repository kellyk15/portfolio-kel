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