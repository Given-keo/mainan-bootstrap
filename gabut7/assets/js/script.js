document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    image.onload = () => {
      image.classList.add("loaded");
    };
  });
});
