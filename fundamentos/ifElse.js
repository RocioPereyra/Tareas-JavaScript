//Estructura de control

//If...else: si se cumple la condición entonces realizar la acción, si no se cumple entonces hacer otra cosa.

// if(condición){
//    acción
// }else{
//    otra acción
// }

// let num = 10;

// if (num % 2 === 0) {
//   console.log("El número es par");
// } else {
//   console.warn("El número no es par");
// }

// if (num === 10) {
//   console.log("El número es igual a 10");
// } else if (num > 10) {
//   console.log("El número es mayor que 10");
// } else {
//   console.log("El número es menor que 10");
// }

// let nro = parseInt(prompt("Ingrese un número"));

// if (isNaN(nro)) {
//   console.error("Ingrese un número");
// }

// if (nro === 10) {
//   console.log("El número es igual a 10");
// } else if (nro !== 10) {
//   console.log(`El valor ${nro} es distinto que 10`);
// } else {
//   console.log("El número es menor que 10");
// }

//fiesta
//Solo puede entrar un mayor de edad, o sea >=18
//Si no es mayor de edad entonces debe ir acompañado de un tutor

let edad = 17;
let tutor = true;

if (edad >= 18) {
  console.log("Bienvenido a la joda");
} else if (tutor === true) {
  console.log("Bienvenidos a la joda! No se separe de su tutor");
}else{
    console.log('Salga de aquí, usted no puede disfrutar de la vida')
}

if(edad<18 && tutor===false){
    console.error('Salga de aquí, usted no puede disfrutar de la vida')
}else if(edad>=18 || tutor===true){
    console.log("Bienvenido a la joda");
}