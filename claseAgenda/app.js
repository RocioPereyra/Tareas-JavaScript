let agenda = JSON.parse(localStorage.getItem("agenda")) || [];
let memo = 10;

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

//Agregar registros a la agenda
function addContact() {
  let nombre = document.querySelector("#nombreText");
  let telefono = document.querySelector("#telefText");

  //Value devuelve el valor del input
  //Si nombre o teléfono no tienen nada
  if (!nombre.value || !telefono.value) {
    alert("Faltan datos");
    //Para que ponga el foco en el input de nombre
    nombre.focus();
  } else {
    let verify = verifyContact(nombre.value);
    if (verify) {
      alert("El contacto ya existe en su agenda");
    } else {
      if (memo > 0) {
        agenda.push(new Contacto(nombre.value.toUpperCase(), telefono.value));
        localStorage.setItem("agenda", JSON.stringify(agenda));
        memo -= 1;
      } else {
        alert("Memoria llena, elimine algunos contactos");
      }
      updateAgenda();
    }
  }
}

function verifyContact(nombre) {
  let verify = agenda.find(function (contacto) {
    return contacto.nombre.toLowerCase() === nombre.toLowerCase();
  });
  if (verify) {
    return true;
  } else {
    return false;
  }
}

function updateAgenda() {
  document.querySelector("#nombreText").value = "";
  document.querySelector("#telefText").value = "";
  document.querySelector("#nombreText").focus();
  agenda = JSON.parse(localStorage.getItem("agenda"));
  cargarTabla(agenda);
}

function cargarTabla(array) {
  document.querySelector("#cuerpoTabla").innerHTML = "";
  array.forEach(function (elemento, index) {
    let fila = document.createElement("tr");
    fila.classList = "text.center";
    let datos = `
    <td>${index}</td>
    <td>${elemento.nombre}</td>
    <td>${elemento.telefono}</td>
    `;
    fila.innerHTML = datos;

    let cuerpo = document.querySelector("#cuerpoTabla");
    cuerpo.appendChild(fila);
  });
}

cargarTabla(agenda);
