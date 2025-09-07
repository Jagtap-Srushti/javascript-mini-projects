const slides = document.querySelectorAll(".slides img");
const dotsContainer = document.querySelector(".dots");
let slideIndex = 0;
let intervalId = null;

// Create dots dynamically
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    slideIndex = i;
    showSlide(slideIndex);
    resetInterval();
  });
  dotsContainer.appendChild(dot);
});

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    dotsContainer.children[slideIndex].classList.add("active");
    intervalId = setInterval(nextSlide, 4000);
  }
}

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  else if (index < 0) slideIndex = slides.length - 1;

  slides.forEach(slide => slide.classList.remove("displaySlide"));
  dotsContainer.querySelectorAll("span").forEach(dot => dot.classList.remove("active"));

  slides[slideIndex].classList.add("displaySlide");
  dotsContainer.children[slideIndex].classList.add("active");
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
  resetInterval();
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 4000);
}

document.querySelector(".slider").addEventListener("mouseover", () => clearInterval(intervalId));
document.querySelector(".slider").addEventListener("mouseout", () => resetInterval());


document.addEventListener("DOMContentLoaded", initializeSlider);
