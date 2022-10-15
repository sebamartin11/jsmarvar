// Ecommerce

const productos = [
    {nombre: "tradicionales x 60g", precio: 114.50},
    {nombre: "jamon serrano x 55g", precio: 125},
    {nombre: "americano x 60g", precio: 114.50},
    {nombre: "cheddar x 55g", precio: 125},
    {nombre: "ketchup x 55g", precio: 125},
];

let carrito = []

let seleccion = prompt("Hola, desea ver la lista de productos? (si o no)");

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresa si o no");
    seleccion = prompt("Hola desea seleccionar algun producto si o no");
}

if(seleccion == "si"){
    alert ("A continuacion nuestra lista de productos");
}else if (seleccion == "no"){
    alert("Gracias por su visita, atte Marvar Snacks👋");
}

while (seleccion != "no"){
    let listaProductos = productos.map((producto) => producto.nombre + " " + "$" + producto.precio);
    alert(listaProductos.join(" \n "));
    let producto = prompt("agrega un producto a tu carrito escribiendo nombre y gramaje tal cual aparece en la lista");
    let precio = 0;

    if(producto == "tradicionales x 60g" || producto == "jamon serrano x 55g" || producto == "americano x 60g" || producto == "cheddar x 55g" || producto == "ketchup x 55g"){
        switch(producto){
            case "tradicionales x 60g":
                precio = 114.50;
                break;
            case "jamon serrano x 55g":
                precio = 125;
                break;
            case "americano x 60g":
                precio = 114.50;
                break;
            case "cheddar x 55g":
                precio = 125;
                break;
            case "ketchup x 55g":
                precio = 125;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"));

    carrito.push({producto, unidades, precio});
    console.log(carrito);
    }else{
        alert("Este producto no se encuentra disponible en nuestra distribuidora");
    }

    seleccion = prompt("Desea seguir seleccionando productos? (no para salir)");

    while(seleccion === "no"){
        alert("Gracias por su compra, para ver el total de su compra vaya a la consola, hasta pronto!");
        carrito.forEach((carritoFinal) =>{
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},Total a pagar por productos ${carritoFinal.unidades * carritoFinal.precio}`);
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log(`El total a pagar por su compra es: ${total}`);

// ordenador alfabeticamente ascendente
productos.sort((a,b) => a.nombre.localeCompare(b.nombre));
console.log(productos);
