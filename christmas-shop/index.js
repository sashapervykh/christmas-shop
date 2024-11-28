import { giftList } from "./storage.js";

const body = document.querySelector("body");
const burgerBtn = document.querySelector(".burger-btn");
const navList = document.querySelector(".nav-list");
const burgerLineOne = document.querySelector(".line-one");
const burgerLineTwo = document.querySelector(".line-two");
const navItems = document.querySelectorAll(".nav-item");
const pageType = document.querySelector(".gifts-grid") ? "gifts" : "home";

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

if (pageType === "home") {
  let timer = setInterval(function tick() {
    changeTimer();
  }, 200);
}

function addStars(parentElement, powersRate) {
  const imageURL = defineImageUrl(pageType);

  let numOfStars = parseInt(powersRate[1]);
  for (let i = 0; i < numOfStars; i++) {
    const star = document.createElement("div");
    parentElement.appendChild(star);
    star.classList.add("star");
    star.style.background = `url(${imageURL}assets/png/snowflake.png) no-repeat center/100%`;
  }

  for (let i = 0; i < 5 - numOfStars; i++) {
    const star = document.createElement("div");
    parentElement.appendChild(star);
    star.classList.add("star");
    star.style.background = `url(${imageURL}assets/png/snowflake_pale.png) no-repeat center/100%`;
  }
}

function fillPowersGrid(parentGrid, powersInfo) {
  const powers = ["Live", "Create", "Love", "Dream"];
  for (let i = 0; i < powers.length; i++) {
    addElement({
      parent: parentGrid,
      elementType: "div",
      styles: ["main-text-font"],
      background: undefined,
      textContent: powers[i],
    });

    addElement({
      parent: parentGrid,
      elementType: "div",
      styles: ["main-text-font"],
      background: undefined,
      textContent: powersInfo[powers[i].toLowerCase()],
    });

    const liveStars = addElement({
      parent: parentGrid,
      elementType: "div",
      styles: ["star-box"],
      background: undefined,
    });

    addStars(liveStars, powersInfo[powers[i].toLowerCase()]);
  }
}

function addElement({
  parent,
  elementType,
  styles = [],
  background = undefined,
  textContent = undefined,
}) {
  const newElement = document.createElement(elementType);
  for (let i = 0; i < styles.length; i++) {
    newElement.classList.add(`${styles[i]}`);
  }
  if (background !== undefined) {
    newElement.style.background = `${background}`;
  }
  if (textContent !== undefined) {
    newElement.textContent = `${textContent}`;
  }
  parent.appendChild(newElement);
  return newElement;
}

function defineImageUrl(pageType) {
  if (pageType === "home") return "./";
  return "../";
}

function getGiftCategory(giftCategory) {
  let category;
  switch (giftCategory) {
    case "For Work":
      category = "work";
      break;
    case "For Health":
      category = "health";
      break;
    case "For Harmony":
      category = "harmony";
      break;
    default:
      return "Something goes wrong. There is an error in category.";
  }
  return category;
}

function createModal(giftInfo, pageType) {
  let category = getGiftCategory(giftInfo.category);
  const imageURL = defineImageUrl(pageType);

  const body = document.querySelector("body");
  body.classList.add("modal-body");

  const html = document.querySelector("html");
  html.classList.add("modal-body");

  const modalBack = addElement({
    parent: body,
    elementType: "div",
    styles: ["modal-back"],
  });

  const modalWrap = addElement({
    parent: modalBack,
    elementType: "div",
    styles: ["modal-wrapper"],
  });

  const modalWrapImg = addElement({
    parent: modalWrap,
    elementType: "div",
    styles: ["modal-img-wrap"],
    background: `url(${imageURL}assets/png/${category}.png) no-repeat center/100%`,
  });

  const modalButton = addElement({
    parent: modalWrapImg,
    elementType: "div",
    styles: ["modal-button"],
  });

  const modalButtonLine1 = addElement({
    parent: modalButton,
    elementType: "div",
    styles: ["modal-line-1"],
  });

  const modalButtonLine2 = addElement({
    parent: modalButton,
    elementType: "div",
    styles: ["modal-line-2"],
  });

  const modalWrapTxt = addElement({
    parent: modalWrap,
    elementType: "div",
    styles: ["modal-text-wrap"],
  });

  const descriptionText = addElement({
    parent: modalWrapTxt,
    elementType: "div",
  });

  const giftCategory = addElement({
    parent: descriptionText,
    elementType: "h4",
    styles: ["gift-category", `${category}-color`],
    textContent: `${giftInfo.category}`,
  });

  const giftTitle = addElement({
    parent: descriptionText,
    elementType: "h3",
    styles: ["gift-title"],
    textContent: `${giftInfo.name}`,
  });

  const giftDescription = addElement({
    parent: descriptionText,
    elementType: "p",
    styles: ["main-text-font", "description-text"],
    textContent: `${giftInfo.description}`,
  });

  const giftSuperpowers = addElement({
    parent: modalWrapTxt,
    elementType: "div",
    styles: ["powers-wrapper"],
  });

  const powersTitle = addElement({
    parent: giftSuperpowers,
    elementType: "h4",
    styles: [],
    textContent: "ADDS SUPERPOWERS TO:",
  });

  const powersGrid = addElement({
    parent: giftSuperpowers,
    elementType: "div",
    styles: ["powers-grid"],
  });

  fillPowersGrid(powersGrid, giftInfo.superpowers);
}

