hamburger = document.querySelector(".header__burger");
hamburger.onclick = function() {
  navBar = document.querySelector(".header__navbar");
  navBar.classList.toggle("active");
};