const menu = document.querySelector(".section-header__hamburger-menu");
const navbar = document.querySelector(".section-header__navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("change");
  navbar.classList.toggle("change");
});
