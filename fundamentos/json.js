//Métodos para convertir a texto un objeto

// let mensaje={
//     nombre: 'Nombre del remitente',
//     correo: 'Correo del remitente',
//     asunto: 'Asunto',
//     parrafo: 'Este es mi documento con una estructura muy sencilla',
// }
// //JSON stringify: convierte a texto un obj.
// let enTexto = JSON.stringify(mensaje);
// console.log(enTexto);

//JSON parse: convierte una cadena de texto JSON a su formato original
// let aObjeto = JSON.parse(enTexto);
// console.log(aObjeto);

let userJSON = [];
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

class Usuario {
  constructor(name, username, email, password) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

function addUser(name, username, email, password) {
  usuarios.push(new Usuario(name, username, email, password));
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

//Para listar
function listUsers() {
  usuarios.forEach(function (usuario) {
    console.log(`Nombre: ${usuario.name} `);
    console.log(`Usuario: ${usuario.username} `);
    console.log(`Email: ${usuario.email} `);
    console.log(`======================= `);
  });
}

function listUser(username) {
  let user = usuarios.find(function (usuario) {
    return usuario.username === username;
  });
  if (user) {
    console.log(`Nombre: ${usuario.name} `);
    console.log(`Usuario: ${usuario.username} `);
    console.log(`Email: ${usuario.email} `);
    console.log(`======================= `);
  } else {
    console.warn("El usuario no existe");
  }
}

function delUser(username) {
  let idUser = usuarios.findIndex(function (usuario) {
    return usuario.username === username;
  });
  if (idUser > -1) {
    let validar = confirm("Está seguro que quiere eliminar el usuario?");
    if (validar) {
      usuarios.splice(idUser, 1);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      console.log("El usuario ha sido borrado");
    }
  } else {
    console.warn("El usuario no existe");
  }
}
//Para borrar (creo)
localStorage.setItem("usuarios", "");
