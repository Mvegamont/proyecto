// Agregar producto al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar en LocalStorage
    actualizarCarrito();
}

// Eliminar producto del carrito
/*function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar en LocalStorage
    actualizarCarrito();
}*/
function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito = carrito.filter(p => p.id !== id);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    location.reload(); // Recargar para actualizar la vista
  }
  
  

// Función para redirigir al carrito y almacenar los datos en el LocalStorage
function redirigirCarrito() {
    // Guardamos el carrito en LocalStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Redirigir a la página del carrito
    window.location.href = 'CarroCompras.html';
}


// Actualizar el contenido del carrito
function actualizarCarrito() {
    const carritoList = document.getElementById('carrito');
    const totalCarrito = document.getElementById('total-carrito');
    carritoList.innerHTML = '';
    let total = 0;

    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = `${producto.nombre} - $${producto.precio} 
            <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
        carritoList.appendChild(li);
        total += producto.precio;
    });

    totalCarrito.textContent = total;
    actualizarTotalConEnvio(total);
}

// Recuperar el carrito de LocalStorage cuando se carga la página
/*document.addEventListener('DOMContentLoaded', () => {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
    if (carritoGuardado) {
        carrito = carritoGuardado;
        actualizarCarrito();
    }
});*/

document.addEventListener("DOMContentLoaded", function () {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    const contenedor = document.getElementById("carrito");
    let total = 0;
  
    carritoGuardado.forEach(producto => {
      const item = document.createElement("li");
      item.className = "list-group-item d-flex justify-content-between align-items-center";
  
      item.innerHTML = `
  <div class="d-flex align-items-center w-100 justify-content-between">
    <div class="d-flex align-items-center">
      <img src="${producto.imagen}" alt="${producto.nombre}" width="50" height="50" class="me-3 rounded">
      <div>
        <h6 class="mb-0">${producto.nombre}</h6>
        <small>Cantidad: ${producto.cantidad}</small><br>
        <small>Precio unitario: $${producto.precio}</small>
      </div>
    </div>
    <div class="d-flex align-items-center">
      <strong class="me-3">$${producto.precio * producto.cantidad}</strong>
      <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito(${producto.id})">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  </div>
`;

contenedor.appendChild(item);
total += producto.precio * producto.cantidad;
});

// Mostrar total
const totalElemento = document.getElementById("total-carrito");
if (totalElemento) {
totalElemento.textContent = total;
}
});