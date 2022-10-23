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
        let formattedPrice = price.toFixed(2).replace('.', ',');

        donerDishes.innerHTML += donerHTMLTemplate(i, dishName, ingredients, formattedPrice);
    }
}


function renderLahmacun() {

    for (let i = 0; i < lahmacun.length; i++) {
        let lahmacunDishes = document.getElementById('lahmacun');
        let dishName = lahmacun[i]['name'];
        let ingredients = lahmacun[i]['ingredients'];
        let price = doner[i]['price'];
        let formattedPrice = price.toFixed(2).replace('.', ',');

        lahmacunDishes.innerHTML += lahmacunHTMLTemplate(i, dishName, ingredients, formattedPrice);
    }
}


function renderPide() {

    for (let i = 0; i < pide.length; i++) {

        pideHTMLTemplate(i);
    }
}


function renderSalad() {

    for (let i = 0; i < salad.length; i++) {

        saladHTMLTemplate(i);
    }
}


function renderBurger() {

    for (let i = 0; i < burger.length; i++) {

        burgerHTMLTemplate(i);
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

        basketItems.innerHTML += basketItemsHTML(dish, price, amount);
    }
}


function addToBasket(i) {
    let dishName = document.getElementById(`dishName${i}`).innerHTML;
    let formattedPrice = document.getElementById(`formattedPrice${i}`).innerHTML;
    let index = basket_dishes.indexOf(i);

    if (index == -1) {
        basket_dishes.push(dishName);
        basket_prices.push(formattedPrice);
        basket_amounts.push(1);

        renderFullBasket();
        renderBasketItems();
        renderbasketCosts();

    } else {
        basket_amounts[index]++;
    }
}


function renderbasketCosts() {
    let basketCosts = document.getElementById('basket-costs');
    basketCosts.innerHTML = '';
    basketCosts.innerHTML = basketCostsHTML();
}


// Slide-Bar Active

// function setActive() {
//     let activeLink = document.getElementById('menu-slider').getElementsByTagName('a');
//     for (let i = 0; i < activeLink.length; i++) {
//         if (document.location.href.indexOf(activeLink[i].href) >= 0) {
//             activeLink[i].classList.add("active");
//         }
//     }
// }