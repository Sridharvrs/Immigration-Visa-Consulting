const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });
}, {
    threshold: 0.15
});

reveals.forEach(el => revealObserver.observe(el));

// ============================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    document.body.classList.toggle("no-scroll");

});