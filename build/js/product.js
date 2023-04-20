"use strict";
let productsList = [
    { id: 1, image: 'build/img/elemento-x.webp', name: 'Elemento X', price: 2000, category: 'teste' },
    { id: 2, image: 'build/img/img-01.jpg', name: 'Boneco Macaco Louco', price: 29.9, category: 'teste' },
    { id: 4, image: 'build/img/', name: 'Tiara Florzinha', price: 4.99, category: 'teste' },
    { id: 5, image: 'build/img/', name: 'Tiara Lindinha', price: 4.99, category: 'teste' },
    { id: 6, image: 'build/img/', name: 'Tiara Docinho', price: 4.99, category: 'teste' },
    { id: 7, image: 'build/img/', name: 'Jaleco Professor', price: 4.99, category: 'teste' }
];
let item = document.querySelector('.list-products');
productsList.map((produto) => (item === null || item === void 0 ? void 0 : item.insertAdjacentHTML('beforeend', `<div class="product">
    <a href="#${produto.id}" class="product-link">
        <div class="product-image">
            <img src="${produto.image}" alt="" />
          </div>
          <div class="product-thumbs"></div>
          <div class="product-name">${produto.name}</div>
          <div class="product-price">${produto.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div>
          <div class="btn-comprar">
            <button class="btn-success">Comprar</button>
          </div>
    </a>
  </div>`)));
