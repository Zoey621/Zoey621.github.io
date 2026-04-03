const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let index = 0;

function showNextSlide() {
  index++;

  if (index >= images.length) {
    index = 0;
  }

  slides.style.transform = `translateX(-${index * 100}%)`;
}

// wait until page loads (VERY IMPORTANT)
window.onload = () => {
  setInterval(showNextSlide, 3000);
};