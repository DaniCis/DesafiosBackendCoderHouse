console.log('Cliente conectado')
const socket = io()

socket.on('productosActualizados', function(products) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    products.forEach(function(product) {
      const div = document.createElement('div');
      div.innerHTML = `
        <p>${product.id}</p>
        <span>${product.title}:</span>
        <span>${product.description}</span>
        <p>Precio: $${product.price}</p>
        <p>Stock: ${product.stock}</p>
      `;
      productsContainer.appendChild(div);
    });
});
