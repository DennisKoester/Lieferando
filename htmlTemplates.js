// Dish Categorys

function donerHTMLTemplate(dishName, ingredients, price) {

    return /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket('${dishName}', ${price})">
        <div class="dish">
            <div class="dish-name">
                <h4>${dishName}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingredients">${ingredients}</div>
                <div class="dish-price">${price.toFixed(2).replace('.', ',')} €</div>
            </div>
            <div class="plus-btn">
                <img src="img/icons8-plus-48.png" alt="Plus Button">
            </div>
        </div>
    </div>`
}


function lahmacunHTMLTemplate(dishName, ingredients, price) {

    return /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket('${dishName}', ${price})">
        <div class="dish">
            <div class="dish-name">
                <h4>${dishName}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingredients">${ingredients}</div>
                <div class="dish-price">${price.toFixed(2).replace('.', ',')} €</div>
            </div>
            <div class="plus-btn">
                <img src="img/icons8-plus-48.png" alt="Plus Button">
            </div>
        </div>
    </div>`
}


function pideHTMLTemplate(dishName, ingredients, price) {

    return /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket('${dishName}', ${price})">
        <div class="dish">
            <div class="dish-name">
                <h4>${dishName}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingredients">${ingredients}</div>
                <div class="dish-price">${price.toFixed(2).replace('.', ',')} €</div>
            </div>
            <div class="plus-btn">
                <img src="img/icons8-plus-48.png" alt="Plus Button">
            </div>
        </div>
    </div>`
}


function burgerHTMLTemplate(dishName, ingredients, price) {

    return /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket('${dishName}', ${price})">
        <div class="dish">
            <div class="dish-name">
                <h4>${dishName}</h4>
                <a href="">Product Info</a>
            </div>
            <div class="ingredients">${ingredients}</div>
            <div class="dish-price">${price.toFixed(2).replace('.', ',')} €</div>
        </div>
        <div class="plus-btn">
            <img src="img/icons8-plus-48.png" alt="Plus Button">
        </div>
    </div>
</div>`
}


function saladHTMLTemplate(dishName, ingredients, price) {

    return /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket('${dishName}', ${price})">
        <div class="dish">
            <div class="dish-name">
                <h4>${dishName}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingredients">${ingredients}</div>
                <div class="dish-price">${price.toFixed(2).replace('.', ',')} €</div>
            </div>
            <div class="plus-btn">
                <img src="img/icons8-plus-48.png" alt="Plus Button">
            </div>
        </div>
    </div>`
}


// Basket HTML

function emptyBasketHTML() {
    return /*html*/`
            <div id="empty-basket" class="empty-basket">
                <h2>Basket</h2>
                <img class="basket-logo" src="img/icons8-fast-food-64.png" alt="Logo">
                <h2>Fill Your Food Cart</h2>
                <p>Your basket is empty<p>
            </div>
    `;
}

function fullBasketHTML() {
    return /*html*/`
            <div id="full-basket" class="full-basket">
                <h2>Basket</h2>
                <div id="items-list" class="list-item"></div>
                <div id="basket-costs" class="basket-costs"></div>
                <div class="checkout-btn">Checkout (7,50 €)</div>
            </div>
            `;
}

function basketItemsHTML(dish, price, amount) {
    return /*html*/`
            <div class="dish-basket">
                <div class="dish-amount">${amount}</div>
                <div class="name-price">
                    <span>${dish}</span>
                    <div class="price">${price.toFixed(2).replace('.', ',')} €</div>
                </div>
            </div>
            <div class="note-amount">
                    <div class="add-note">Add note</div>
                    <div class="plus-minus-btns">
                        <div class="plus-btn btn-gray">
                            <img src="img/icons8-minus-48.png" alt="Minus">
                        </div>
                        <div class="plus-btn btn-gray">
                            <img src="img/icons8-plus-48.png" alt="Minus">
                        </div>
                    </div>
            </div>`;
}

function basketCostsHTML() {
    return /*html*/`
            <div class="min-order">
                <div>
                    <div>Amount needed to reach the minimum order value</div>
                    <div class="min-dilivery">15,00 €</div>
                </div>
            </div>
            <div>Sorry, you can't order yet. The Restaurant hast set a minimum order amount of 20,00 €
                   (excl. delievery costs)</div>

            <div class="basket-price-section">
                <div class="costs">
                    <div>Subtotal</div>
                    <div>9.50</div>
                </div>
                <div class="costs">
                    <div>Delivery costs</div>
                    <div id="delivery-costs">9,80 €</div>
                </div>
                <div class="costs" style="font-weight: bold;">
                    <div id="total">Total</div>
                    <div>9,80 €</div>
                </div>
            </div>`;
}