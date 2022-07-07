
let page = localStorage.getItem("page");

// Pointers for the three buttons in the header
let dessertBtn = document.querySelector(".btn-dessert");
let mealBtn = document.querySelector(".btn-meals");
let drinkBtn = document.querySelector(".btn-drinks");
let allBtn = document.querySelector(".all");
allBtn.addEventListener('click',openHomePage);
function openHomePage(){
    window.location = "../Home Page/homePage.html";
}
// Events in these button
mealBtn.addEventListener("click", meal);
dessertBtn.addEventListener("click", dessert);
drinkBtn.addEventListener("click", drink);
let app = document.querySelector(".root");
let mealBtnText = mealBtn.firstChild.nextElementSibling.nextElementSibling;
let dessertBtnText =
  dessertBtn.firstChild.nextElementSibling.nextElementSibling;
let drinkBtnText = drinkBtn.firstChild.nextElementSibling.nextElementSibling;
//**** Event for the Meal */
function meal() {
  if (app.firstChild) {
    app.removeChild(app.firstChild);
  }
  let searchBox = (document.querySelector(".search-input").value = ""); //To remove anyText from search box


  let container = document.createElement("div");
  app.appendChild(container);
  container.classList.add("drinks-list");
  let title = document.createElement("p");
  title.textContent = "Meals";
  title.classList.add("titles");
  container.appendChild(title);
  //To change the meal button theme
  mealBtn.style.background = "var(--navbuttonfocus-color)";
  mealBtnText.style.color = "white";
  dessertBtn.style.background = "var(--navbutton-color)";
  dessertBtnText.style.color = "var(--font-color)";
  drinkBtnText.style.color = "var(--font-color)";
  drinkBtn.style.background = "var(--navbutton-color)";
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  container.appendChild(cardContainer);
  let counter = 0;
  let prices = [20, 18, 17, 15, 27, 22, 12, 11, 30, 24, 25, 19, 16, 21, 14, 10]; // for set prices
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken")
    .then((res) => {
      return res.json(); // get data from api
    })
    .then((data) => {
      let meals = data.meals; // store data in meal array
      meals.forEach((meal) => {
        if (counter == prices.length) {
          return;
        } else {
          let card = document.createElement("div"); // create card for each meal
          card.classList.add("card"); // add class for each card
          cardContainer.appendChild(card);

          let mealImage = document.createElement("img"); //create image for each card
          mealImage.src = meal.strMealThumb;
          mealImage.classList.add("img");
          card.appendChild(mealImage); // append image to the card
          let mealName = document.createElement("h4");
          mealName.textContent = meal.strMeal;
          mealName.classList.add("name");
          card.appendChild(mealName);
          let dollarSign = document.createElement("p");
          dollarSign.textContent = "$";
          dollarSign.style.display = "inline";
          dollarSign.classList.add("dollar");
          card.appendChild(dollarSign);
          let mealPrice = document.createElement("p"); // Create p for each card
          mealPrice.textContent = prices[counter];
          mealPrice.classList.add("price");
          mealPrice.style.display = "inline";

          let addBtn = document.createElement("button"); // Create add button for each card
          card.appendChild(mealPrice);
          addBtn.textContent = "+";
          addBtn.style.display = "inline";
          addBtn.classList.add("add-button"); // insert class to add button
          card.appendChild(addBtn); // append add btn to card
          let quantity = document.createElement("p"); // Create p element to set the quantity
          quantity.textContent = "0"; // set initial value
          quantity.style.display = "inline";
          quantity.classList.add("quantity");
          card.append(quantity);
          let subBtn = document.createElement("button"); // Create sub button for each card
          subBtn.textContent = "-";
          subBtn.style.display = "inline";
          subBtn.classList.add("sub-button"); //insert class to sub button
          card.appendChild(subBtn); // append sub btn to card
          addBtn.addEventListener("click", saveToLocalStorage); //Add To local storage event
          subBtn.addEventListener("click", deleteFromLocalStorage);
          counter++;
        }
      });
      searchAbout();

    });
}

//**** Event for the Drink */

