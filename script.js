const btnLeft = document.querySelector(".btn__prev");
const btnRight = document.querySelector(".btn__next");
const container = document.querySelector(".slider__list");

btnRight.addEventListener("click", function (e) {
  e.preventDefault();
  container.appendChild(container.firstElementChild);
});

btnLeft.addEventListener("click", function (e) {
  e.preventDefault();
  container.insertBefore(
    container.lastElementChild,
    container.firstElementChild
  );
});
