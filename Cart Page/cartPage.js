let all = document.querySelector("#all");
let total = document.querySelector("#total");

let container = document.createElement("div");
all.appendChild(container);
let getLocalStorageData = localStorage.getItem("arrayLocal");
let allData = JSON.parse(getLocalStorageData);
let onLoad = document.addEventListener(
    "DOMContentLoaded",
    importFromLocalStorage()
);

function importFromLocalStorage() {
    let finalPriceBox = document.createElement("p");
    // finalPriceBox.style.color = "blue";
    total.append(finalPriceBox);
    let orderPrice = 0;
    let finalPrice = 0;
    allData.forEach((allData) => {
        let card = document.createElement("div");
        card.className = "catrContant";
        container.appendChild(card);

        let imgDiv = document.createElement("div");
        imgDiv.className = "img-div";
        card.appendChild(imgDiv);
        let imgForOne = document.createElement("img");
        imgForOne.src = allData.image;
        imgForOne.className = "img";
        imgDiv.appendChild(imgForOne);


        let textDiv = document.createElement("div");
        textDiv.className = "text-Div";
        card.appendChild(textDiv);
        let nameArray = document.createElement("p");
        nameArray.className = "nameProduct";
        nameArray.textContent = allData.name;
        textDiv.appendChild(nameArray);
        let priceForOne = document.createElement("p");
        priceForOne.className = "price";
        priceForOne.textContent = "$" + allData.price;
        textDiv.appendChild(priceForOne);
        let numberOrder = document.createElement("h4");
        numberOrder.textContent = "QTY : " + allData.num;
        numberOrder.className = "numOfOrder";
        textDiv.appendChild(numberOrder);
        let butDiv = document.createElement("div");
        butDiv.className = "but-div";
        card.appendChild(butDiv);
        orderPrice = parseFloat(allData.price) * parseFloat(allData.num);
        finalPrice += parseFloat(orderPrice);
        let button = document.createElement("button");
        button.className = "fa-solid fa-trash-can";
        // ! ************************************************
        button.id = allData.name;
        // ! ************************************************
        butDiv.appendChild(button);
        button.addEventListener("click", displayData);

        function displayData(e) {
            let container = e.target.parentElement.parentElement.parentElement;
            container.removeChild(e.target.parentElement.parentElement);
            removeFromLo(e.target.id);
            removeFrom(e.target.id);
        }
        // ! ************************************************

        function removeFrom(name) {
            let newData = JSON.parse(localStorage.getItem("arrayLocal"));
            newData = newData.filter((item) => item.name !== name);
            localStorage.setItem("arrayLocal", JSON.stringify(newData));

        }

        function removeFromLo(name) {
            let arrayLocal = JSON.parse(localStorage.getItem("arrayLocal"));
            for (let i = 0; i < arrayLocal.length; i++) {
                if (arrayLocal[i].name === name) {
                    // Determine the element in the array
                    finalPrice -=
                        parseFloat(arrayLocal[i].num) * parseFloat(arrayLocal[i].price);
                    arrayLocal.splice(i, 1); // Delete it from array
                    finalPriceBox.textContent = finalPrice;
                }
            }
        }
        // ! ************************************************
    });
    finalPriceBox.textContent = "Total :" + finalPrice;
}


function deleteItems() {
    localStorage.removeItem('arrayLocal');
    location.reload();
}