
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');
    header.classList.toggle('sticky', window.scrollY > 100);
});


const sections = document.querySelectorAll('.section');

const revealSection = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};


sections.forEach(s => {
    s.style.opacity = "0";
    s.style.transform = "translateY(50px)";
    s.style.transition = "all 0.8s ease-out";
});

window.addEventListener('scroll', revealSection);
revealSection(); 


document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you, Sneha! Your message has been sent (Mockup).");
    e.target.reset();
});