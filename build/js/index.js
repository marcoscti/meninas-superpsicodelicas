"use strict";
console.log('Scripts');
let rolagem = document.querySelector('.list-products');
let arrows = document.querySelectorAll('.list-products');
console.log(arrows.forEach((item, i) => (item.insertAdjacentHTML('beforeend', `<div class="arrows">
    <button class="arrow-left" onclick="left(${i})" >&#10094;</button>
    <button class="arrow-right" onclick="right(${i})">&#10095;</button>
    </div>`))));
function right(i) {
    arrows[i].scrollBy(150, 0);
}
function left(i) {
    arrows[i].scrollBy(-150, 0);
}
