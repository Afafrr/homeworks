const button = document.querySelector(".theme__button");
const scrollBtn = document.querySelector(".footer__scroll-top");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
scrollBtn.addEventListener("click", () => {
  scrollTo({ top: 0, behavior: "smooth" });
});
