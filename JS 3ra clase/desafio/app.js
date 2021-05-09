//Punto 1
// let pregunta = true;
// let concatenado = "";

// while (pregunta === true) {
//   let respuesta = prompt("Escribe una palabra");
//   pregunta = confirm("Querés seguir agregando strings?");
  
//   if (respuesta!= null){
//     concatenado += respuesta + " ";
//   }
//   if (pregunta === false) {
//     document.write(concatenado);
//   }
// }


let concatenado = [];

let respuesta = prompt("Escribe una palabra");
while (respuesta!= null) {
  
  
    concatenado.push(respuesta);
    respuesta = prompt("Escribe una palabra");
}
    document.write(concatenado.join('-'));
