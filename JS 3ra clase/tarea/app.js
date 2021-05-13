//Punto 1
function ejercicio1() {
  let num1 = parseInt(prompt("Ingrese el primer número"));
  let num2 = parseInt(prompt("Ingrese el segundo número"));

  if (num1 > num2) {
    console.log(`La suma de ambos números es igual a ${num1 + num2}`);
  }
  if (num1 < num2) {
    console.log(`${num1} - ${num2} es igual a ${num1 - num2}`);
  }
  if (num1 === num2) {
    console.log(`Multiplicar estos dos números da: ${num1 * num2}`);
  }
}

// //Punto 2

function ejercicio2() {
  let num1 = prompt("Ingrese el primer número");
  let operacion = prompt("Ingrese la operacion");
  let num2 = prompt("Ingrese el segundo número");
  if (isNaN(num1)) {
    num1 = 0;
  }if (isNaN(num2)) {
    num2 = 0;
  }
  switch (operacion) {
    case "*":
      console.log(
        `La multiplicación de estos números es igual a ${num1 * num2}`
      );
      break;
    case "+":
      console.log(`La suma de estos números es igual a ${num1 + num2}`);
      break;
    case "-":
      console.log(`La resta de ${num1} - ${num2} es igual a ${num1 - num2}`);
      break;
    case "/":
      console.log(`${num1} dividido en ${num2} es igual a  ${num1 / num2}`);
      break;
    default:
      console.error("La operación ingresada no es valida");
      ejercicio2();
      break;
  }
}
// switch (false) {
//   case num1===isNaN:
//     console.error(0)
//     break;

//   default:
//     console.log('Si es un número')
//     break;
// }

// let operacion=prompt('Ingrese la operacion')
