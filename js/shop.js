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
        name: 'Cappucino',
        image: 'cappucino.png',
        price: 50
    },
    {
        id: 2,
        name: 'Chai Latte',
        image: 'chailatte.png',
        price: 65
    },
    {
        id: 3,
        name: 'Cortado',
        image: 'cortado.png',
        price: 55
    },
    {
        id: 4,
        name: 'Espresso Con Pana',
        image: 'espressoconpana.png',
        price: 75
    },
    {
        id: 5,
        name: 'Espresso',
        image: 'expresso.png',
        price: 30
    },
    {
        id: 6,
        name: 'Macchiato',
        image: 'macchiato.png',
        price: 65
    },
    {
        id: 7,
        name: 'Mocha',
        image: 'mocha.png',
        price: 70
    },
    {
        id: 8,
        name: 'Espresso Tonic',
        image: 'tonic.png',
        price: 65
    },
    {
        id: 9,
        name: 'Iced Latte',
        image: 'icedlatte.png',
        price: 55
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
            <button onclick="addToCard(${key})">Add To Cart</button>`;
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

function showNotification(message) {
    const notification = document.querySelector('.notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
      notification.style.display = 'none';
    }, 3000);
  }
  
  const totalPrice = document.querySelector('.total');
  total.addEventListener('click', () => {
    showNotification('Thank you for your order!');
  });

  const homeButton = document.getElementById('home-button');
    homeButton.addEventListener('click', () => {
  window.location.href = 'home.html';
});

const aboutusButton = document.getElementById('aboutus-button');
aboutusButton.addEventListener('click', () => {
window.location.href = 'AboutUs.html';
});

const contactusButton = document.getElementById('contactus-button');
contactusButton.addEventListener('click', () => {
window.location.href = 'contactus.html';
});
  
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
  })

  sr.reveal('.content', {delay:200, origin:'top'});
  sr.reveal('.content2', {delay:200, origin:'top'});
  sr.reveal('.navbar-toggler-icon', {delay:200, origin:'top'});

  