// Active link highlight tijdens scrollen
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Fade-in animatie bij scroll
const faders = document.querySelectorAll(".section");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(section => {
  appearOnScroll.observe(section);
});

/* Fade effect op secties */
.section {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
  }
  
  .section.appear {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Actieve linkstijl */
  .nav-links a.active {
    color: #00bcd4;
    font-weight: 800;
  }
  