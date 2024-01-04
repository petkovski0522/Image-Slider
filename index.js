const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    showSlider();
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlider() {
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlider();
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlider();
}
