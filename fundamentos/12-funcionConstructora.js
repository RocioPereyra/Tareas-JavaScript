//Funciones constructoras
//Plantilla para crear varios objetos

function Movies(titulo, sinopsis, director, reparto) {
    this.titulo = titulo;
    this.sinopsis = sinopsis;
    this.director = director;
    this.reparto = reparto;
  }
  //Ya no se usa 👇
  Movies.prototype.listar = function () {
    console.log("Título:", this.titulo);
    console.log("Sinopsis:", this.sinopsis);
    console.log("Director:", this.director);
    console.log("==========================");
  };
  
  let jurassic = new Movies(
    "Jurassic Park",
    "Dinosaurios que escapan y atacan personas",
    "Steven Spielberg",
    "Gustavo, Herminia, José, Alberto"
  );
  
  let avengers = new Movies(
    "The Avengers",
    "Heroes que salvan el mundo",
    "Marvel",
    "Steve Roger, Tony Stark, Bruce Banner"
  );