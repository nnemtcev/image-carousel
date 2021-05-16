let carouselImagePaths = ["./cat.jpeg", "./cat2.jpeg"];
let currentImageIndex = 0;

const currentImageInCarousel = document.getElementsByClassName(
  "carousel-image"
)[0];

const previousButton = document.getElementsByClassName("previous-btn")[0];
const forwardButton = document.getElementsByClassName("forward-btn")[0];

function onPreviousButtonClick() {
  const previousImageIndex = currentImageIndex;

  currentImageIndex =
    currentImageIndex === 0
      ? carouselImagePaths.length - 1
      : (currentImageIndex - 1) % carouselImagePaths.length;

  currentImageInCarousel.src = carouselImagePaths[currentImageIndex];

  const navigationDots = document.getElementsByClassName("circle");
  navigationDots[previousImageIndex].classList.remove("selectedCircle");
  navigationDots[currentImageIndex].classList.add("selectedCircle");
}

function onForwardButtonClick() {
  const previousImageIndex = currentImageIndex;

  currentImageIndex = (currentImageIndex + 1) % carouselImagePaths.length;
  currentImageInCarousel.src = carouselImagePaths[currentImageIndex];

  const navigationDots = document.getElementsByClassName("circle");
  navigationDots[previousImageIndex].classList.remove("selectedCircle");
  navigationDots[currentImageIndex].classList.add("selectedCircle");
}

function renderNavigationDots() {
  const carousel = document.getElementById("carousel");

  for (let i = 0; i < carouselImagePaths.length; i++) {
    const circle = document.createElement("div");

    circle.addEventListener("click", function () {
      let previousImageIndex = currentImageIndex;
      currentImageIndex = i;
      currentImageInCarousel.src = carouselImagePaths[currentImageIndex];
      const navigationDots = document.getElementsByClassName("circle");
      navigationDots[previousImageIndex].classList.remove("selectedCircle");
      navigationDots[currentImageIndex].classList.add("selectedCircle");
    });

    circle.classList.add("circle");

    if (i === 0) {
      circle.classList.add("selectedCircle");
    }

    carousel.appendChild(circle);
  }
}

previousButton.addEventListener("click", onPreviousButtonClick);
forwardButton.addEventListener("click", onForwardButtonClick);

renderNavigationDots();
