
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

        donerHTMLTemplate(i);
    }
}


function renderLahmacun() {

    for (let i = 0; i < lahmacun.length; i++) {

        lahmacunHTMLTemplate(i);
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
    emptyBasket.innerHTML = emptyBasketHTML();
}

function renderFullBasket() {
    let fullBasket = document.getElementById('basket');
    fullBasket.innerHTML = fullBasketHTML();
}

function addToBasket(dish, price, amount) {

    basket_dishes.push(dish);
    basket_prices.push(price);
    basket_amounts.push(amount);

    renderFullBasket();
    renderBasketItems();
    renderbasketCosts();

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

function renderbasketCosts() {
    let basketCosts = document.getElementById('basket-costs');
    basketCosts.innerHTML = basketCostsHTML();

}