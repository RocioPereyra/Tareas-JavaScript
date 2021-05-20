// Agregar producto al carrito
// Listar los productos del carrito
// Buscar un producto en el carrito
// Filtrar productos según una palabra
// Eliminar producto del carrito

let carrito = ["ZANAHORIA", "PAN", "MERMELADA", "SERVILLETAS"];

function listar() {
  console.log("Productos del carrito 🛒");
  for (let i = 0; i < carrito.length; i++) {
    console.log(`${i + 1} - ${carrito[i]}`);
  }
}

function agregarProducto() {
  let producto = prompt("Ingrese un producto");
  //     if(producto){
  //     carrito.push(producto.toUpperCase())
  //    }

  while (producto) {
    carrito.push(producto.trim().toUpperCase());
    producto = prompt("Ingrese un product");
  }
  listar();
}

function buscarProducto() {
  let producto = prompt("Ingrese el producto a buscar");
  if (producto) {
    let resultado = carrito.includes(producto.trim().toUpperCase());
  }
  if (resultado) {
    console.log(
      `El producto ${producto.trim().toUpperCase()} está en el carrito`
    );
  } else {
    console.error("No se ingreso un producto o canceló el programa");
  }
}

function filtrarProductos() {
  let producto = prompt("Ingrese el producto o palabra");
  if (producto) {
    let productos = carrito.filter(function (produc) {
      return produc.indexOf(producto.trim().toUpperCase()) > -1;
    });
    if (productos.length > 0) {
      return productos;
    } else {
      console.error("No se encontró ningún producto con esa busqueda");
    }
  } else {
    console.error("Campo vacío o cancelado");
  }
}

function eliminarProducto() {
  let pos = prompt("Ingrese el número del producto a eliminar");

  if (pos) {
    pos = parseInt(pos);

    let producto = carrito[pos - 1];

    if (producto !== undefined) {
      let validar = confirm(`Está seguro que quiere eliminar ${producto}?`);
      if (validar) {
        carrito.splice(pos - 1, 1);
        console.log(`Eliminado el producto ${producto}`);
        listar();
      }
    } else {
      console.error("No hay producto con esa posición");
    }
  } else {
    console.error("Ocurrió un error y no es posible realizar la acción");
  }
}

listar();