function removeModal() {
  const body = document.querySelector("body");
  const html = document.querySelector("html");
  const modalBack = document.querySelector(".modal-back");
  body.removeChild(modalBack);
  body.classList.remove("modal-body");
  html.classList.remove("modal-body");
  modalBack.removeEventListener("click", removeModalByBack);
}

function removeModalByBack(e) {
  const modalWrap = document.querySelector(".modal-wrapper");
  if (!modalWrap.contains(e.target)) {
    removeModal();
  }
}

function chooseFourRandom() {
  const arrayOfRandom = [];
  function chooseRandom(arrayOfRandom) {
    const randomIndex = Math.floor(Math.random() * 36);
    if (arrayOfRandom.includes(randomIndex)) {
      chooseRandom(arrayOfRandom);
    } else {
      arrayOfRandom.push(randomIndex);
    }
    return arrayOfRandom;
  }
  for (let i = 0; i < 4; i++) {
    chooseRandom(arrayOfRandom);
  }
  return arrayOfRandom;
}

function createGiftCard(parent, gift, pageType) {
  const category = getGiftCategory(gift.category);
  const imageUrl = defineImageUrl(pageType);

  const giftWrap = addElement({
    parent: parent,
    elementType: "div",
    styles: ["gift"],
  });

  const giftImgWrap = addElement({
    parent: giftWrap,
    elementType: "div",
    styles: ["gift-img"],
  });

  const giftImg = addElement({
    parent: giftImgWrap,
    elementType: "img",
  });

  giftImg.setAttribute("src", `${imageUrl}assets/png/${category}.png`);
  giftImg.setAttribute("alt", `Image for gift category`);

  const giftText = addElement({
    parent: giftWrap,
    elementType: "div",
    styles: ["gift-text"],
  });

  const giftCategory = addElement({
    parent: giftText,
    elementType: "h4",
    styles: ["gift-category", `${category}-color`],
    background: undefined,
    textContent: gift.category,
  });

  const giftTitle = addElement({
    parent: giftText,
    elementType: "h3",
    styles: ["gift-title"],
    background: undefined,
    textContent: gift.name,
  });
}

function createHomeGiftBox(giftList, pageType) {
  const fourRandomNumbers = chooseFourRandom();
  const homeGiftsBox = document.querySelector(".gifts-box");
  for (let i = 0; i < 4; i++) {
    createGiftCard(homeGiftsBox, giftList[fourRandomNumbers[i]], pageType);
  }

  const giftsCard = document.querySelectorAll(".gift");

  giftsCard.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const giftTitle = elem.querySelector(".gift-title");
      const isChosenGift = (gift) =>
        giftTitle.textContent.toLowerCase() === gift.name.toLowerCase();
      const chosenGiftIndex = giftList.findIndex(isChosenGift);
      createModal(giftList[chosenGiftIndex], pageType);

      const modalButton = document.querySelector(".modal-button");

      modalButton.addEventListener("click", removeModal);

      const modalBack = document.querySelector(".modal-back");
      modalBack.addEventListener("click", removeModalByBack);
    });
  });
}

if (pageType === "home") {
  createHomeGiftBox(giftList, pageType);
}

function changeCategory(elem) {
  const activeCategory = document.querySelector(".category__active");
  activeCategory.classList.remove("category__active");
  elem.classList.add("category__active");
  const giftsGrid = document.querySelector(".gifts-grid");
  removeAllInnerElements(giftsGrid);
  createGiftGrid(giftList, pageType);
}

const category = document.querySelectorAll(".category");
category.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    changeCategory(elem);
  });
});

function createGiftGrid(giftList, pageType) {
  const activeCategory = document.querySelector(".category__active");
  const giftsGrid = document.querySelector(".gifts-grid");
  let arrayToShow = giftList;

  if (activeCategory.textContent.trim().toUpperCase() !== "ALL") {
    arrayToShow = giftList.filter(
      (gift) =>
        gift.category.trim().toUpperCase() ===
        activeCategory.textContent.trim().toUpperCase()
    );
  }

  for (let i = 0; i < arrayToShow.length; i++) {
    createGiftCard(giftsGrid, arrayToShow[i], pageType);
  }

  const giftsCard = document.querySelectorAll(".gift");

  giftsCard.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const giftTitle = elem.querySelector(".gift-title");
      const isChosenGift = (gift) =>
        giftTitle.textContent.toLowerCase() === gift.name.toLowerCase();
      const chosenGiftIndex = giftList.findIndex(isChosenGift);
      createModal(giftList[chosenGiftIndex], pageType);

      const modalButton = document.querySelector(".modal-button");

      modalButton.addEventListener("click", removeModal);

      const modalBack = document.querySelector(".modal-back");
      modalBack.addEventListener("click", removeModalByBack);
    });
  });
}

function removeAllInnerElements(parent) {
  parent.innerHTML = "";
}

createGiftGrid(giftList, pageType);

function showScrollBtn() {
  const scrollBtn = document.querySelector(".scroll-btn");
  scrollBtn.classList.add("scroll-btn__flex");

  scrollBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
}

function removeScrollBtn() {
  const scrollBtn = document.querySelector(".scroll-btn");
  scrollBtn.classList.remove("scroll-btn__flex");
}

console.log(window.innerWidth);
if (pageType === "gifts" && window.innerWidth <= 768) {
  window.onscroll = () => {
    if (document.documentElement.scrollTop > 300) {
      showScrollBtn();
    }
    if (document.documentElement.scrollTop < 300) {
      removeScrollBtn();
    }
  };
}
