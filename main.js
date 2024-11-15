let slideIndex = 0;
initializeSlides();

function initializeSlides() {
  const slides = document.getElementsByClassName("mySlides");
  const dotsContainer = document.getElementById("dotsContainer");
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = () => currentSlide(i + 1);
    dotsContainer.appendChild(dot);
  }

  showSlides();
}

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000);
}
function currentSlide(n) {
  slideIndex = n;
  showSlides();
}
let currentSlideIndex = 0;

function initializeCarousel() {
  showSlide();
}

function showSlide() {
  const slides = document.getElementsByClassName("carousel-slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[currentSlideIndex].style.display = "block";
}

function navigateSlide(step) {
  const slides = document.getElementsByClassName("carousel-slide");

  currentSlideIndex += step;

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  showSlide();
}

initializeCarousel();
