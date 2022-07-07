var slideIndex = 0;

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("images");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {
    slideIndex = 0;
    n = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[n - 1].style.display = "block";
  dots[n - 1].classList.add("active");
}

showSlides(1);
setInterval(() => {
  slideIndex++;
  showSlides(slideIndex);
}, 2500);
