let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'EA SPORTS FC 24',
        image: 'fc24.jpg',
        price: 69.99
    },
    {
        id: 2,
        name: 'EA SPORTS FIFA 23',
        image: 'spid.png',
        price: 59.99
    },
    {
        id: 3,
        name: 'MORTAL KOMBAT 1 2023',
        image: 'mk1.jpg',
        price: 60.99
    },
    {
        id: 4,
        name: "MARVEL'S PIDERMAN 2",
        image: 'mk1.jpg',
        price: 50.99
    },
    {
        id: 5,
        name: 'THE LAST OF US PART 2',
        image: 'tlou.png',
        price: 70.99
    },
    {
        id: 6,
        name: 'GRAND THEFT AUTO 6',
        image: 'gta.png',
        price: 79.99
    },
    {
        id: 7,
        name: 'AFTER US',
        image: 'aft.png',
        price: 49.99
    },
    {
        id: 8,
        name: 'DEAD ISLAND 2',
        image: 'dead.png',
        price: 39.99
    },
    {
        id: 9,
        name: 'GOLLUM',
        image: 'gol.png',
        price: 29.99
    },
    {
        id: 10,
        name: 'AFTER IMAGE',
        image: 'im.png',
        price: 19.99
    },
    {
        id: 11,
        name: 'JEDI',
        image: 'jedi.png',
        price: 44.99
    },
    {
        id: 12,
        name: 'DEAD SPACE',
        image: 'spa.png',
        price: 50.99
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
