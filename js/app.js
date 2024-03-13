//*********************************************************
//Autor: MH
//Version: 20240311.1953
//Descripcion: TP #1 () Desarrollo JS para CoderHouse
//*********************************************************
//app.js
//Incluye:
//Declara variables, constantes y arrays
//Crea una o más funciones JS que generen interacción.
//Agrega los ciclos de iteración y/o condicionales necesarios,para que tu proyecto funcione correctamente.
//Integra el uso de la Consola JS y de los cuadros de diálogo Prompt, Confirm y Alert
//Documento HTML, al menos uno.
//Archivo JS referenciado en el HTML
//No debes integrar todos los condicionales ni todos ciclos de iteración aprendidos.
//Solo aquellos que le aporten valor a la lógica de tu aplicación
//La interacción del simulador se hará íntegramente sobre la Consola JS
//Describe en el documento HTML con uno o dos párrafos, la idea general de tu simulador
//Crea al menos 3 funciones siguiendo el algoritmo básico de todo programa (entradas de datos, procesamiento de datos y mostrar los resultado de salida de los mismos.)
//Realizar llamadas(invocar) a las funciones que utilizaste en tu simulador
//Tu proyecto mutará cuando aprendas más características de JS. Lo que no puedas conseguir ahora, emúlalo de la mejor forma posible con variables, constantes y/o arrays
//Define mensajes claros a mostrar en los cuadros de diálogo. Concatena textos con variables, y realiza saltos
//Entregable1+Apellido.zip
//
//tipos de datos string, number, Float
//metodos array (lenght, push,splice)
//funciones
//bucle: for, switch
//condicional: if
//
//Cambios:
// 12/03/2024: creacion doc HTML, CSS, JS
// 12/03/2024: creacion simulacion tienda de lacteos
// 13/03/2024: correccion de bucles y variables
// 13/03/2024: creacion de funciones
// 13/03/2024: correccion de funciones
// 13/03/2024: correccion de problemas varios, obligacion de ingresar Nombre y Apellido.
// 14/03/2024: creacion de simulacion de impresion de ticket (en pantalla).
// 14/03/2024: habilitacion de registros log para verificar entradas, tipos de datos, cambios, opciones.
//
//
//https://tincho83.github.io/FullStack_1DesarrolloWeb/
//https://tincho83.github.io/FullStack_1DesarrolloWeb/        dev
//https://github.com/Tincho83/FullStack_1DesarrolloWeb
//https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
//*********************************************************
//
// ********************************************************************************************************
// Inicio: Seccion para habilitar/deshabilitar log de Consola con activarDepuracionConsola = true o false
// Variables para funcion de log en Consola
let activarDepuracionConsola = true
let mensajeDepuracionConsola
let mensajeConsola

if (activarDepuracionConsola == true) {
  mensajeDepuracionConsola = "Depuracion Consola Habilitada."
}
else {
  mensajeDepuracionConsola = "Depuracion Consola Deshabilitada."
}

function depuracionConsola(mensajeConsola) {
  if (activarDepuracionConsola == true) {
    console.log(mensajeConsola)
    console.log("")
  }
  else {
  }
}

console.log(mensajeDepuracionConsola)
console.log("\n\n");
// Fin: Seccion para habilitar/deshabilitar log de Consola con activarDepuracionConsola = true o false
// ********************************************************************************************************

//Declaracion de variables
let mensaje = "";
let vartemp = "";
let vartempd = 0.00;
let realizarCompra = false;
let nombreCli = "";
let apellidoCli = "";


//Declaracion de array
const arrCarrito = [];
const arrMontoPagar = [];
const arrProductos = ["Leche Entera", "Leche Descremada", "Queso Cremoso", "Queso Port Salut", "Queso Rallado", "Crema de Leche", "Dulce de Leche", "Manteca", "Yogurt Entero", "Yogurt Light"];
const arrProdprecios = [887.5, 892.0, 19570, 20900, 2000, 3850, 2500, 3000, 1100, 1260];


//Declaracion de constantes
//


