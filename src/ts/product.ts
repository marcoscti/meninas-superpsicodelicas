class Product {
  productsList: any = [
    { id: 1, image: 'build/img/elemento-x.webp', name: 'Elemento X', price: 2000, category: 'Acessórios' },
    { id: 2, image: 'build/img/img-01.jpg', name: 'Boneco Macaco Louco', price: 29.9, category: 'Acessórios' },
    { id: 4, image: 'build/img/psico.webp', name: 'Tiara Florzinha', price: 4.99, category: 'Acessórios' },
    { id: 5, image: 'build/img/psico.webp', name: 'Tiara Lindinha', price: 4.99, category: 'Acessórios' },
    { id: 6, image: 'build/img/psico.webp', name: 'Tiara Docinho', price: 4.99, category: 'Acessórios' },
    { id: 7, image: 'build/img/psico.webp', name: 'Pegue o Macaco', price: 4.99, category: 'Games' },
    { id: 8, image: 'build/img/psico.webp', name: 'Poderosas Cart', price: 4.99, category: 'Games' },
    { id: 9, image: 'build/img/psico.webp', name: 'Busca Poderosa', price: 4.99, category: 'Games' },
    { id: 10, image: 'build/img/psico.webp', name: 'Busca Poderosa', price: 4.99, category: 'Games' },
    { id: 11, image: 'build/img/psico.webp', name: 'Busca Poderosa', price: 4.99, category: 'Games' }
  ];
  productList(category: string) {
    let item = document.querySelectorAll('.list-products')
    // let titleCategory = document.querySelectorAll('.products-title')?.insertAdjacentText('beforeend', category)
    item.forEach((divlist, i) => (

      this.productsList.map((produto: any) => (
        produto.category === category ? item[i]?.insertAdjacentHTML('beforeend',
          `<div class="product">
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
  </div>`)
          : '<p>Produtos não encontrados para essa categoria</p>'
      ))
    ))

  }
}

let p = new Product();
p.productList('Acessórios')