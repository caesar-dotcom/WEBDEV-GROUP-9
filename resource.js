// resource.js

// FAQ

const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach(button => {

  button.addEventListener("click", () => {

    const answer = button.nextElementSibling;

    if(answer.style.display === "block"){

      answer.style.display = "none";

    }else{

      answer.style.display = "block";

    }

  });

});

// BUTTONS

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    console.log("Button clicked");

  });

});