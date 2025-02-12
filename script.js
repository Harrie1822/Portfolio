<<<<<<< HEAD
// JavaScript for Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll("#home .slider img");

function showSlides() {
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "block" : "none";
  });
  slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlides, 3000);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Update Footer Year Dynamically
=======
// JavaScript for Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll("#home .slider img");

function showSlides() {
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "block" : "none";
  });
  slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlides, 3000);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Update Footer Year Dynamically
>>>>>>> master
document.querySelector('footer p').innerHTML = `© ${new Date().getFullYear()} Haripal Thakur`;