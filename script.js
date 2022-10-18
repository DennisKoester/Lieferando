
function init() {
    renderAllDishes();
    renderBasket();
}


function renderAllDishes() {
    renderDoner();
    renderLahmacun();
    renderPide();
    renderSalad();
    renderBurger();
}


function renderBasket(){
    basketHTMLTemplate();
}


function renderDoner() {

    for (let i = 0; i < doner.length; i++) {
        // const doner = doner[i];

        // todo Why is doner not working when i remove the [i] from doner down below?
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



function donerHTMLTemplate(i) {
    let donerDishes = document.getElementById('doner');
    let dish = doner[i];
    let price = doner[i]['price'];

    return donerDishes.innerHTML += /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket()">
        <div class="dish">
            <div class="dish-name">
                <h4>${dish['name']}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingridents">${dish['ingredients']}</div>
                <div class="dish-price">${price.toFixed(2).replace('.', ',')} €</div>
            </div>
            <div class="plus-btn">
                <img src="img/icons8-plus-48.png" alt="Plus Button">
            </div>
        </div>
    </div>`
}


function lahmacunHTMLTemplate(i) {
    let lahmacunDishes = document.getElementById('lahmacun');

    return lahmacunDishes.innerHTML += /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket()">
        <div class="dish">
            <div class="dish-name">
                <h4>${lahmacun[i]['name']}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingridents">${lahmacun[i]['ingredients']}</div>
                <div class="dish-price">${lahmacun[i]['price']} €</div>
            </div>
            <div class="plus-btn">
                <img src="img/icons8-plus-48.png" alt="Plus Button">
            </div>
        </div>
    </div>`
}


function pideHTMLTemplate(i) {
    let pideDishes = document.getElementById('pide');

    return pideDishes.innerHTML += /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket()">
        <div class="dish">
            <div class="dish-name">
                <h4>${pide[i]['name']}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingridents">${pide[i]['ingredients']}</div>
                <div class="dish-price">${pide[i]['price']} €</div>
            </div>
            <div class="plus-btn">
                <img src="img/icons8-plus-48.png" alt="Plus Button">
            </div>
        </div>
    </div>`
}


function saladHTMLTemplate(i) {
    let saladDishes = document.getElementById('salad');

    return saladDishes.innerHTML += /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket()">
        <div class="dish">
            <div class="dish-name">
                <h4>${salad[i]['name']}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingridents">${salad[i]['ingredients']}</div>
                <div class="dish-price">${salad[i]['price']} €</div>
            </div>
            <div class="plus-btn">
                <img src="img/icons8-plus-48.png" alt="Plus Button">
            </div>
        </div>
    </div>`
}


function burgerHTMLTemplate(i) {
    let burgerDishes = document.getElementById('burger');

    return burgerDishes.innerHTML += /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket()">
        <div class="dish">
            <div class="dish-name">
                <h4>${burger[i]['name']}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingridents">${burger[i]['ingredients']}</div>
                <div class="dish-price">${burger[i]['price']} €</div>
            </div>
            <div class="plus-btn">
                <img src="img/icons8-plus-48.png" alt="Plus Button">
            </div>
        </div>
    </div>`
}


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
