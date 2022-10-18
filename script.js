
function init() {
    renderAllDishes();
    renderBasket();
    renderDishes()
}


function renderAllDishes() {
    renderDoner();
    // renderLahmacun();
    // renderPide();
    // renderSalad();
    // renderBurger();
}


function renderBasket() {
    basketHTMLTemplate();
}


// TODO Shorten this up

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

function addToBasket() {
    let basket_dish = [];
    let basket_price = [];
    let basket_amount = [];

    let index = basket_dish.indexOf
}


// Dish Section

function renderDishes() {
    let content = document.getElementById('doner');
    content.innerHTML = '';
    let name = doner[i];
    let price = doner[i];
    let formattedPrice = price.toFixed(2).replace('.', ',');

    dishesHTMLTemplate(name, ingredients, formattedPrice)

}

function dishesHTMLTemplate(name, ingredients, formattedPrice) {


    return donerDishes.innerHTML += /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket()">
        <div class="dish">
            <div class="dish-name">
                <h4>${name}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingridents">${ingredients}</div>
                <div class="dish-price">${formattedPrice} €</div>
            </div>
            <div class="plus-btn">
                <img src="img/icons8-plus-48.png" alt="Plus Button">
            </div>
        </div>
    </div>`;


    function donerHTMLTemplate(i) {
        let donerDishes = document.getElementById('doner');
        let dish = doner[i];
        let price = doner[i]['price'];
        let formattedPrice = price.toFixed(2).replace('.', ',');

        return donerDishes.innerHTML += /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket()">
        <div class="dish">
            <div class="dish-name">
                <h4>${dish['name']}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingridents">${dish['ingredients']}</div>
                <div class="dish-price">${formattedPrice} €</div>
            </div>
            <div class="plus-btn">
                <img src="img/icons8-plus-48.png" alt="Plus Button">
            </div>
        </div>
    </div>`;
    }


    function lahmacunHTMLTemplate(i) {
        let lahmacunDishes = document.getElementById('lahmacun');
        let dish = lahmacun[i];
        let price = lahmacun[i]['price'];
        let formattedPrice = price.toFixed(2).replace('.', ',');

        return lahmacunDishes.innerHTML += /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket()">
        <div class="dish">
            <div class="dish-name">
                <h4>${dish['name']}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingridents">${dish['ingredients']}</div>
                <div class="dish-price">${formattedPrice} €</div>
            </div>
            <div class="plus-btn">
                <img src="img/icons8-plus-48.png" alt="Plus Button">
            </div>
        </div>
    </div>`
    }


    function pideHTMLTemplate(i) {
        let pideDishes = document.getElementById('pide');
        let dish = pide[i];
        let price = pide[i]['price'];
        let formattedPrice = price.toFixed(2).replace('.', ',');

        return pideDishes.innerHTML += /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket()">
        <div class="dish">
            <div class="dish-name">
                <h4>${dish['name']}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingridents">${dish['ingredients']}</div>
                <div class="dish-price">${formattedPrice} €</div>
            </div>
            <div class="plus-btn">
                <img src="img/icons8-plus-48.png" alt="Plus Button">
            </div>
        </div>
    </div>`
    }


    function burgerHTMLTemplate(i) {
        let burgerDishes = document.getElementById('burger');
        let dish = burger[i];
        let price = burger[i]['price'];
        let formattedPrice = price.toFixed(2).replace('.', ',');

        return burgerDishes.innerHTML += /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket()">
        <div class="dish">
            <div class="dish-name">
                <h4>${dish['name']}</h4>
                <a href="">Product Info</a>
            </div>
            <div class="ingridents">${dish['ingredients']}</div>
            <div class="dish-price">${formattedPrice} €</div>
        </div>
        <div class="plus-btn">
            <img src="img/icons8-plus-48.png" alt="Plus Button">
        </div>
    </div>
</div>`
    }


    function saladHTMLTemplate(i) {
        let saladDishes = document.getElementById('salad');
        let dish = salad[i];
        let price = salad[i]['price'];
        let formattedPrice = price.toFixed(2).replace('.', ',');

        return saladDishes.innerHTML += /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket()">
        <div class="dish">
            <div class="dish-name">
                <h4>${dish['name']}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingridents">${dish['ingredients']}</div>
                <div class="dish-price">${formattedPrice} €</div>
            </div>
            <div class="plus-btn">
                <img src="img/icons8-plus-48.png" alt="Plus Button">
            </div>
        </div>
    </div>`
    }


    // Basket

    function basketHTMLTemplate() {
        let basketContent = document.getElementById('basket');
        basketContent.innerHTML = '';

        return basketContent.innerHTML += /*html*/ `
    <div id="basket-content" class="basket-content">
        <h2>Shopping Cart</h2>
        <img class="basket-logo" src="img/icons8-fast-food-64.png" alt="Logo">
        <h2>Fill Your Food Cart</h2>
        <p>Add some tasty dishes from the menu and order your food<p>
    </div>
    `
    }
