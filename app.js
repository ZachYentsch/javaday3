const iceCream = [{ name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1, id: 1 },
{ name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1, id: 2 },
{ name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2, id: 3 }]

const vessels = [{ name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2, id: 1 },
{ name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4, id: 2 }]

const toppings = [{ name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1, id: 1 },
{ name: 'Choclate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2, id: 2 }]

const cart = { iceCream: [], toppings: [], vessel: {} }

function drawCream() {

    let template = ''
    iceCream.forEach(item => {
        template += `<div class="col-3 p-3 product user-select-none">
        <div class="bg-primary shadow" onclick="addCart('${item.id}')">
        <img class="cream-img"
        src="${item.image}"
        alt="${item.name}">
        <div class="d-flex justify-content-between p-3">
        <p><b>${item.name}</b></p>
        <p>$${item.price}</p>
        </div>
        </div>
        </div>`})

    document.getElementById('iScream').innerHTML = template
}
drawCream()

function drawVess() {
    let template = ''
    vessels.forEach(item => {
        template += `<div class="col-2 p-3 product user-select-none">
        <div class="bg-primary shadow">
        <img class="vess-img"
        src="${item.image}"
        alt="${item.name}">
        <div class="d-flex justify-content-between p-3">
        <p><b>${item.name}</b></p>
        <p>$${item.price}</p>
        </div>
        </div>
        </div>`})
    document.getElementById('vess').innerHTML = template
}

drawVess()

function drawTop() {
    let template = ''
    toppings.forEach(item => {
        template += `<div class="col-2 p-3 product user-select-none">
        <div class="bg-primary shadow">
        <img class="topp-img"
        src="${item.image}"
        alt="${item.name}">
        <div class="d-flex justify-content-between p-3">
        <p><b>${item.name}</b></p>
        <p>$${item.price}</p>
        </div>
        </div>
        </div>`})
    document.getElementById('topp').innerHTML = template
}
drawTop()

function drawCart() {
    let template = ''
    let total = 0
    cart.iceCream.forEach((item) => {
        total += item.price
        template = `<div class="row bg-dark text-light ">
        <div
            class="col-12 p-3 d-inline-flex justify-content-between user-select-none border-primary border-bottome">
            <h6>${item.name}: $${item.price}</h6> <h6>$${total}</h6>
        </div>
    </div>`

    })
    document.getElementById('cart').innerHTML = template
}

function addCart(id) {
    const order = iceCream.find(item => item.id == id)
    cart.iceCream.push(order)
    drawCart()
}
