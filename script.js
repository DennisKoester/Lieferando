
function init() {
    renderAllDishes();

}

function renderAllDishes() {
    renderDoner();
    renderLahmacun();
    /* renderPide();
    renderSalad();
    renderBurger(); */
}

function renderDoner() {

    for (let i = 0; i < doner.length; i++) {
        // const doner = doner[i];

        // todo Why is doner not working when i remove the [i] from doner down below?
        donerHTMLTemplate(i);
    }
}


function renderLahmacun(){

    for (let i = 0; i < lahmacun.length; i++) {
        
        lahmacunHTMLTemplate(i);
    }
}


function donerHTMLTemplate(i){
    let donerDishes = document.getElementById('doner');

    return donerDishes.innerHTML += /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket()">
        <div class="dish">
            <div class="dish-name">
                <h4>${doner[i]['name']}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingridents">${doner[i]['ingredients']}</div>
                <div class="dish-price">${doner[i]['price']} €</div>
            </div>
            <div class="plus-btn">
                <img src="img/icons8-plus-48.png" alt="Plus Button">
            </div>
        </div>
    </div>`


}function lahmacunHTMLTemplate(i){
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




function addToBasket() {

}













// ! Fixed Basket Cart on scroll down

window.onscroll = function () { myFunction() };

var basket = document.getElementById("basket-content");
var sticky = basket.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        basket.classList.add("sticky");
    } else {
        basket.classList.remove("sticky");
    }
}