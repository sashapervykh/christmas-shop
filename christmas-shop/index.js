import { giftList } from "./storage.js";

const body = document.querySelector("body");
const burgerBtn = document.querySelector(".burger-btn");
const navList = document.querySelector(".nav-list");
const burgerLineOne = document.querySelector(".line-one");
const burgerLineTwo = document.querySelector(".line-two");
const navItems = document.querySelectorAll(".nav-item");
const daysNumber = document.querySelector(".days-number");
const hourNumber = document.querySelector(".hours-number");
const minNumber = document.querySelector(".min-number");
const secNumber = document.querySelector(".sec-number");

function moveBurgerNav() {
  body.classList.toggle("body-burger");
  navList.classList.toggle("nav-list__shown");
  burgerLineOne.classList.toggle("line-one__crossed");
  burgerLineTwo.classList.toggle("line-two__crossed");
  burgerBtn.classList.toggle("burger-btn__crossed");
}

function calcTimeToNewYear() {
  const now = new Date();
  const NewYear = new Date("2025-01-01");
  NewYear.setUTCFullYear(2025, 0, 1);
  const timeRemainder = NewYear - now;
  const result = { days: 0, hours: 0, min: 0, sec: 0 };
  result.days = Math.floor(timeRemainder / 1000 / 60 / 60 / 24);
  result.hours = Math.floor((timeRemainder / 1000 / 60 / 60) % 24);
  result.min = Math.floor((timeRemainder / 1000 / 60) % 60);
  result.sec = Math.ceil((timeRemainder / 1000) % 60);
  return result;
}

console.log(calcTimeToNewYear());

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

let timer = setInterval(function tick() {
  console.log(calcTimeToNewYear());
}, 200);
