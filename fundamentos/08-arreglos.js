//Array o arreglos
//lista

//mutación de un arreglo
//métodos

let alumnos = ["Pablo", "Fabri", "Laura", "Rocío"];

//Para acceder a un elemento dentro del arreglo:
alumnos[2];
//Obtener el último elemento
alumnos[alumnos.length - 1];
//Concatenar todos los elementos en un string
alumnos.join();
//Iterar o recorrer un arreglo
for (let i = 0; i < alumnos.length; i++) {
  console.log(`Hola soy ${alumnos[i]}`);
}
//Agregar elementos
alumnos.push("Jorge");
//Eliminar el último elemento
alumnos.pop();
//Añadir un elemento al principio
alumnos.unshift("Walter");
//Eliminar un elemento del principio
alumnos.shift();
//Encontrar el indice de un elemento
console.log(alumnos.indexOf("Fabri"));
//Encontrar un elemento
console.log(alumnos.includes('Rocío')) //Si el elemento existe nos devuelve true
//Eliminar un elemento mediante su posición
let pos=1
alumnos.splice(pos,1);
//Eliminar varios elementos a partir su posición
let alumnosEliminados= alumnos.splice(0,3);
//Reemplazar valores
alumnos.splice(0, 2, 'Daniel', 'Augusto')
//Concatenar dos array
// let comision = alumnos.concat(alumnas)
//Invertir el orden



let respuesta=['🥚', '🐔'].sort()
