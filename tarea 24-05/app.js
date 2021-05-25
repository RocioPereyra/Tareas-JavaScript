
let persona = {
  nombre: "Guillermo",
  edad: "20",
  dni: "43736550",
  domicilio: "av aconquija 3000",
  hijos: "2",
  profesion: "desarrollador web",
};
function saludar() {
    console.log(`Hola, mi nombre es ${persona.nombre}`);
  }

//LISTAR
for (let domicilio in persona) {
  console.log(domicilio);
}

let peliculas = [
  { titulo: "El secreto de Adaline", genero: "Romance/fantasía", año: "2015", sinopsis: "Adaline Bowman (Blake Lively), nacida a comienzos del siglo XX, adquiere a los 29 años la eterna juventud tras un accidente. Tras años de vida solitaria y permanecer con la misma edad durante 8 décadas, conoce a un hombre por el que podría merecer la pena perder la inmortalidad. "},
  { titulo: "Shrek 2", genero: "Comedia", año: "2004", sinopsis: "Shrek, Burro y la Princesa Fiona se enfrentan a toda una divertida serie de nuevas aventuras en las que aparecen personajes clásicos de cuentos de hadas." },
  { titulo: "Harry Potter y la piedra filosofal", genero: "Fantasía/aventura", año: "2001", sinopsis: "Cuando Harry Potter cumple 11 años se entera que es hijo de dos magos y que posee poderes mágicos. En la Escuela de Magia y Brujería de Hogwarts aprende a jugar el deporte de alturas, Quidditch y juega un emocionante juego de ajedrez, en vías a encarar al Mago Oscuro que está empeñado en destruirlo." },
];

for (let i = 0; i < peliculas.length; i++) {
    console.log(`Película: ${peliculas[i].titulo} - ${peliculas[i].genero} - ${peliculas[i].año} - ${peliculas[i].sinopsis}`);
  }
