/* =========================
        legal.js
========================= */

const cards = document.querySelectorAll(".legal-card");

function revealCards(){

  cards.forEach((card)=>{

    const windowHeight = window.innerHeight;
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < windowHeight - 100){
      card.classList.add("show");
    }

  });

}

window.addEventListener("scroll", revealCards);

revealCards();