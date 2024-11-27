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

function calcTimeToNewYear() {
  const now = new Date();
  const NewYear = new Date("2025-01-01");
  NewYear.setUTCFullYear(2025, 0, 1);
  const timeRemainder = NewYear - now;
  const result = { days: 0, hours: 0, min: 0, sec: 0 };
  result.days = Math.floor(timeRemainder / 1000 / 60 / 60 / 24);
  result.hours = Math.floor((timeRemainder / 1000 / 60 / 60) % 24);
  result.min = Math.floor((timeRemainder / 1000 / 60) % 60);
  result.sec = Math.floor((timeRemainder / 1000) % 60);
  return result;
}

function changeTimer() {
  const daysNumber = document.querySelector(".days-number");
  const hourNumber = document.querySelector(".hour-number");
  const minNumber = document.querySelector(".min-number");
  const secNumber = document.querySelector(".sec-number");
  daysNumber.textContent = calcTimeToNewYear().days;
  hourNumber.textContent = calcTimeToNewYear().hours;
  minNumber.textContent = calcTimeToNewYear().min;
  secNumber.textContent = calcTimeToNewYear().sec;
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

let timer = setInterval(function tick() {
  changeTimer();
}, 200);

function addStars(parentElement, powersRate) {
  let numOfStars = parseInt(powersRate[1]);
  for (let i = 0; i < numOfStars; i++) {
    const star = document.createElement("div");
    parentElement.appendChild(star);
    star.classList.add("star");
    star.style.background =
      "url(assets/png/snowflake.png) no-repeat center/100%";
  }
}

function createModal() {
  const body = document.querySelector("body");
  body.classList.add("modal-body");
  const modalBack = document.createElement("div");
  body.appendChild(modalBack);
  modalBack.classList.add("modal-back");
  const modalWrap = document.createElement("div");
  modalBack.appendChild(modalWrap);
  modalWrap.classList.add("modal-wrapper");

  const modalWrapImg = document.createElement("div");
  modalWrap.appendChild(modalWrapImg);
  modalWrapImg.classList.add("modal-img-wrap");
  modalWrapImg.style.background =
    "url(assets/png/work.png) no-repeat center/100%";

  const modalButton = document.createElement("div");
  modalWrapImg.appendChild(modalButton);
  modalButton.classList.add("modal-button");

  const modalButtonLine1 = document.createElement("div");
  modalButton.appendChild(modalButtonLine1);
  modalButtonLine1.classList.add("modal-line-1");

  const modalButtonLine2 = document.createElement("div");
  modalButton.appendChild(modalButtonLine2);
  modalButtonLine2.classList.add("modal-line-2");

  const modalWrapTxt = document.createElement("div");
  modalWrap.appendChild(modalWrapTxt);
  modalWrapTxt.classList.add("modal-text-wrap");

  const descriptionText = document.createElement("div");
  modalWrapTxt.appendChild(descriptionText);

  const giftCategory = document.createElement("h4");
  descriptionText.appendChild(giftCategory);
  giftCategory.classList.add("gift-category");
  giftCategory.classList.add("work-color");
  giftCategory.textContent = "FOR WORK";

  const giftTitle = document.createElement("h3");
  descriptionText.appendChild(giftTitle);
  giftTitle.classList.add("gift-title");
  giftTitle.textContent = "Console.log Guru";

  const giftDescription = document.createElement("p");
  descriptionText.appendChild(giftDescription);
  giftDescription.classList.add("main-text-font");
  giftDescription.classList.add("description-text");
  giftDescription.textContent =
    "Uses console.log like a crystal ball to find any issue";

  const giftSuperpowers = document.createElement("div");
  modalWrapTxt.appendChild(giftSuperpowers);
  giftSuperpowers.classList.add("powers-wrapper");

  const powersTitle = document.createElement("h4");
  giftSuperpowers.appendChild(powersTitle);
  powersTitle.textContent = "ADDS SUPERPOWERS TO:";

  giftDescription.classList.add("description-text");
  giftDescription.textContent =
    "Uses console.log like a crystal ball to find any issue";

  const powersGrid = document.createElement("div");
  giftSuperpowers.appendChild(powersGrid);
  powersGrid.classList.add("powers-grid");

  const liveDiv = document.createElement("div");
  powersGrid.appendChild(liveDiv);
  liveDiv.classList.add("main-text-font");
  liveDiv.textContent = "Live";

  const liveRate = document.createElement("div");
  powersGrid.appendChild(liveRate);
  liveRate.classList.add("main-text-font");
  liveRate.textContent = "+500";

  const liveStars = document.createElement("div");
  powersGrid.appendChild(liveStars);
  liveStars.classList.add("star-box");
  addStars(liveStars, "+500");

  const createDiv = document.createElement("div");
  powersGrid.appendChild(createDiv);
  createDiv.classList.add("main-text-font");
  createDiv.textContent = "Create";

  const createRate = document.createElement("div");
  powersGrid.appendChild(createRate);
  createRate.classList.add("main-text-font");
  createRate.textContent = "+500";

  const createStars = document.createElement("div");
  powersGrid.appendChild(createStars);
  createStars.classList.add("star-box");
  addStars(createStars, "+500");

  const loveDiv = document.createElement("div");
  powersGrid.appendChild(loveDiv);
  loveDiv.classList.add("main-text-font");
  loveDiv.textContent = "Love";

  const loveRate = document.createElement("div");
  powersGrid.appendChild(loveRate);
  loveRate.classList.add("main-text-font");
  loveRate.textContent = "+500";

  const loveStars = document.createElement("div");
  powersGrid.appendChild(loveStars);
  loveStars.classList.add("star-box");
  addStars(loveStars, "+500");

  const dreamDiv = document.createElement("div");
  powersGrid.appendChild(dreamDiv);
  dreamDiv.classList.add("main-text-font");
  dreamDiv.textContent = "Dream";

  const dreamRate = document.createElement("div");
  powersGrid.appendChild(dreamRate);
  dreamRate.classList.add("main-text-font");
  dreamRate.textContent = "+500";

  const dreamStars = document.createElement("div");
  powersGrid.appendChild(dreamStars);
  dreamStars.classList.add("star-box");
  addStars(dreamStars, "+500");
}

createModal();
