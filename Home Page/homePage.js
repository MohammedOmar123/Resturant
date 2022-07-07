let root = document.querySelector(".root");
let mealContainer = document.createElement("div");
let mealTitle = document.createElement("p");
let mContainer = document.createElement("div");

// hh
let mealBtn = document.querySelector(".meal")
let drinkBtn = document.querySelector(".drink")
let dessertBtn = document.querySelector(".dessert")
mealBtn.addEventListener("click", openMealCategory);
drinkBtn.addEventListener("click", openDrinksCategory);
dessertBtn.addEventListener("click", openDessertsCategory);
// console.log(mealBtn);
mealContainer.appendChild(mealTitle);
root.appendChild(mealContainer);
 mealContainer.classList.add("categories-list");
mealTitle.textContent = "Meals";
mealTitle.classList.add("titles");
mContainer.classList.add("card-container");
mealContainer.appendChild(mContainer);
let counter = 0;
let prices = [
  20, 18, 17, 15, 27, 22, 12, 11, 30, 24, 25, 19, 16, 21, 14, 10, 25,
]; // for set prices
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
        let mealImage = document.createElement("img"); //create image for each card
        mealImage.src = meal.strMealThumb;
        mealImage.draggable = false;
        mealImage.classList.add("img");
        card.appendChild(mealImage); // append image to the card
        let mealName = document.createElement("h4");
        mealName.textContent = meal.strMeal;
        mealName.classList.add("name");
        card.appendChild(mealName);
        let dollarSign = document.createElement("p");
        dollarSign.textContent = "$";
        dollarSign.className = "dollar";
        dollarSign.style.display = "inline";
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
        mContainer.appendChild(card);
        counter++;
      }
    });

    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let drinkContainer = document.createElement("div");
        root.appendChild(drinkContainer);
        let drinkTitle = document.createElement("p");
        drinkTitle.textContent = "Drinks";
       drinkContainer.classList.add("categories-list");
        drinkContainer.appendChild(drinkTitle);
        drinkTitle.classList.add("titles");
        let dContainer = document.createElement("div");
        dContainer.classList.add("card-container");
        drinkContainer.appendChild(dContainer);
        let count = 0;
        let drinksPrices = [7, 8, 10.9, 15, 5, 11, 12, 13, 4, 3, 9, 13, 14, 6, 5.9, 10, 6]; // for set prices
        let drinks = data.drinks;
        drinks.forEach((drink) => {
          if (count == drinksPrices.length) {
            return;
          } else {
            let card = document.createElement("div");
            card.classList.add("card");
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
            dollarSign.className = "dollar"
            dollarSign.style.display = "inline";
            card.appendChild(dollarSign);

            let drinkPrice = document.createElement("p");
            drinkPrice.textContent = prices[count];
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

            dContainer.appendChild(card);
            count++;
          }
        });
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            let dessertContainer = document.createElement("div");
            root.appendChild(dessertContainer);
            let dessertTitle = document.createElement("p");
            dessertTitle.textContent = "Dessert";
            dessertContainer.classList.add("categories-list");
            dessertContainer.appendChild(dessertTitle);
            dessertTitle.classList.add("titles");
            let dessertContainerCard = document.createElement("div");
            dessertContainerCard.classList.add("card-container");
            dessertContainer.appendChild(dessertContainerCard);
            let count = 0;
            let dessertPrices = [
              7, 8, 10.9, 15, 5, 11, 12, 13, 4, 3, 9, 13, 14, 6, 5.9, 10, 12,
            ]; // for set prices
            let desserts = data.meals;
            desserts.forEach((dessert) => {
              if (count == dessertPrices.length) {
                return;
              } else {
                let card = document.createElement("div");
                card.classList.add("card");
                let dessertImage = document.createElement("img");
                dessertImage.src = dessert.strMealThumb;
                dessertImage.classList.add("img");
                card.appendChild(dessertImage);
                let dessertName = document.createElement("h4");
                dessertName.textContent = dessert.strMeal;
                dessertName.classList.add("name");
                card.appendChild(dessertName);
                let dollarSign = document.createElement("p");
                dollarSign.textContent = "$";
                dollarSign.className = "dollar";
                dollarSign.style.display = "inline";
                card.appendChild(dollarSign);
                let dessertPrice = document.createElement("p");
                dessertPrice.textContent = prices[count];
                dessertPrice.classList.add("price");
                dessertPrice.style.display = "inline";
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

                dessertContainerCard.appendChild(card);
                count++;
              }
            });
          });
      });
  });
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
        arrayLocal[i].num = ++arrayLocal[i].num; // if the same element is really exist in array
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
function openDrinksCategory() {
    localStorage.setItem("page", "drinks");
    window.location = "../Categories Page/categoriesPage.html";
  }
  
  function openMealCategory() {
    localStorage.setItem("page", "meal");
    window.location = "../Categories Page/categoriesPage.html";
  }
  function openDessertsCategory(){
    localStorage.setItem("page", "desserts");
    window.location = "../Categories Page/categoriesPage.html";
  }