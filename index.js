

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

submit.addEventListener("submit", function (e) {
    e.preventDefault();
    // call ageCheck
    const birthYear = document.getElementById("birth-year").value;
    age = ageCheck(birthYear);
    document.getElementById("beverages-list").innerHTML = "";
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

orderNow.addEventListener("click", function (e) {
    beveragesListDiv.classList.add('remove');
    orderListDiv.classList.remove('remove');

    // items med class beverages-select ska visas 
    // hitta de items med beverages-select class
    // visa dom på skärmen
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






