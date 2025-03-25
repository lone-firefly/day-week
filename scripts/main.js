const buttonMinus = document.querySelector(".group-product__minus");
const buttonPlus = document.querySelector(".group-product__plus");
const numberBuy = document.querySelector(".group-product__num");
const priceFirstFull = document.querySelector(".group-product__first-price");
const priceSecondFull = document.querySelector(".group-product__second-price");
const priceFirst = parseInt(priceFirstFull.textContent);
const priceSecond = parseInt(priceSecondFull.textContent);

const cardTemplate = document.querySelector("#product-card").content;
let cardsGroup = document.querySelector(".bag-main__cards-group");

// const buttonAddInCart = document.querySelectorAll(".content__button-bag");
const buttonAddInCart = document.querySelector(".bag-card__button-bag");

btnMinusClass();

function btnMinusClass() {
  if (Number(numberBuy.textContent) === 1) {
    buttonMinus.classList.add("group-product__minus_inactive");
    // console.log(buttonMinus.classList);
  }
}

function addingNewCard() {
  let cloneCard = cardTemplate.cloneNode(true);
  cardsGroup.append(cloneCard);
}

buttonAddInCart.addEventListener("click", function () {
  addingNewCard();
});

buttonMinus.addEventListener("click", function () {
  if (Number(numberBuy.textContent) > 1) {
    numberBuy.textContent = Number(numberBuy.textContent) - 1;
    priceFirstFull.textContent =
      priceFirst * Number(numberBuy.textContent) + " ₽";
    priceSecondFull.textContent =
      priceSecond * Number(numberBuy.textContent) + " ₽";
  }
  btnMinusClass();
});

buttonPlus.addEventListener("click", function () {
  numberBuy.textContent = Number(numberBuy.textContent) + 1;
  buttonMinus.classList.remove("group-product__minus_inactive");
  console.log(buttonMinus.classList);
  priceFirstFull.textContent =
    priceFirst * Number(numberBuy.textContent) + " ₽";
  priceSecondFull.textContent =
    priceSecond * Number(numberBuy.textContent) + " ₽";
});

// let arr = [1, 2, 3, 5, 6, 7];

// console.log(arr);
// console.table(arr);

// let obj = {
//   arr: 1,
//   mar: "eew",
// };
// console.log(obj);
// console.table(obj);
