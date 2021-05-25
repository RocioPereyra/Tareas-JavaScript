let ciudades = [];

function pedirCiudades() {
  let ciudad = "";
  while (ciudad != null) {
    ciudad = prompt("Ingrese una ciudad");
    if (ciudad === "" || ciudad === null) {
      console.error("Ingrese un valor valido");
    } else {
      ciudades.push(ciudad);
      console.log(ciudades);
    }
  }
}
function longitud() {
  alert(`Hay ${ciudades.length} ciudades`);
}
function mostrarItem() {
  document.write(`La primera ciudad es ${ciudades[0]} <br> `);
  document.write(`La tercera ciudad es ${ciudades[2]} <br>`);
  document.write(`La última ciudad es ${ciudades[ciudades.length - 1]}`);
}
function moverParis() {
  for (let i in ciudades) {
    if (
      ciudades[i] === "paris" ||
      ciudades[i] === "Paris" ||
      ciudades[i] === "PARIS"
    ) {
        ciudades.push(ciudades[i]);
        ciudades.splice(i,1)
    }
  }
  console.log(ciudades);
}
