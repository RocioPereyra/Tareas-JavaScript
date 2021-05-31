class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    // document.write(
    //   `${this.nombre}, ${this.precio}, código n° ${this.codigo} <br>`
    // );
  }
}

let producto1 = new Producto("558", "pan lactal", "$180");
let producto2 = new Producto("234", "leche de almendras", "$160");
let producto3 = new Producto("197", "manta polar", "$1200");

let arreglo = [];
arreglo.push(producto1, producto2, producto3);
console.log(arreglo)
for(let i in arreglo){
    document.write(`<br>
    Producto: ${arreglo[i].nombre} <br>
    Precio: ${arreglo[i].precio} <br>
    Codigo: ${arreglo[i].codigo} <br> <br>
    `);

}
