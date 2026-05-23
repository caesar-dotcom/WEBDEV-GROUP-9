/* =========================
        script.js
========================= */
const navLinks = document.querySelectorAll(".nav-right a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");

  });

});

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

  slides.forEach((slide)=>{
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

function nextSlide(){

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

/* Continuous infinite slideshow */
setInterval(nextSlide, 3000);