//Callbacks
//Son funciones que se envian como parámetros y se ejecutan despúés de un método.
//Ordenar números de menor a mayor
let numeros = [2, 5, 6, 12, 24];
let numerosOrdenados = numeros.sort(function (a, b) {
  return a - b;
});

//Filter: crea un nuevo arreglo con la condición que yo le doy
//Para que solo muestre los números pares:
let pares = numeros.filter(function (num) {
  return num % 2 === 0;
});

//Find
let alumnos = ["Lucas", "Pablo", "Fabrizio", "Jorge"];
alumnos.find(function (alumno) {
  return alumno === "Lucas";
});


//map 
 let numerosDobles = numeros.map(function(num){
     return num * 2;
 })