console.log("******* Comprobando variables: *******\n");
vartemp = typeof mensaje;
console.log("* variable mensaje: " + mensaje + " [" + vartemp + "]");
vartemp = typeof vartemp;
console.log("* variable vartemp: " + vartemp + " [" + vartemp + "]");
vartemp = typeof vartempd;
console.log("* variable vartempd: " + vartempd + " [" + vartemp + "]");
vartemp = typeof realizarCompra;
console.log("* constante realizarCompra: " + realizarCompra + " [" + vartemp + "]");
vartemp = typeof nombreCli;
console.log("* variable nombreCli: " + nombreCli + " [" + vartemp + "]");
vartemp = typeof apellidoCli;
console.log("* constante apellidoCli: " + apellidoCli + " [" + vartemp + "]");
vartemp = typeof arrCarrito;
console.log("* Array arrCarrito: " + arrCarrito + " tamaño: " + arrCarrito.length + " [" + vartemp + "]");
vartemp = typeof arrMontoPagar;
console.log("* Array arrMontoPagar: " + arrMontoPagar + " tamaño: " + arrMontoPagar.length + " [" + vartemp + "]");
vartemp = typeof arrProductos;
console.log("* Array arrProductos: " + arrProductos + " tamaño: " + arrProductos.length + " [" + vartemp + "]");
vartemp = typeof arrProdprecios;
console.log("* Array arrProdprecios: " + arrProdprecios + " tamaño: " + arrProdprecios.length + " [" + vartemp + "]");
console.log("**************************************\n\n");

// *** Inicio de programa ***


console.log("********************************")
console.log("*      Inicio de Interaccion   *")
console.log("********************************")
console.log("\n\n");


mensaje = "Hola Cliente!. Te voy a solicitar obligatoriamente tu Nombre y Apellido.";
console.log(mensaje);
alert(mensaje);

ingresarDatosdeCliente();

realizarCompraProductos();


imprimirTicket();



// Funciones
function ingresarDatosdeCliente() {

  mensaje = "Ingresa tu Nombre:";
  console.log(mensaje);
  nombreCli = String(prompt(mensaje, "Escribe aqui tu Nombre"));
  console.log(nombreCli);
  vartemp = typeof nombreCli;
  console.log("variable: nombreCli, Tipo: " + vartemp + ", tamaño: " + nombreCli.length);

  if ((nombreCli == null) || (nombreCli == "") || (nombreCli.length == 0)) {
    ingresarDatosdeCliente();
  }
  else {
    nombreCli = String.prototype.toUpperCase.call(nombreCli);

    vartemp = typeof nombreCli;
    console.log(mensaje + " " + nombreCli + " tamaño: " + nombreCli.length + " [" + vartemp + "]");
  }

  mensaje = "Ingresa tu Apellido:";
  console.log(mensaje);
  apellidoCli = String(prompt(mensaje, "Escribe aqui tu Apellido"))
  console.log(apellidoCli);
  vartemp = typeof apellidoCli;
  console.log("variable: apellidoCli, Tipo: " + vartemp + ", tamaño: " + apellidoCli.length);

  if ((apellidoCli == null) || (apellidoCli == "") || (apellidoCli.length == 0)) {
    apellidoCli == ""
  }
  else {
    apellidoCli = String.prototype.toUpperCase.call(apellidoCli);

    vartemp = typeof apellidoCli;
    console.log(mensaje + " " + apellidoCli + " tamaño: " + apellidoCli.length + " [" + vartemp + "]");
  }
  console.log("\n\n");
  comprobarDatosIngresados();
}



function comprobarDatosIngresados() {

  if ((nombreCli.length == 0) || (nombreCli == 'undefined') || (nombreCli == "") || (nombreCli == null) || (nombreCli == "NULL") || (nombreCli == "ESCRIBE AQUI TU NOMBRE")) {
    ingresarDatosdeCliente();
  }
  else if ((apellidoCli.length == 0) || (apellidoCli == 'undefined') || (apellidoCli == "") || (apellidoCli == null) || (apellidoCli == "NULL") || (apellidoCli == "ESCRIBE AQUI TU APELLIDO")) {
    ingresarDatosdeCliente();
  }
  else {
    mensaje = "Bienvenido/a " + nombreCli + " " + apellidoCli;
    console.log(mensaje);
    alert(mensaje);
    console.log("\n\n");
  }

}



