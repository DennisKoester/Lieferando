function init() {
    renderAllDishes();
    renderEmptyBasket();
}


function renderAllDishes() {
    renderDoner();
    renderLahmacun();
    renderPide();
    renderSalad();
    renderBurger();
}


// TODO Shorten this up + HTML Templates

function renderDoner() {

    for (let i = 0; i < doner.length; i++) {
        let donerDishes = document.getElementById('doner');
        let dishName = doner[i]['name'];
        let ingredients = doner[i]['ingredients'];
        let price = doner[i]['price'];

        donerDishes.innerHTML += donerHTMLTemplate(dishName, ingredients, price);
    }
}


function renderLahmacun() {

    for (let i = 0; i < lahmacun.length; i++) {
        let lahmacunDishes = document.getElementById('lahmacun');
        let dishName = lahmacun[i]['name'];
        let ingredients = lahmacun[i]['ingredients'];
        let price = doner[i]['price'];

        lahmacunDishes.innerHTML += lahmacunHTMLTemplate(dishName, ingredients, price);
    }
}


function renderPide() {

    for (let i = 0; i < pide.length; i++) {
        let pideDishes = document.getElementById('pide');
        let dishName = pide[i]['name'];
        let ingredients = pide[i]['ingredients'];
        let price = pide[i]['price'];

        pideDishes.innerHTML += pideHTMLTemplate(dishName, ingredients, price);

    }
}


function renderBurger() {

    for (let i = 0; i < burger.length; i++) {
        let burgerDishes = document.getElementById('burger');
        let dishName = burger[i]['name'];
        let ingredients = burger[i]['ingredients'];
        let price = burger[i]['price'];

        burgerDishes.innerHTML += burgerHTMLTemplate(dishName, ingredients, price);

    }
}


function renderSalad() {

    for (let i = 0; i < salad.length; i++) {
        let saladDishes = document.getElementById('salad');
        let dishName = salad[i]['name'];
        let ingredients = salad[i]['ingredients'];
        let price = salad[i]['price'];

        saladDishes.innerHTML += saladHTMLTemplate(dishName, ingredients, price);

    }
}

// Basket


let basket_dishes = [];
let basket_prices = [];
let basket_amounts = [];


function renderEmptyBasket() {
    let emptyBasket = document.getElementById('basket');
    emptyBasket.innerHTML = '';
    emptyBasket.innerHTML = emptyBasketHTML();
}


function renderFullBasket() {
    let fullBasket = document.getElementById('basket');
    fullBasket.innerHTML = '';
    fullBasket.innerHTML = fullBasketHTML();
}


function renderBasketItems() {
    let basketItems = document.getElementById('items-list');
    basketItems.innerHTML = '';

    for (let i = 0; i < basket_dishes.length; i++) {
        const dish = basket_dishes[i];
        const price = basket_prices[i];
        const amount = basket_amounts[i];
        const calcPrice = price * amount;
        // const calcPrice = calcPrice(price, amount);

        basketItems.innerHTML += basketItemsHTML(dish, calcPrice, amount);
    }
}


function addToBasket(dishName, price, amount) {

    let index = basket_dishes.indexOf(dishName);

    if (index == -1) {
        basket_dishes.push(dishName);
        basket_prices.push(price);
        basket_amounts.push(1);

        renderFullBasket();
        renderBasketCosts();
        renderBasketItems();

    } else {
        basket_amounts[index]++;
        renderFullBasket();
        renderBasketCosts();
        renderBasketItems();
    }
}

// TODO not working

function calcPrice(price, amount) {
    let result = price * amount;
    return result
}


function renderBasketCosts() {
    let basketCosts = document.getElementById('basket-costs');
    basketCosts.innerHTML = '';
    basketCosts.innerHTML = basketCostsHTML();
}


// function reduceAmount(dishName, price) {
//     if()

// }



// function calcSubTotal(){
//     let subTotal = 
// }


// Slide-Bar Active

// function setActive() {
//     let activeLink = document.getElementById('menu-slider').getElementsByTagName('a');
//     for (let i = 0; i < activeLink.length; i++) {
//         if (document.location.href.indexOf(activeLink[i].href) >= 0) {
//             activeLink[i].classList.add("active");
//         }
//     }
// }