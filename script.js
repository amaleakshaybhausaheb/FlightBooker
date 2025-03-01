const menu = document.querySelector(".menu-btn");
const hamMenu = document.querySelector(".ham-menu");
const navBar = document.querySelector(".nav-bar");

let flag = 0;

function toggleHamMenu() {
  if (flag === 0) {
    hamMenu.style.top = 0;
    hamMenu.style.opacity = 1;
    navBar.style.position = "fixed";
    flag = 1;
} else {
    hamMenu.style.top = "-100vw";
    hamMenu.style.opacity = 0;
    navBar.style.position = "relative";
    flag = 0;
  }
}
menu.addEventListener("click", toggleHamMenu);