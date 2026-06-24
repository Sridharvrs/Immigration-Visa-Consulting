const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // lock/unlock scroll
    document.body.classList.toggle("no-scroll");
});
// ==================== ELIGIBILITY SECTION ===========================
// document.querySelector("form").addEventListener("submit", function(e){
//     e.preventDefault();
//     alert("🎉 Your eligibility is being analyzed. Our expert will contact you soon!");
// });

// ============== PARTICLE MOVING ANIMATION =============



// ============ ANIMATION ==============

// ============ 
// SCROLL REVEAL
window.addEventListener("load", () => {

    const items = document.querySelectorAll(".hero-anim");

    items.forEach((item,index) => {

        setTimeout(() => {
            item.classList.add("show");
        }, index * 250);

    });

});


// 
const revealItems = document.querySelectorAll(
'.reveal-left, .reveal-right, .reveal-up, .reveal-zoom'
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('reveal-active');

            observer.unobserve(entry.target);
        }

    });

},{
    threshold:0.2
});

revealItems.forEach(item=>{
    observer.observe(item);
});