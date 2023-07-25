const arr = ["https://imgd.aeplcdn.com/370x208/n/qy7pp0b_1638615.jpg?q=75","https://imgd.aeplcdn.com/370x208/n/0b8pp0b_1638611.jpg?q=75","https://imgd.aeplcdn.com/370x208/n/ob6pp0b_1638619.jpg?q=75"];
const res = document.querySelector('#img');
function blackCol() {

    res.src = arr[0];
}
function redCol() {
    res.src = arr[1];
}

function yellowCol() {
    res.src = arr[2];
}

const black = document.querySelector('#black');
black.addEventListener('click', blackCol);


const red = document.querySelector('#red');
red.addEventListener('click', redCol);

const yellow = document.querySelector('#yellow');
yellow.addEventListener('click', yellowCol);


const btn = document.querySelector('#cart');

function fun() {

    btn.innerText = "Your order is booked";
}

btn.addEventListener('click', fun);