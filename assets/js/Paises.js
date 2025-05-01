// paises.js
document.addEventListener("DOMContentLoaded", () => {
    const paises = [
      "Afganistán", "Alemania", "Argentina", "Australia", "Bolivia", "Brasil", "Canadá",
      "Chile", "China", "Colombia", "Corea del Sur", "Costa Rica", "Cuba", "Dinamarca",
      "Ecuador", "Egipto", "El Salvador", "España", "Estados Unidos", "Francia", "Guatemala",
      "Honduras", "India", "Italia", "Japón", "México", "Nicaragua", "Noruega", "Panamá",
      "Paraguay", "Perú", "Portugal", "Reino Unido", "República Dominicana", "Rusia",
      "Sudáfrica", "Suecia", "Suiza", "Uruguay", "Venezuela"
    ];
  
    const selectPais = document.getElementById("pais");
    if (!selectPais) return;
  
    paises.forEach(pais => {
      const opcion = document.createElement("option");
      opcion.value = pais;
      opcion.textContent = pais;
      selectPais.appendChild(opcion);
    });
  });