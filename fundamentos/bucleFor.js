//For

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//Tarea
//Ingresar la tabla que queremos calcular
//Mostrar por consola la tabla

let tabla = parseInt(prompt("Ingrese el número de la tabla a calcular"));

if (isNaN(tabla)) {
  console.error("Debe enviar un número");
}

for (let i = 1; i <= 10; i++) {
  console.log(`${tabla} x ${i} = ${tabla * i}`);
}
