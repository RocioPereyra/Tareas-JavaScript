//setInterval
//clearInterval

// setInterval(function () {
//   console.log("Hola");
// }, 3000);

// clearInterval(intervalo)

// let intervalo = null;
// let contador = 0;

// function iniciarContador() {
//   intervalo = setInterval(function (){
//       console.log(contador)
//       contador+=1
//   },1000)
// }

//   function pausarContador() {
//       if (intervalo !== null) {
//           clearInterval(intervalo);
//       }
//   }

//   function reiniciarContador(){
//       pausarContador();
//       contador=0;
//       console.clear();
//       iniciarContador();
//   }

//setTimeout

// setTimeout(function(){

// }, 2000)

function logIn() {
  setTimeout(function () {
    let usuario = document.getElementById("userText").value;
    if (usuario) {
      alert("Usuario logueado");
    } else {
      console.error("El usuario no se ingresó");
    }

    document.getElementById("userText").value = "";
    document.getElementById("userText").focus();
  }, 2000);
}
