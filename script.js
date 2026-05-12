// JOB SLIDER

const jobSlider = document.getElementById("jobSlider");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");


// NEXT BUTTON

nextBtn.addEventListener("click", () => {

  jobSlider.scrollLeft += 320;

});


// PREVIOUS BUTTON

prevBtn.addEventListener("click", () => {

  jobSlider.scrollLeft -= 320;

});


// APPLY BUTTONS

const applyButtons = document.querySelectorAll(".job-card button");

applyButtons.forEach((button) => {

  button.addEventListener("click", () => {

    alert("Application submitted successfully!");

  });

});

// HERO BUTTON

const heroBtn = document.getElementById("heroBtn");

heroBtn.addEventListener("click", () => {
  alert("Redirecting to job posting page...");
});


// CTA BUTTON

const ctaBtn = document.getElementById("ctaBtn");

ctaBtn.addEventListener("click", () => {
  alert("Welcome to Indeed Hiring!");
});