class Product {
  productsList: any = [
    { id: 1, image: 'build/img/elemento-x.webp', name: 'Elemento X', price: 2000, category: 'Acessórios' },
    { id: 2, image: 'build/img/img-01.jpg', name: 'Boneco Macaco Louco', price: 29.9, category: 'Acessórios' },
    { id: 4, image: 'build/img/chaveiro-florzinha.webp', name: 'Chaveiro Florzinha', price: 4.99, category: 'Acessórios' },
    { id: 5, image: 'build/img/chaveiro-lindinha.webp', name: 'Chaveiro Lindinha', price: 4.99, category: 'Acessórios' },
    { id: 6, image: 'build/img/chaveiro-docinho.webp', name: 'Chaveiro Docinho', price: 4.99, category: 'Acessórios' },
    { id: 7, image: 'build/img/psico.webp', name: 'Pegue o Macaco', price: 4.99, category: 'Games' },
    { id: 8, image: 'build/img/psico.webp', name: 'Poderosas Cart', price: 4.99, category: 'Games' },
    { id: 9, image: 'build/img/psico.webp', name: 'Busca Poderosa', price: 4.99, category: 'Games' },
    { id: 10, image: 'build/img/psico.webp', name: 'Busca Poderosa', price: 4.99, category: 'Games' },
    { id: 11, image: 'build/img/psico.webp', name: 'Busca Poderosa', price: 4.99, category: 'Games' }
  ];
  productList(category: string) {
    let divListProducts = document.querySelector('.list-products')
    document.querySelector('.products-title')?.insertAdjacentText('beforeend', category)
    this.productsList.map((produto: any, index: any) => (
      produto.category === category ? divListProducts?.insertAdjacentHTML('beforeend',
        `<div class="product">
    <a href="#${produto.id}" class="product-link">
        <div class="product-image">
            <img src="${produto.image}" alt="${produto.name}" />
          </div>
          <div class="product-thumbs"></div>
          <div class="product-name">${produto.name}</div>
          <div class="product-price">${produto.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div>
          <div class="btn-comprar">
            <button class="btn-success" onclick="addToCart(${produto.id})">Comprar</button>
          </div>
    </a>
  </div>`) : ''
    ))
  }



}
function addToCart(product: any) {
  alert("Produto Adicionado: " + product)
  console.log(product)
}
let p2 = new Product();
p2.productList('Acessórios')
