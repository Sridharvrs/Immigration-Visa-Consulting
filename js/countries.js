const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{ threshold:0.15 });

reveals.forEach(el => observer.observe(el));

// ========= ANIMATION ==========
const bars = document.querySelectorAll(".progress div");

const barObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.width = entry.target.style.width;
    }
  });
},{threshold:0.5});

bars.forEach(bar=>{
  barObserver.observe(bar);
});

// ================
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

const strobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){

      const el = entry.target;
      const text = el.getAttribute("data-text");

      if(!el.classList.contains("done")){
        el.classList.add("done");
        typeWriter(el, text, 15);
      }

    }
  });
},{ threshold:0.5 });

document.querySelectorAll(".typing").forEach(el=>{
  strobserver.observe(el);
});

// =====================================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});