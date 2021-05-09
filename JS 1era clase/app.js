//Variable: es un espacio de memoria donde guardo datos

var nombre = "Rocío";
let apellido = "Pereyra";

const pi = 3.14;

// Tipos de datos

// String
let cliente = "Sapo cliente";

// Number
let numero1 = 34;
let numero2 = 60.22;
let numero3 = -25;

// Boolean (por lo general se usan para comparar)
let comprar = true;
let comer = false;

// Null
let billetera = null;

// Undefined (no tiene valor)
let caja;

//Array: variable que contiene varios elementos en su interior
let arreglo = ["Rocío", 20, true];

// Object: variable con propiedades, cada propiedad tiene un valor
let persona = {
  nombre: "José",
  apellido: "Mandarino",
  edad: 33,
};

// Operadores

//Aritméticos
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let resto = numero1 % numero2;

// Unitarios
++numero1 //suma el valor de a uno
--numero1 //resta el valor de a uno

//Relacionales
console.log(numero1 == numero2);
console.log(numero1 >= numero2);
console.log(numero1 <= numero2);
console.log(numero1 != numero2);

console.log("Hola mundo");

console.log("El resultado de la suma es " + suma);

// Negación
let verdadero = true;
console.log(!verdadero);

let valor = prompt('decime tu nombreAAAA');