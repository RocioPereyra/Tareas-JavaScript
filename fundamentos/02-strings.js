let nombre = "Eugenio";
let apellido = "Gonzalez";
let frase = "         Bienvenido a la clase         ";

// Concatenar texto
console.log(nombre, apellido);
console.log(nombre + " " + apellido);

// Template String (también es para concatenar)
console.log(`Mi nombre es ${nombre} ${apellido}`);

// Métodos de los Strings
console.log(nombre.toUpperCase()); //Para mostrar la variable en mayúscula
console.log(nombre.toLowerCase()); //Para mostrar la variable en minúscula
console.log(apellido.length); //Para contar los caracteres
console.log(apellido.charAt(3)); //Para obtener el caracter que está en la posición 3
console.log(apellido.substr(0, 3)); //Para extraer desde el caracter 0 hasta el 3, o sea GON
console.log(frase.trim()); //Elimina todos los espacios de adelante y atrás de la frase
frase = frase.trim()
console.log(nombre.charAt(nombre.lenght -1)); //-1 porque el último caracter es el que está antes del 0
