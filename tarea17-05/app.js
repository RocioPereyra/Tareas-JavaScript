//DOS CAMINOS:

// let productos = [];
// let producto= '';
// let interruptor= true;
// while (interruptor===true) {
//     producto = prompt('Ingrese un producto a su carrito de compras');
//     interruptor =confirm('Seguir agregando productos?');
//     productos.push(` ${producto}`);
//     document.write(productos);
// }
let productos = [];
let ul= '';
function dibujarDatos(){
    ul= document.getElementById('lista');  
    for(let i in productos){
        ul.innerHTML+= `<li>${productos[i]}</li>`
    }
 }   
 function agregarProductos(){
     let producto = ""; 
     while (producto != null) {
       producto = prompt("Ingrese un producto");
       if (producto != null) {
         productos.push(producto);
       }
     }
     ul.innerHTML='';
     dibujarDatos();  
 }
 function encontrarProductos(){
     let palabraBuscada=prompt('')
     let buscar=productos.includes(palabraBuscada);
     if(buscar===true){
        for(let i in productos){
            if(productos[i]===palabraBuscada){
                console.log(palabraBuscada);
            }
        }
     }else{
         alert('Ese producto no existe')
     }

 }
 function eliminarProductos(){
     productos.splice(parseInt(prompt('Elegir que posicion eliminar')),1)
     ul.innerHTML='';
     dibujarDatos();

}