function drink() {
  if (app.firstChild) {
    app.removeChild(app.firstChild);
  }
  let searchBox = (document.querySelector(".search-input").value = ""); //To remove anyText from search box
  let drinksBtn = document.querySelector(".btn-drinks");
  drinksBtn.style.background = "#263238";
  let container = document.createElement("div");
  app.appendChild(container);
  container.classList.add("drinks-list");
  let title = document.createElement("p");

  title.classList.add("titles");
  container.appendChild(title);
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  container.appendChild(cardContainer);
  title.textContent = "Drinks";
  // To change the drink button theme
  drinkBtn.style.background = "var(--navbuttonfocus-color)";
  drinkBtnText.style.color = "white";

  mealBtn.style.background = "var( --navbutton-color)";
  mealBtnText.style.color = "var(--font-color)";
  dessertBtn.style.background = "var( --navbutton-color)";
  dessertBtnText.style.color = "var(--font-color)";

  let counter = 0;
  let prices = [7, 8, 10, 15, 5, 11, 12, 13, 4, 3, 9, 13, 14, 6, 2, 10]; // for set prices
  fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let drinks = data.drinks;
      drinks.forEach((drink) => {
        if (counter == prices.length) {
          return;
        } else {
          let card = document.createElement("div");
          card.classList.add("card");
          cardContainer.appendChild(card);
          let drinkImage = document.createElement("img");
          drinkImage.src = drink.strDrinkThumb;
          drinkImage.classList.add("img");
          card.appendChild(drinkImage);
          let drinkName = document.createElement("h4");
          drinkName.textContent = drink.strDrink;
          card.appendChild(drinkName);
          drinkName.classList.add("name");
          let dollarSign = document.createElement("p");
          dollarSign.textContent = "$";
          dollarSign.style.display = "inline";
          dollarSign.classList.add("dollar");
          card.appendChild(dollarSign);
          let drinkPrice = document.createElement("p");
          drinkPrice.textContent = prices[counter];
          drinkPrice.style.display = "inline";
          drinkPrice.classList.add("price");
          card.appendChild(drinkPrice);
          let addBtn = document.createElement("button");
          addBtn.textContent = "+";
          addBtn.style.display = "inline";
          addBtn.classList.add("add-button"); //insert class to addBtn
          card.appendChild(addBtn);
          let quantity = document.createElement("p"); // Create p element to set the quantity
          quantity.textContent = "0"; // set initial value
          quantity.style.display = "inline";
          quantity.classList.add("quantity");
          card.append(quantity);
          let subBtn = document.createElement("button");
          subBtn.textContent = "-";
          subBtn.style.display = "inline";
          subBtn.classList.add("sub-button"); //insert class to subBtn
          card.appendChild(subBtn);
          addBtn.addEventListener("click", saveToLocalStorage); //Add To local storage event
          subBtn.addEventListener("click", deleteFromLocalStorage);
          counter++;
        }
      });
      searchAbout();

    });
}
/*Event for dessert*/
function dessert() {
  if (app.firstChild) {
    app.removeChild(app.firstChild);
  }
  let searchBox = (document.querySelector(".search-input").value = ""); //To remove anyText from search box

  let container = document.createElement("div");
  app.appendChild(container);
  container.classList.add("drinks-list");
  let title = document.createElement("p");
  title.textContent = "Dessert";
  title.classList.add("titles");
  container.appendChild(title);
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  container.appendChild(cardContainer);
  // To change the dessert button  theme
  dessertBtn.style.background = "var(--navbuttonfocus-color)";
  dessertBtnText.style.color = "white";
  mealBtn.style.background = "var(--navbutton-color)";
  mealBtnText.style.color = "var(--font-color)";
  drinkBtn.style.background = "var(--navbutton-color)";
  drinkBtnText.style.color = "var(--font-color)";
  let counter = 0;
  let prices = [30, 18, 17, 25, 13, 22, 12, 11, 30, 24, 25, 19, 16, 21]; // for set prices
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let desserts = data.meals;
      console.log(desserts);
      desserts.forEach((dessert) => {
        if (counter == prices.length) {
          return;
        } else {
          let card = document.createElement("div");
          card.classList.add("card");
          cardContainer.appendChild(card);
          let dessertImage = document.createElement("img");
          dessertImage.src = dessert.strMealThumb;
          dessertImage.classList.add("img");
          card.appendChild(dessertImage);
          let dessertName = document.createElement("h4");
          dessertName.textContent = dessert.strMeal;
          card.appendChild(dessertName);
          dessertName.classList.add("name");
          let dollarSign = document.createElement("p");
          dollarSign.textContent = "$";
          dollarSign.style.display = "inline";
          dollarSign.classList.add("dollar");
          card.appendChild(dollarSign);
          let dessertPrice = document.createElement("p");
          dessertPrice.textContent = prices[counter];
          dessertPrice.style.display = "inline";
          dessertPrice.classList.add("price");
          card.appendChild(dessertPrice);

          let addBtn = document.createElement("button");
          addBtn.textContent = "+";
          addBtn.style.display = "inline";
          addBtn.classList.add("add-button"); //insert class to addBtn
          card.appendChild(addBtn);
          let quantity = document.createElement("p"); // Create p element to set the quantity
          quantity.textContent = "0"; // set initial value
          quantity.style.display = "inline";
          quantity.classList.add("quantity");
          card.append(quantity);
          let subBtn = document.createElement("button");
          subBtn.textContent = "-";
          subBtn.style.display = "inline";
          subBtn.classList.add("sub-button"); //insert class to subBtn
          card.appendChild(subBtn);
          addBtn.addEventListener("click", saveToLocalStorage); //Add To local storage event
          subBtn.addEventListener("click", deleteFromLocalStorage);
          counter++;
        }
      });
      searchAbout();

    });
}
// open category function
if (page == "drinks") {
  drink();
} else if (page == "desserts") {
  dessert();
} else {
  meal();
}
function saveToLocalStorage(e) {
  let name =
    e.target.parentElement.firstElementChild.nextElementSibling.textContent;
  let price =
    e.target.parentElement.firstElementChild.nextElementSibling
      .nextElementSibling.nextElementSibling.textContent;
  let image = e.target.parentElement.firstElementChild.src;
  let quantity = e.target.nextElementSibling;
  let num = parseInt(quantity.textContent);
  num++;
  quantity.textContent = num;
  let arrayLocal = JSON.parse(localStorage.getItem("arrayLocal"));
  if (arrayLocal != null) {
    let dataObj = { name, price, image, num };
    let flag = false;
    let i = 0;
    for (i = 0; i < arrayLocal.length; i++) {
      if (arrayLocal[i].name == dataObj.name) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }
    if (flag == true) {
      arrayLocal[i].num =++arrayLocal[i].num; // if the same element is really exist in array
      localStorage.setItem("arrayLocal", JSON.stringify(arrayLocal));
    } else {
      arrayLocal.push(dataObj);
      localStorage.setItem("arrayLocal", JSON.stringify(arrayLocal));
    }
  } else {
    let arrayLocal = [];
    let dataObj = { name, price, image, num };
    arrayLocal.push(dataObj);
    localStorage.setItem("arrayLocal", JSON.stringify(arrayLocal));
  }
}
// Delete From Local Storage Function
function deleteFromLocalStorage(e) {
  let quantity = e.target.previousElementSibling;
  let num = parseInt(quantity.textContent);
  if (num == 0) {
    return;
  }
  num--;
  quantity.textContent = num;
  let name =
    e.target.parentElement.firstElementChild.nextElementSibling.textContent;
  let arrayLocal = localStorage.getItem("arrayLocal");
  arrayLocal = JSON.parse(arrayLocal);
  for (let i = 0; i < arrayLocal.length; i++) {
    if (arrayLocal[i].name === name) {
      if (arrayLocal[i].num > 1) {
        arrayLocal[i].num = --arrayLocal[i].num;
      } else {
        arrayLocal.splice(i, 1);
      }
    }
  }
  localStorage.setItem("arrayLocal", JSON.stringify(arrayLocal));
}
function searchAbout() {
  let searchBox = document.querySelector(".search-input");
  let cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    let input = searchBox.value.toUpperCase();
    if (
      cards[i].firstChild.nextElementSibling.textContent
        .toUpperCase()
        .includes(input)
    ) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
  searchBox.addEventListener("keyup", searchAbout);
}