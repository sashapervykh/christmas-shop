import { giftList } from "./storage.js";

const body = document.querySelector("body");
const burgerBtn = document.querySelector(".burger-btn");
const navList = document.querySelector(".nav-list");
const burgerLineOne = document.querySelector(".line-one");
const burgerLineTwo = document.querySelector(".line-two");
const navItems = document.querySelectorAll(".nav-item");

function moveBurgerNav() {
  body.classList.toggle("body-burger");
  navList.classList.toggle("nav-list__shown");
  burgerLineOne.classList.toggle("line-one__crossed");
  burgerLineTwo.classList.toggle("line-two__crossed");
  burgerBtn.classList.toggle("burger-btn__crossed");
}

burgerBtn.addEventListener("click", moveBurgerNav);

navItems.forEach((elem) => {
  elem.addEventListener("click", moveBurgerNav);
});

addEventListener("resize", (event) => {
  if (
    window.innerWidth > 768 &&
    burgerBtn.classList.contains("burger-btn__crossed")
  ) {
    body.classList.remove("body-burger");
    navList.classList.remove("nav-list__shown");
    burgerLineOne.classList.remove("line-one__crossed");
    burgerLineTwo.classList.remove("line-two__crossed");
    burgerBtn.classList.remove("burger-btn__crossed");
  }
});
