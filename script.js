let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active-slide");
        dots[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex >= slides.length) { slideIndex = 0; }

    slides[slideIndex].classList.add("active-slide");
    dots[slideIndex].classList.add("active");

    setTimeout(showSlides, 3000); // Auto-change every 3 seconds
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    if (slideIndex >= slides.length) slideIndex = 0;
    updateSlides();
}

function setSlide(n) {
    slideIndex = n;
    updateSlides();
}

function updateSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active-slide");
        dots[i].classList.remove("active");
    }
    slides[slideIndex].classList.add("active-slide");
    dots[slideIndex].classList.add("active");
}

showSlides();