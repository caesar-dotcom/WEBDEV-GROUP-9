// OPEN POPUP

const applyBtns =
  document.querySelectorAll(".apply-btn");

const popup =
  document.getElementById("applyPopup");

const closePopup =
  document.getElementById("closePopup");

applyBtns.forEach(button => {

  button.addEventListener("click", () => {

    popup.style.display = "flex";

  });

});

// CLOSE POPUP

closePopup.addEventListener("click", () => {

  popup.style.display = "none";

});

// CLOSE WHEN CLICK OUTSIDE

window.addEventListener("click", (e) => {

  if(e.target === popup){

    popup.style.display = "none";

  }

});

// FORM SUBMIT

const applyForm =
  document.getElementById("applyForm");

applyForm.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("We Have Recieved Your Application");

  popup.style.display = "none";

  applyForm.reset();

});