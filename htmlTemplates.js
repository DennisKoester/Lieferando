// Dish Categorys

function donerHTMLTemplate(dishName, ingredients, pricePerAmount) {

    return /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket('${dishName}', ${pricePerAmount})">
        <div class="dish">
            <div class="dish-name">
                <h4>${dishName}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingredients">${ingredients}</div>
                <div class="dish-price">${pricePerAmount.toFixed(2).replace('.', ',')} €</div>
            </div>
            <div class="plus-btn">
                <img src="img/icons8-plus-48.png" alt="Plus Button">
            </div>
        </div>
    </div>`
}


function lahmacunHTMLTemplate(dishName, ingredients, pricePerAmount) {

    return /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket('${dishName}', ${pricePerAmount})">
        <div class="dish">
            <div class="dish-name">
                <h4>${dishName}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingredients">${ingredients}</div>
                <div class="dish-price">${pricePerAmount.toFixed(2).replace('.', ',')} €</div>
            </div>
            <div class="plus-btn">
                <img src="img/icons8-plus-48.png" alt="Plus Button">
            </div>
        </div>
    </div>`
}


function pideHTMLTemplate(dishName, ingredients, pricePerAmount) {

    return /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket('${dishName}', ${pricePerAmount})">
        <div class="dish">
            <div class="dish-name">
                <h4>${dishName}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingredients">${ingredients}</div>
                <div class="dish-price">${pricePerAmount.toFixed(2).replace('.', ',')} €</div>
            </div>
            <div class="plus-btn">
                <img src="img/icons8-plus-48.png" alt="Plus Button">
            </div>
        </div>
    </div>`
}


function burgerHTMLTemplate(dishName, ingredients, pricePerAmount) {

    return /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket('${dishName}', ${pricePerAmount})">
        <div class="dish">
            <div class="dish-name">
                <h4>${dishName}</h4>
                <a href="">Product Info</a>
            </div>
            <div class="ingredients">${ingredients}</div>
            <div class="dish-price">${pricePerAmount.toFixed(2).replace('.', ',')} €</div>
        </div>
        <div class="plus-btn">
            <img src="img/icons8-plus-48.png" alt="Plus Button">
        </div>
    </div>
</div>`
}


function saladHTMLTemplate(dishName, ingredients, pricePerAmount) {

    return /*html*/ `
    <div id="dish-container" class="dish-container" onclick="addToBasket('${dishName}', ${pricePerAmount})">
        <div class="dish">
            <div class="dish-name">
                <h4>${dishName}</h4>
                <a href="">Product Info</a>
            </div>
                <div class="ingredients">${ingredients}</div>
                <div class="dish-price">${pricePerAmount.toFixed(2).replace('.', ',')} €</div>
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
                <div id="checkout-btn" class="checkout-btn">Checkout (${totalSum(subTotal(), deliveryCosts).toFixed(2).replace('.', ',')} €)</div>
            </div>
            `;
}

function basketItemsHTML(dish, price, amount) {
    return /*html*/`
            <div class="dish-basket">
                <div class="dish-amount">${amount}</div>
                <div class="name-price">
                    <span>${dish}</span>
                    <div class="price">${calcSum(price, amount).toFixed(2).replace('.', ',')} €</div>
                </div>
            </div>
            <div class="note-amount">
                    <div class="add-note">Add note</div>
                    <div  class="plus-minus-btns">
                        <div onclick="reduceAmount('${dish}', '${price}')" class="plus-btn btn-gray">
                            <img src="img/icons8-minus-48.png" alt="Minus">
                        </div>
                        <div onclick="addToBasket('${dish}', '${price}')" class="plus-btn btn-gray">
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
                    <div class="min-dilivery">${deliveryCostsMin.toFixed(2).replace('.', ',')} €</div>
                </div>
            </div>
            <div>Sorry, you can't order yet. The Restaurant has set a minimum order amount of ${deliveryCostsMin.toFixed(2).replace('.', ',')} €
                   (excl. delievery costs)</div>

            <div class="basket-price-section">
                <div class="costs">
                    <div>Subtotal</div>
                    <div>${subTotal().toFixed(2).replace('.', ',')} €</div>
                </div>
                <div class="costs">
                    <div>Delivery costs</div>
                    <div id="delivery-costs">${deliveryCosts.toFixed(2).replace('.', ',')} €</div>
                </div>
                <div class="costs" style="font-weight: bold;">
                    <div id="total">Total</div>
                    <div>${totalSum(subTotal(), deliveryCosts).toFixed(2).replace('.', ',')} €</div>
                </div>
            </div>`;
}