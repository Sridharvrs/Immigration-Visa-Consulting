const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {

            setTimeout(() => {
                entry.target.classList.add("active");
            }, index * 80); // stagger effect

        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(el => observer.observe(el));

// ====== STATS ======
const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const speed = target / 80;

    const update = () => {
        count += speed;

        if (count < target) {
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(update);
        } else {
            counter.innerText = target;
        }
    };

    update();
};

// Run when visible
const statsobserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            const counter = entry.target.querySelector(".counter");
            if (counter && !counter.classList.contains("done")) {
                counter.classList.add("done");
                startCounter(counter);
            }

        }
    });
}, { threshold: 0.5 });

document.querySelectorAll(".stat-card").forEach(card => {
    statsobserver.observe(card);
});

// =============
document.addEventListener("DOMContentLoaded", () => {

    function typeWriter(el, text, speed = 20) {
        let i = 0;
        el.innerHTML = "";

        function typing() {
            if (i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }

        typing();
    }

    const msgobserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const el = entry.target;
                const text = el.getAttribute("data-text");

                if (!el.classList.contains("done")) {
                    el.classList.add("done");
                    typeWriter(el, text, 15);
                }

            }
        });
    }, {
        threshold: 0.5
    });

    document.querySelectorAll(".typing").forEach(el => {
        msgobserver.observe(el);
    });

});


// =======================================================
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // lock/unlock scroll
    document.body.classList.toggle("no-scroll");
});