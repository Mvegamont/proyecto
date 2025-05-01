// Muestra el selector de bancos solo si el usuario selecciona PSE
const pagoPSE = document.getElementById('pagoPSE');
const pseBancos = document.getElementById('pse-bancos');

pagoPSE.addEventListener('change', () => {
    if (pagoPSE.checked) {
        pseBancos.style.display = 'block';
    } else {
        pseBancos.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const transporte = document.getElementById("transporte");
    const totalConEnvio = document.getElementById("total-con-envio");
  
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let total = carrito.reduce((acc, p) => acc + (p.precio * p.cantidad), 0);
  
    // Mostrar total inicial sin envío
    document.getElementById("total-carrito").textContent = total;
  
    transporte.addEventListener("change", () => {
      const envio = parseFloat(transporte.value);
      totalConEnvio.textContent = (total + envio).toFixed(2);
    });
  });
  