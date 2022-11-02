let basket_dishes = [];
let basket_prices = [];
let basket_amounts = [];


async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}


async function init() {
    await includeHTML();
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
// Render dish categorys

function renderDoner() {

    for (let i = 0; i < doner.length; i++) {
        let donerDishes = document.getElementById('doner');
        let dishName = doner[i]['name'];
        let ingredients = doner[i]['ingredients'];
        let pricePerAmount = doner[i]['price'];

        donerDishes.innerHTML += donerHTMLTemplate(dishName, ingredients, pricePerAmount);
    }
}


function renderLahmacun() {

    for (let i = 0; i < lahmacun.length; i++) {
        let lahmacunDishes = document.getElementById('lahmacun');
        let dishName = lahmacun[i]['name'];
        let ingredients = lahmacun[i]['ingredients'];
        let pricePerAmount = doner[i]['price'];

        lahmacunDishes.innerHTML += lahmacunHTMLTemplate(dishName, ingredients, pricePerAmount);
    }
}


function renderPide() {

    for (let i = 0; i < pide.length; i++) {
        let pideDishes = document.getElementById('pide');
        let dishName = pide[i]['name'];
        let ingredients = pide[i]['ingredients'];
        let pricePerAmount = pide[i]['price'];

        pideDishes.innerHTML += pideHTMLTemplate(dishName, ingredients, pricePerAmount);

    }
}


function renderBurger() {

    for (let i = 0; i < burger.length; i++) {
        let burgerDishes = document.getElementById('burger');
        let dishName = burger[i]['name'];
        let ingredients = burger[i]['ingredients'];
        let pricePerAmount = burger[i]['price'];

        burgerDishes.innerHTML += burgerHTMLTemplate(dishName, ingredients, pricePerAmount);
    }
}


function renderSalad() {

    for (let i = 0; i < salad.length; i++) {
        let saladDishes = document.getElementById('salad');
        let dishName = salad[i]['name'];
        let ingredients = salad[i]['ingredients'];
        let pricePerAmount = salad[i]['price'];

        saladDishes.innerHTML += saladHTMLTemplate(dishName, ingredients, pricePerAmount);

    }
}

// Basket

function renderEmptyBasket() {
    let emptyBasket = document.getElementById('basket');
    emptyBasket.innerHTML = '';
    emptyBasket.innerHTML = emptyBasketHTML();
}


function renderBasket() {
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

        basketItems.innerHTML += basketItemsHTML(i, dish, price, amount);
    }
}


function renderBasketCosts() {
    let basketCosts = document.getElementById('basket-costs');
    basketCosts.innerHTML = '';
    basketCosts.innerHTML = basketCostsHTML();
}


function addToBasket(dishName, pricePerAmount) {

    let index = basket_dishes.indexOf(dishName);

    if (index == -1) {
        basket_dishes.push(dishName);
        basket_prices.push(pricePerAmount);
        basket_amounts.push(1);

        renderFullBasket();

    } else {
        basket_amounts[index]++;

        renderFullBasket();
    }
}


function reduceAmount(i, amount) {
    if (amount >= 2) {
        basket_amounts[i]--;
    } else {
        basket_dishes.splice(i, 1);
        basket_prices.splice(i, 1);
        basket_amounts.splice(i, 1);
    }
    renderFullBasket();
}


// ! Calculates the sum of dish amount and price
function calcSum(price, amount) {
    let calcPrice = price * amount;
    return calcPrice;
}


//! Calculates the subtotal without the delievery costs
function subTotal() {
    let sum = 0;

    for (let i = 0; i < basket_dishes.length; i++) {
        sum += basket_prices[i] * basket_amounts[i];
    }

    return sum;
}


//! Calculates the total incl. deleviery costs
function totalSum(subTotal, deliveryCosts) {
    let total = subTotal + deliveryCosts;

    return total;
}


function calcDeliveryMinCosts() {
    let calcDeliveryMinCosts = deliveryCostsMin - subTotal();

    return calcDeliveryMinCosts;
}


function renderFullBasket() {

    if (basket_dishes.length >= 1) {
        renderBasket();
        renderBasketItems();
        renderBasketCosts();
        renderCheckout();
        mobileCheckoutButton();

    } else {
        renderEmptyBasket();
        mobileCheckoutButton();
    }
}


function deleteBasket() {

    basket_dishes = [];
    basket_prices = [];
    basket_amounts = [];

    renderEmptyBasket();
    mobileCheckoutButton();
}


function renderCheckout() {
    let checkoutMobile = document.getElementById('checkout-mobile');
    let checkout = document.getElementById('checkout-btn');
    let freedelivery = document.getElementById('delvierCostsMin');
    let sum = subTotal() + deliveryCosts;

    if (sum >= deliveryCostsMin) {
        checkoutMobile.style.backgroundColor = "#FF8000";
        checkoutMobile.style.color = "white";
        checkout.style.backgroundColor = "#FF8000";
        checkout.style.color = "white";
        checkout.style.cursor = "pointer";
        checkout.onclick = () => alert('Test Site');
        freedelivery.classList.add("d-none");
    } else {
        checkoutMobile.style.backgroundColor = "#E5E3E1";
        checkoutMobile.style.color = "gray";
    }
}


function mobileCheckoutButton() {
    let mobileCheckoutBtn = document.getElementById('checkout-mobile');

    mobileCheckoutBtn.innerHTML = '';
    mobileCheckoutBtn.innerHTML = mobileCheckoutButtonHTML();

    if (basket_dishes.length >= 1) {
        mobileCheckoutBtn.classList.remove("d-none");
    } else {
        mobileCheckoutBtn.classList.add("d-none");
    }
}


function openMobileBasket() {
    let mobileBasket = document.getElementById('basket');

    mobileBasket.style.setProperty("display", "block", "important");
}


function closeMobileBasket() {
    let mobileBasket = document.getElementById('basket');

    mobileBasket.style.display = ("none");
}


function giveLike() {
    let like = document.getElementById('like-btn');
    like.classList.toggle("liked");
}