function realizarCompraProductos() {
  mensaje = "Deseas Realizar una compra?";
  console.log(mensaje);
  realizarCompra = confirm(mensaje);
  vartemp = typeof realizarCompra;
  console.log("* constante realizarCompra: " + realizarCompra + " [" + vartemp + "]");
  console.log("\n\n");


  if (realizarCompra == true) {
    do {
      agregarProductosCarrito();
    }
    while (realizarCompra == true)
  }
  else {
    if (arrCarrito.length == 0 || arrCarrito === undefined) {
      mensaje = "Tu carrito esta vacio. Deseas comprar algun producto?";
      console.log(mensaje);
      realizarCompra = confirm(mensaje);
      vartemp = typeof realizarCompra;
      console.log("* constante realizarCompra: " + realizarCompra + " [" + vartemp + "]");
      console.log("\n\n");

      if (realizarCompra == true) {
        do {
          agregarProductosCarrito();
        }
        while (realizarCompra == true)
      }
      else {
        mensaje = "Te vamos a mostrar los productos y sus precios.";
        console.log(mensaje);
        alert(mensaje);
        listarProductos();
      }
    }
    else {

    }
  }


}









function agregarProductosCarrito() {
  let carritoCli = "";
  vartemp = "";

  for (let i = 0; i < arrProductos.length; i++) {
    vartemp = vartemp + i + ". " + arrProductos[i] + ":   $" + arrProdprecios[i] + "\n";
  }

  console.log("Estos son nuestros productos para compra Online:\n\nIngrese el numero de la izquierda del producto que deseas comprar?\n\n" + vartemp);
  carritoCli = String(prompt("Estos son nuestros productos para compra Online:\n\nIngrese el numero de la izquierda del producto que deseas comprar?\n\n" + vartemp))

  if ((carritoCli == "") || (parseInt(carritoCli) < arrProductos.length)) {
    vartemp = typeof carritoCli;
    console.log("* variable carritoCli: " + carritoCli + " [" + vartemp + "]");


    mensaje = "Codigo de producto ingresado: " + carritoCli + "\n\nSe agrego a tu carrito el producto: " + arrProductos[carritoCli] + ", Precio: $" + arrProdprecios[carritoCli];
    console.log(mensaje);
    alert(mensaje);

    arrCarrito.push(arrProductos[carritoCli]);
    arrMontoPagar.push(arrProdprecios[carritoCli]);

    vartempd = 0.00;
    for (let i = 0; i < arrCarrito.length; i++) {
      vartempd = vartempd + parseFloat(arrMontoPagar[i]);
      //console.log("Sumas a tu carrito + $" + arrMontoPagar[i] + " ***");
    }
  }
  else {
    vartemp = typeof carritoCli;
    console.log("* variable carritoCli: " + carritoCli + " [" + vartemp + "]");
    mensaje = "Debes ingresar un numero de la lista!";
    console.log(mensaje);
    alert(mensaje);
    carritoCli = "";

  }



  mensaje = "Tienes en tu carrito " + arrCarrito.length + " producto/s.\n\nTotal: $" + vartempd;
  console.log(mensaje);
  alert(mensaje);

  mensaje = "Deseas seguir comprando otro producto?";
  console.log(mensaje);
  realizarCompra = confirm(mensaje);
  vartemp = typeof realizarCompra;
  console.log("* constante realizarCompra: " + realizarCompra + " >tipo> " + vartemp);
  if (realizarCompra == false) {
    menucarrito();
  }
  else { 
    mensaje = "Opciones de Compra de productos";
    console.log(mensaje);
    //alert(mensaje);
  }


}

function menucarrito() {
  let menucarropc = "";
  mensaje = "Deseas acceder al menu del carrito?";
  console.log(mensaje);
  let menucarr = confirm(mensaje);
  vartemp = typeof menucarr;
  console.log("* constante menucarr: " + menucarr + " >tipo> " + vartemp);
  if (menucarr == false) {
  mensaje = "Imprimiremos la factura.";
  console.log(mensaje);
  alert(mensaje);
  }
  else {
    mensaje = "*** Menu de Carrito:\n\n1. (A)gregar producto al carrito\n\n2. (B)orrar producto del carrito\n\n3. (M)ostrar productos del carrito\n\n4. (I)mprimir Ticket";
    console.log(mensaje);
    menucarropc = prompt(mensaje);
    vartemp = typeof menucarropc;
    console.log("* constante menucarropc: " + menucarropc + " >tipo> " + vartemp);
    //*                          BreakPoint1                                */
    switch (menucarropc) {
      case "a":
      case "A":
      case "1":
        console.log("agregar");
        realizarCompraProductos();
        break;
      case "b":
      case "B":
      case "2":
        console.log("borrar");
        borrarProdCarr();
        break;
      case "m":
      case "M":
      case "3":
        console.log("mostrar");
        listarCarrito();
        break;
      case "i":
      case "I":
      case "4":
        console.log("imprimir");
        break;
      default:
        mensaje = "Debe elegir una de las opciones indicadas.";
        console.log(mensaje);
        alert(mensaje);
        menucarrito();
    }
  }

}

