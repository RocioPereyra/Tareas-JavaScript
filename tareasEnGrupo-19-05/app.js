//Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
//la creación de la tabla debe ser realizada con una función y mostrar solo los resultados
//del 1 al 10 del número elegido por el usuario.

let numero1 = parseInt(
  prompt("Ingrese el número de la tabla que desea calcular")
);

function calcular(numero1) {
  if (numero1) {
    while (numero1 === isNaN) {
      console.error("Debe ingresar un número");
      numero1 = parseInt(
        prompt("Ingrese el número de la tabla que desea calcular")
      );
    }

    for (let i = 1; i <= 10; i++) {
      return(`${numero1} x ${i} = ${numero1 * i}`);
    }
  }
}



