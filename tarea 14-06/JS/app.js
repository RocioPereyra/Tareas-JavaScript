const heroes = JSON.parse(localStorage.getItem("heroesKey")) || [];

class Heroe {
  constructor(alias, nombre, poder, equipo, imagen) {
    this.alias = alias;
    this.nombre = nombre;
    this.poder = poder;
    this.equipo = equipo;
    this.imagen = imagen;
  }
}
console.log(heroes)
function addHeroe(event){
  event.preventDefault();
  let alias = document.querySelector("#alias");
  let nombre = document.querySelector("#nombre");
  let poder = document.querySelector("#poder");
  let equipo = document.querySelector("#equipo");

  if(!alias.value || !nombre.value || !poder.value || !equipo.value || !imagen.value){
      console.log('Complete todos los campos');
  }else{
    console.log('Campos completados con exito')
    // creamos un New Heroe usando la clase, dandole los datos que obtuvimos por los querySelector
    const heroe = new Heroe(
      alias.value,
      nombre.value,
      poder.value,
      equipo.value,
      imagen.value
    );
    heroes.push(heroe)
    console.log(heroes)
    localStorage.setItem('heroesKey', JSON.stringify(heroes))
    updateH()
  }

}


function updateH() {
  document.querySelector("#alias").value = "";
  document.querySelector("#nombre").value = "";
  document.querySelector("#poder").value = "";
  document.querySelector("#equipo").value = "";
  document.querySelector("#imagen").value = "";
  heroes = JSON.parse(localStorage.getItem("heroesKey"));
  cargarTabla(heroes);
}


function cargarTabla(array) {
  document.querySelector("#cuerpoTabla").innerHTML = "";
  array.forEach(function (elemento, index) {
    let fila = document.createElement("tr");
    fila.classList = "text-center";
    let datos = `
    <td>${elemento.alias}</td>
    <td>${elemento.nombre}</td>
    <td>${elemento.poder}</td>
    <td>${elemento.equipo}</td>
    `;
    fila.innerHTML = datos;

    let cuerpo = document.querySelector("#cuerpoTabla");
    cuerpo.appendChild(fila);
  });
}

cargarTabla(heroes);