function borrarProdCarr() {
  vartemp = "";
  for (let i = 0; i < arrCarrito.length; i++) {
    vartemp = vartemp + i + ". " + arrCarrito[i] + ":   $" + arrMontoPagar[i] + "\n";
  }
  mensaje = "Elije el codigo del item que deseas borrar de tu Carrito:\n\n" + vartemp;
  console.log(mensaje);
  carritoCli = Number(prompt(mensaje));
  vartemp = typeof carritoCli;
  console.log("* constante carritoCli: " + carritoCli + " >tipo> " + vartemp);
  console.log(" Prod" +arrCarrito.length +" Prec" +arrMontoPagar.length);
  console.log("Borrando item del indice: " +carritoCli +" " +arrCarrito[carritoCli] +arrMontoPagar[carritoCli] );
  arrCarrito.splice(carritoCli, 1);
  arrMontoPagar.splice(carritoCli, 1);
  console.log(" Prod" +arrCarrito.length +" Prec" +arrMontoPagar.length);
  menucarrito();

}

function listarCarrito() {
  vartemp = "";
  for (let i = 0; i < arrCarrito.length; i++) {
    vartemp = vartemp + arrCarrito[i] + ":   $" + arrMontoPagar[i] + "\n";
  }
  mensaje = "Tu Carrito:\n\n" + vartemp;
  console.log(mensaje);
  alert(mensaje);
  menucarrito();
}

function listarProductos() {

  vartemp = "";
  for (let i = 0; i < arrProductos.length; i++) {
    vartemp = vartemp + arrProductos[i] + ":   $" + arrProdprecios[i] + "\n";
  }

  mensaje = "Estos son nuestros productos para compra Online:\n" + vartemp;
  console.log(mensaje);
  alert(mensaje);
}


function listarProductosparaComprar(num1, num2) {
  resultado = num1 + num2;

  mensajeConsola = "Suma: " + resultado;
  depuracionConsola(mensajeConsola)

  return resultado;
}

function imprimirTicket() {
  document.write("<header><h1>PruebaJS</h1><img src='/imgs/js.png' alt='Prueba JS'></header>");
  document.write("<main><h1>Tienda de Productos Lacteos</h1><p></p>");
  document.write("<p></p>");
  document.write("<p>Cliente: " +nombreCli +" " +apellidoCli +"</p>");
  if (arrCarrito.length > 0) {
    vartempd = 0.00
    document.write("<table border='2'><tr><td>Producto</td><td>Precio</td></tr>");

    for (let i = 0; i < arrCarrito.length; i++) {
      document.write("<tr><td>" + arrCarrito[i] + "</td><td>" + arrMontoPagar[i] + "</td></tr>");
      vartempd = vartempd + arrMontoPagar[i];
    }
    document.write("<tr><td>&nbsp;</td><td>&nbsp;</td>");
    document.write("<tr><td>*Total</td><td>" + vartempd + "</td>");
    document.write("</table></main>");

    document.write("<footer><p>Los precios unitarios y totales incluyen IVA.</p></footer>");
    document.write("<h2 border='2'>Gracias por tu compra!</h2><p>Te esperamos nuevamente, Que tengas un buen dia!</p>");
  }
  else {
    document.write("<p>Listado de Precios</p>");

    document.write("<table border='2'><tr><td>Producto</td><td>Precio</td></tr>");

    for (let i = 0; i < arrProductos.length; i++) {
      document.write("<tr><td>" + arrProductos[i] + "</td><td>" + arrProdprecios[i] + "</td></tr>");
    }

    document.write("</table></main>");

    document.write("<footer><p>Los precios unitarios y totales incluyen IVA.</p><p>Te esperamos nuevamente. Que tengas un buen dia!</p></footer>");
  }


}

console.log("********************************")
console.log("*         Fin de Programa      *")
console.log("********************************")


