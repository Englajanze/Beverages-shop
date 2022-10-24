

// dela upp alkohol i 18gräns och 21 gräns
const beverages21 = ["Whiskey", "Tequila", "Rum"];
const beverages18 = ["Beer", "Wine", "Cider"];
const beveragesUnder18 = ["Fanta", "Coca Cola", "Sprite"];


function ageCheck(birthYear) {
    const today = new Date();
    const year = today.getFullYear();
    const age = year - birthYear;
    return age;
}

const submit = document.getElementById("form");
const beveragesListDiv = document.getElementById("beverages-list-div");
const birthYearDiv = document.getElementById("birth-year-div");

submit.addEventListener("submit", function (event) {
    event.preventDefault();
    // call ageCheck
    const birthYear = document.getElementById("birth-year").value;
    const age = ageCheck(birthYear);
    ageBevrageList(age);
    beveragesClicked();

    //ta bort .remove class så beverages-list och order-button visas
    beveragesListDiv.classList.remove('remove');
    // add class .remove till enter birth year och input så det försvinner
    birthYearDiv.classList.add('remove');
    //från sidan när sumbit klickas. 
});

const orderNow = document.getElementById("order-button");
const orderListDiv = document.getElementById("order-list-div")

orderNow.addEventListener("click", function (event) {
    beveragesListDiv.classList.add('remove');
    orderListDiv.classList.remove('remove');

    // orderArray ska visas på skärmen när orderNow klickas.
    orderArray.forEach((element) => {
        let list = document.createElement("li");
        list.innerText = element;
        // lägger till css class till listan. 
        list.classList.add("order-list-li");
      document.getElementById("order-list").appendChild(list);
    })
});

function ageBevrageList(age) {
    createBevragesList(beverages21, age);
    createBevragesList(beverages18, age);
    createBevragesList(beveragesUnder18, age);
}

function createBevragesList (array, age) {
    array.forEach((element) => {
        let list = document.createElement("li");
        list.innerText = element;
        // lägger till css class till listan. 
        list.classList.add("beverages");
      document.getElementById("beverages-list").appendChild(list);
      if (age < 18 && array != beveragesUnder18) {
        list.classList.add("not-old-enough")
      } else if (age >= 18 && age < 21 && array == beverages21) {
        list.classList.add("not-old-enough")
      }
    });
}

let orderArray = [];


function beveragesClicked() {
    const beveragesBox = document.querySelectorAll('.beverages');

    beveragesBox.forEach(item => {
        item.addEventListener('click', event => {

            if (event.target.classList.contains("beverages-select")) {
                event.target.classList.remove('beverages-select');
                // ta bort items ur array
                // använd indexof, finna index av elementet vi ska ta bort
                const arrayIndex = orderArray.indexOf(item.innerHTML);
                
                // använd splice, använda index för att ta bort ur array
                const removed = orderArray.splice(arrayIndex, 1);
            } else {
                if (event.target.classList.contains("not-old-enough")) {
                    return
                }
                event.target.classList.add('beverages-select');
                orderArray.push(item.innerHTML);
                
            }
            //handle click
        })
    });
    // om item har class not-old-enough ska class beverages-select inte finnas 
}






