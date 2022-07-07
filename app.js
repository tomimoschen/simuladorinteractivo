
let precio;
do {
    opcion = Number(prompt('Ingrese una opción:\n\n1 - Pagar en cuotas\n2 - Pagar en un solo pago\n3 - Salir'));
    let cantidadCuotas;
    switch (opcion) {
        case 1:
            precio = Number(prompt('Ingrese el precio del producto'));
            cantidadCuotas = Number(prompt('Ingrese la cantidad de cuotas en las que abonará:\n\n3 cuotas(5,39%)\n6 cuotas(10,82%)\n12 cuotas(22,22%)'));
        if (cantidadCuotas === 3) {
                console.log("Vas a pagar $" + precio * 1.539 + " en 3 cuotas de $" + precio * 1.539 / 3 + " muchas gracias!");
            } else if (cantidadCuotas === 6){
                console.log("Vas a pagar $" + precio * 1.1082 + " en 6 cuotas de $" + precio * 1.1082 / 6 + " muchas gracias!");
            } else if (cantidadCuotas === 12) {
                console.log("Vas a pagar $" + precio * 1.2222 + " en 12 cuotas de $" + precio * 1.22 / 12 + " muchas gracias!");
            } else {
                alert("Opción invalida, solo puede abonar en 3, 6 o 12 cuotas");
            }
            break;
        case 2:
            precio = Number(prompt('Ingrese el precio del producto'));
            console.log(`Pagó $${precio} en un solo pago. Muchas gracias!`);
            break;
        case 3: 
            alert("Hasta luego!");
            break;
        default:
            alert("Opción incorrecta")
            break;
    }
} while (opcion !== 3);