const moreBtn = document.querySelector(".title .titleTextAndBtn .titleBtn");
const title = document.querySelector(".title .titleTextAndBtn .titleText");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
