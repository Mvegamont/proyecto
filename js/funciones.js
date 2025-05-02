let carrito = [];

function mostrarPorCategoria(cat) {
  const lista = document.getElementById("product-list");
  lista.innerHTML = "";
  productos[cat].forEach(p => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" class="producto-img" />
      <h3>${p.nombre}</h3>
      <p>Precio: $${p.precio}</p>
      <p>Stock: <span id="stock-${p.id}">${p.stock}</span></p>
      <button onclick="agregarAlCarrito(${p.id}, '${cat}')">Agregar</button>
    `;
    lista.appendChild(div);
  });
}

function agregarAlCarrito(id, categoria) {
  const producto = productos[categoria].find(p => p.id === id);
  if (producto.stock > 0) {
    producto.stock--;
    const itemCarrito = carrito.find(p => p.id === id);
    if (itemCarrito) {
      itemCarrito.cantidad++;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }
    // Guardar en LocalStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
    document.getElementById(`stock-${id}`).textContent = producto.stock;
  } else {
    alert("Producto agotado.");
  }
}


function actualizarCarrito() {
  const lista = document.getElementById("cart-items");
  lista.innerHTML = "";
  let total = 0, count = 0;
  carrito.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} x${p.cantidad} - $${p.precio * p.cantidad}`;
    lista.appendChild(li);
    total += p.precio * p.cantidad;
    count += p.cantidad;
  });
  document.getElementById("cart-total").textContent = total;
  document.getElementById("cart-count").textContent = count;
  // Actualizar el carrito en LocalStorage
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function toggleCart() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  if (carrito.length > 0) {
    window.location.href = "CarroCompras.html";
  } else {
    alert("Tu carrito está vacío.");
  }
}


function checkout() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  alert("¡Gracias por tu compra!");
  carrito = []; // Vaciar el carrito
  localStorage.removeItem('carrito'); // Eliminar carrito del LocalStorage
  actualizarCarrito(); // Actualizar la vista del carrito
  document.getElementById("product-list").innerHTML = ""; // Limpiar la lista de productos
  /*for (let cat in productos) {
    productos[cat].forEach(p => {
      const original = productos[cat].find(prod => prod.id === p.id);
      p.stock = original.stock;
    });
  } 
  actualizarCarrito();
  document.getElementById("product-list").innerHTML = "";*/
}