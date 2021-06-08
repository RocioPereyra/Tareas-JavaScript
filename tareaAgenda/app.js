class Contacto {
  constructor(nombre, numero) {
    (this.nombre = nombre), (this.numero = numero);
  }
}

//aniadirContacto(Contacto): Añade un contacto a la agenda, si la agenda no puede almacenar mas contactos indicar por pantalla.

// inicializar nuestro array de objetos vacio
// let????
let agenda = [];

leerDatos();

console.log(agenda);

function añadirContacto() {
  // recibimos los datos
  let nombre = prompt("Ingrese un nombre");
  let numero = parseInt(prompt("Ingrese un numero"));

  // si el usuario pone cancelar en alguna de las opciones
  if (nombre === null || numero === null) {
    //   no hacer nada
    console.log("no hacer nada");
    // de lo contrario
  } else {
    //   creamos el objeto
    let _contacto = new Contacto(nombre, numero);
    // si nuestro array agenda, no tiene nigun contacto
    if (agenda.length === 0) {
      // observamos nuestro objeto
      console.log(_contacto);
      // guardar nuestro objeto en un array de objetos
      agenda.push(_contacto);
      //   observamos nuestro array
      console.log(agenda);
      // guardar nuestro array de objetos en el local storage
      localStorage.setItem("agendaKey", JSON.stringify(agenda));
      return;

      // si nuestro array agenda tiene almacenados contactos
    } else {
      // iteramos en el array agenda para buscar coincidencias de nombres
      for (let i in agenda) {
        // si nuestro objeto.nombre es distinto a nuestro array[posicion de iteracion].nombre
        if (_contacto.nombre === agenda[i].nombre) {
          // Si el nombre es igual a alguno que exista en el array, avisamos por consola
          alert("nombre repetido");
          return;
        }
      }
      // observamos nuestro objeto
      console.log(_contacto);
      // guardar nuestro objeto en un array de objetos
      agenda.push(_contacto);
      // observamos nuestro array
      console.log(agenda);

      // guardar nuestro array de objetos en el local storage
      localStorage.setItem("agendaKey", JSON.stringify(agenda));
    }
  }
}

function leerDatos() {
  // esta funcion se encarga de leer los datos almacenados en localstorage
  if (localStorage.getItem("agendaKey") != null) {
    // obtenemos los datos actuales del local storage y los guardamos en un array temporal
    let _agenda = JSON.parse(localStorage.getItem("agendaKey"));

    // si nuestro arreglo de agenda esta vacio, le damos el valor de los datos del localstorage
    if (agenda.length === 0) {
      agenda = _agenda;
    }
  }
}
let mensaje = "Ingrese un nombre";
function existeContacto(contacto) {
  for (let i in agenda) {
    if (contacto === agenda[i].nombre) {
      alert("Nombre repetido");
      return;
    } else {
      alert("Nombre disponible");
      return;
    }
  }
}
