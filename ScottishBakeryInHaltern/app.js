//////////////// Intro Animation

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".header-container", { opacity: 0 }, { opacity: 1, duration: 1 });

/////////////// End of Intro Animation

///////////////// Responsive Navbar

const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}
navSlide();

///////////////// End of Responsive navbar




