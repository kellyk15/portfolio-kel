const projectMedia = document.querySelector('.project-image-container img');
const sections = document.querySelectorAll('.project-item-section');
 
if (projectMedia && sections.length > 0) {
    // één afbeelding per sectie, in dezelfde volgorde als de sections in de HTML:
    // 0: Context, 1: Animations intro, 2: Loading screen, 3: Button animation, 4: Hamburger menu
    const images = [
        '../images/projects/works-dunkin.png',
        '../images/projects/works-dunkin.png',
        '../images/projects/dunkin-vid.gif',
        '../images/projects/dunkin-vid4.gif',
        '../images/projects/dunkin-vid3.gif'
    ];
 
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(sections).indexOf(entry.target);
                projectMedia.style.opacity = '0';
 
                setTimeout(() => {
                    projectMedia.src = images[index];
                    projectMedia.style.opacity = '1';
                }, 200);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -300px 0px'
    });
 
    sections.forEach(section => observer.observe(section));
}