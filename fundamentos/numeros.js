//Redondear un número más bajo
console.log(Math.floor(45.89));

//Redondear número arriba
console.log(Math.round(45.89));

//Obtener el máximo de una lista de números
console.log(`El número máximo es: ${Math.max(56.5, 45, 90, 5)}`);

//Obtener el mínimo de una lista de números
console.log(`El número mínimo es: ${Math.min(56.5, 45, 90, 5)}`);

//Para obtener el entero
let numero = "67.46577";
console.log(numero);
numero = parseInt(numero);
let decimal = "456.45345";
console.log(parseFloat(decimal));

//Elevar a la potencia
let base = numero;
let exponente = 3;
console.log(
  `El número ${base} elevado a la potencia ${exponente} es de ${Math.pow(
    base,
    exponente
  )}`
);

//Calcular raíz cuadrada
console.log(Math.sqrt(64));

//Obtener un número aleatorio
console.log(Math.round(Math.random() * 100) + 1);

//Obtener un número con dos decimales
decimal = parseFloat(decimal);
console.log(Math.round(decimal * 100) / 100);

//toFixed: convierte números en strings
console.log(decimal.toFixed(2)); //Toma 2 decimales
console.log(decimal.toFixed(4)); //Toma 4 decimales
