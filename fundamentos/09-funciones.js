//FUNCIONES

//Funciones declarativas
function miFuncion() {
  console.log("Hola Mundo");
}

let num1 = 34;
let num2 = 56;

function sumar(num1, num2) {
  console.log(num1 + num2);
}

function calculadora(num1 = 5, num2 = 10, operacion = "+") {
  if (!num1 || !num2) {
    return "Falta el valor";
  }

  switch (operacion) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Operación inválida";
  }
}
// let resultado= calculadora();

function cubo(num) {
  return Math.pow(num, 3);
}

function doble(num) {
  return num * num;
}

let numeros = [23, 45, 2, 67];
function converCubo(array, funcion) {
  let numerosAlCubo = [];
  //For...of
  for (let n of array) {
    numerosAlCubo.push(cubo(n));
  }
  return numerosAlCubo;
}

//Funciones anónimas
const saludar = function () {
  console.log("Hola pibes");
};

//scope--------------------------------------
let heroe = "Superman";
function saludarHeroe() {
  let heroe = "Batman";
  console.log(`Bienvenido ${heroe}`);
}

