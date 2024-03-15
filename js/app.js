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
//condicional: if...else if...else.
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
//https://tincho83.github.io/FullStack_2Javascript/       main
//https://github.com/Tincho83/FullStack_2Javascript
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
let varsaldotemp = 0;
let realizarCompra = false;
let nombreCli = "";
let apellidoCli = "";
let carritoCli = ""


//Declaracion de array
const arrCarrito = [];
const arrMontoPagar = [];
const arrProductos = ["Leche Entera", "Leche Descremada", "Queso Cremoso", "Queso Port Salut", "Queso Rallado", "Crema de Leche", "Dulce de Leche", "Manteca", "Yogurt Entero", "Yogurt Light"];
const arrProdprecios = [887.5, 892.0, 19570, 20900, 2000, 3850, 2500, 3000, 1100, 1260];
const Cliente = ["Cliente3,Producto/s:Precio,Total,NroTicket"]


//Declaracion de constantes
//


console.log("******* Comprobando variables: *******\n");
vartemp = typeof mensaje;
console.log("* variable mensaje: " + mensaje + " [" + vartemp + "]");
vartemp = typeof vartemp;
console.log("* variable vartemp: " + vartemp + " [" + vartemp + "]");
vartemp = typeof vartempd;
console.log("* variable vartempd: " + vartempd + " [" + vartemp + "]");
vartemp = typeof varsaldotemp;
console.log("* variable varsaldotemp: " + varsaldotemp + " [" + varsaldotemp + "]");
vartemp = typeof realizarCompra;
console.log("* constante realizarCompra: " + realizarCompra + " [" + vartemp + "]");
vartemp = typeof nombreCli;
console.log("* variable nombreCli: " + nombreCli + " [" + vartemp + "]");
vartemp = typeof apellidoCli;
console.log("* constante apellidoCli: " + apellidoCli + " [" + vartemp + "]");
vartemp = typeof carritoCli;
console.log("* constante carritoCli: " + carritoCli + " [" + vartemp + "]");
vartemp = typeof arrCarrito;
console.log("* Array arrCarrito: " + arrCarrito + " tamaño: " + arrCarrito.length + " [" + vartemp + "]");
vartemp = typeof arrMontoPagar;
console.log("* Array arrMontoPagar: " + arrMontoPagar + " tamaño: " + arrMontoPagar.length + " [" + vartemp + "]");
vartemp = typeof arrProductos;
console.log("* Array arrProductos: " + arrProductos + " tamaño: " + arrProductos.length + " [" + vartemp + "]");
vartemp = typeof arrProdprecios;
console.log("* Array arrProdprecios: " + arrProdprecios + " tamaño: " + arrProdprecios.length + " [" + vartemp + "]");
vartemp = typeof Cliente;
console.log("* Array arrProdprecios: " + Cliente + " tamaño: " + Cliente.length + " [" + vartemp + "]");
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
  ingresarNombre();
  ingresarApellido();
}

function ingresarNombre() {
  mensaje = "Ingresa tu Nombre:";
  console.log(mensaje);
  nombreCli = String(prompt(mensaje, "Escribe aqui tu Nombre"));
  console.log(nombreCli);
  vartemp = typeof nombreCli;
  console.log("*** variable: nombreCli, Tipo: " + vartemp + ", tamaño: " + nombreCli.length + " contenido: " + nombreCli + "\n");

  if ((nombreCli == null) || (nombreCli == "") || (nombreCli.length == 0)) {
    ingresarDatosdeCliente();
  }
  else {
    nombreCli = String.prototype.toUpperCase.call(nombreCli);
    console.log("*** Actualizado: variable: nombreCli, Tipo: " + vartemp + ", tamaño: " + nombreCli.length + " contenido: " + nombreCli + "\n\n");
  }
}

function ingresarApellido() {
  mensaje = "Ingresa tu Apellido:";
  console.log(mensaje);
  apellidoCli = String(prompt(mensaje, "Escribe aqui tu Apellido"))
  console.log(apellidoCli);
  vartemp = typeof apellidoCli;
  console.log("*** variable: apellidoCli, Tipo: " + vartemp + ", tamaño: " + apellidoCli.length + " contenido: " + apellidoCli + "\n");

  if ((apellidoCli == null) || (apellidoCli == "") || (apellidoCli.length == 0)) {
    ingresarApellido();
  }
  else {
    apellidoCli = String.prototype.toUpperCase.call(apellidoCli);
    console.log("*** Actualizado: variable: apellidoCli, Tipo: " + vartemp + ", tamaño: " + apellidoCli.length + " contenido: " + apellidoCli + "\n\n");
  }
  console.log("\n\n");
  comprobarDatosIngresados();
}

function comprobarDatosIngresados() {
  if ((nombreCli.length == 0) || (nombreCli == 'undefined') || (nombreCli == "") || (nombreCli == null) || (nombreCli == "NULL") || (nombreCli == "ESCRIBE AQUI TU NOMBRE")) {
    mensaje = "Recuerda que debes ingresar un Nombre.\n\n";
    console.log(mensaje);
    alert(mensaje);
    ingresarDatosdeCliente();
  }
  else if ((apellidoCli.length == 0) || (apellidoCli == 'undefined') || (apellidoCli == "") || (apellidoCli == null) || (apellidoCli == "NULL") || (apellidoCli == "ESCRIBE AQUI TU APELLIDO")) {
    mensaje = "Recuerda que debes ingresar un Apellido.\n\n";
    console.log(mensaje);
    alert(mensaje);
    ingresarDatosdeCliente();
  }
  else {
    mensaje = "Bienvenido/a " + nombreCli + " " + apellidoCli + ".\n\n";
    console.log(mensaje);
    alert(mensaje);
  }
}

function realizarCompraProductos() {
  mensaje = "Deseas comprar un producto?";
  console.log(mensaje);
  realizarCompra = confirm(mensaje);
  let tmn = realizarCompra.length;
  vartemp = typeof realizarCompra;
  console.log("*** variable: realizarCompra, Tipo: " + vartemp + ", tamaño: " + tmn + " contenido: " + realizarCompra + "\n\n");

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
      let tmn = realizarCompra.length;
      vartemp = typeof realizarCompra;
      console.log("*** variable: realizarCompra, Tipo: " + vartemp + ", tamaño: " + tmn + " contenido: " + realizarCompra + "\n\n");

      if (realizarCompra == true) {
        do {
          agregarProductosCarrito();
        }
        while (realizarCompra == true)
      }
      else {
        mensaje = "Te vamos a mostrar los productos y sus precios. Te esperamos pronto!";
        console.log(mensaje);
        alert(mensaje);
        listarProductos();
      }
    }
    else {

    }
  }
}

function listarProductos() {
  vartemp = "";
  for (let i = 0; i < arrProductos.length; i++) {
    let temp = String.prototype.toUpperCase.call(arrProductos[i]);
    vartemp = vartemp + temp + ":   $" + arrProdprecios[i] + "\n";
  }

  mensaje = "Estos son nuestros productos para compra Online:\n" + vartemp + "\n\nAcontinuacion podras imprimir el catalogo si lo deseas.\n";
  console.log(mensaje);
  alert(mensaje);
}

function agregarProductosCarrito() {
  carritoCli = "";
  vartemp = "";
  vartempd = 0;

  for (let i = 0; i < arrProductos.length; i++) {
    vartempd = i + 1;
    vartemp = vartemp + vartempd + ". " + arrProductos[i] + ":   $" + arrProdprecios[i] + "\n";
  }

  mensaje = "Estos son nuestros productos para compra Online:\n\nIngrese el nro de Id o Nombre Completo del Producto para comprarlo.\nO escriba el nombre parcial para buscarlo\n !Respete las Mayusculas y Minusculas.\n\n" + vartemp;
  console.log(mensaje);
  carritoCli = String(prompt(mensaje));

  if ((carritoCli.length == 0) || (carritoCli == 'undefined') || (carritoCli == "") || (carritoCli == null) || (carritoCli == "NULL") || (carritoCli == "null")) {
    //if ((carritoCli == "")) {

    console.log("*** variable carritoCli vacia: " + carritoCli);
    mensaje = "Debes ingresar un Id o nombre de Producto de la lista!";
    console.log(mensaje);
    alert(mensaje);
    carritoCli = "";
    let tmn = carritoCli.length;
    let temp = typeof carritoCli;
    console.log("*** variable: carritoCli esta vacia, Tipo: " + temp + ", tamaño: " + tmn + " contenido: " + carritoCli + "\n\n");
  }
  else if ((parseInt(carritoCli) > arrProductos.length)) {
    //varsaldotemp = 0.00;
    console.log("*** variable carritoCli: " + carritoCli);
    mensaje = "Debes ingresar un Id o nombre de Producto de la lista!";
    console.log(mensaje);
    alert(mensaje);
    carritoCli = "";
  }
  else {
    tipoCaracteres(carritoCli);
    //esCaracterEspecial(carritoCli);
    //esNumerico(carritoCli);
    //esAlfabeto(carritoCli);
    guardarProductoCarrito();
  }





  //   if ((carritoCli == "") || (parseInt(carritoCli) < arrProductos.length)) {
  if ((parseInt(carritoCli) <= arrProductos.length)) {
    console.log("dato almacenado en 'carritoCli' es nro y es menor o igual que el tamaño de 'arrProductos'.");
  }
  else if ((parseInt(carritoCli) > arrProductos.length)) {
    console.log("dato almacenado en 'carritoCli' es nro y es mayor que el tamaño de 'arrProductos'.");
  }
  else {

  }



  if ((parseInt(carritoCli) < arrProductos.length + 1)) {
    //console.log("* variable carritoCli: " + carritoCli);


    //mensaje = "Codigo de producto ingresado: " + carritoCli + "\n\nSe agrego a tu carrito el producto: " + arrProductos[carritoCli] + ", Precio: $" + arrProdprecios[carritoCli];
    //console.log(mensaje);
    //alert(mensaje);

    //arrCarrito.push(arrProductos[carritoCli]);
    //arrMontoPagar.push(arrProdprecios[carritoCli]);

    //vartempd = 0.00;
    //for (let i = 0; i < arrCarrito.length; i++) {
    //  vartempd = vartempd + parseFloat(arrMontoPagar[i]);
    //comentario console.log("Sumas a tu carrito + $" + arrMontoPagar[i] + " ***");
    //  }
  }
  else if (carritoCli == "") {
    //   console.log("*** variable carritoCli vacia: " + carritoCli);
    //   mensaje = "Debes ingresar un Id o nombre de Producto de la lista!";
    //   console.log(mensaje);
    //   alert(mensaje);
    //   carritoCli = "";
  }
  else {
    //varsaldotemp = 0.00;
    console.log("* variable carritoCli: " + carritoCli);
    mensaje = "Debes ingresar un Id o nombre de Producto de la lista!";
    console.log(mensaje);
    alert(mensaje);
    carritoCli = "";

  }



  mensaje = "Tienes en tu carrito " + arrCarrito.length + " producto/s.\n\nTotal a pagar: $ " + varsaldotemp + "\n\nDeseas seguir comprando otro producto?";
  //console.log(mensaje);
  //alert(mensaje);

  //mensaje = "Deseas seguir comprando otro producto?";

  console.log(mensaje);
  realizarCompra = confirm(mensaje);
  vartemp = typeof realizarCompra;
  console.log("*** variable realizarCompra: Tipo: " + vartemp + " contenido: " + realizarCompra + "\n\n");
  if (realizarCompra == false) {
    menucarrito();
  }
  else {
    mensaje = "Opciones de Compra de productos";
    console.log(mensaje);
    //alert(mensaje);
  }


}

function obtenerEnteroRandom(int) {
  return Math.floor(Math.random() * int);
}

function guardarProductoCarrito() {
  if (vartemp == "nro") {
    console.log("*** Variable 'carritoCli' tiene almacenado numero: " + carritoCli);
    let temp = carritoCli - 1;
    mensaje = "Id de Producto ingresado: " + carritoCli + "\n\nSe agrego a tu carrito el producto: " + arrProductos[temp] + ", Precio: $" + arrProdprecios[temp];
    console.log(mensaje);
    alert(mensaje);

    arrCarrito.push(arrProductos[temp]);
    arrMontoPagar.push(arrProdprecios[temp]);

    varsaldotemp = 0.00;
    for (let i = 0; i < arrCarrito.length; i++) {
      varsaldotemp = varsaldotemp + parseFloat(arrMontoPagar[i]);
      //console.log("Sumas a tu carrito + $" + arrMontoPagar[i] + " ***");
    }
  }
  else if (vartemp == "txt") {
    console.log("*** Variable 'carritoCli' tiene almacenado texto: " + carritoCli);
    mensaje = "Nombre de Producto ingresado: " + carritoCli + "\n\nSe procedera a buscar todos los productos con ese nombre. ";
    console.log(mensaje);
    alert(mensaje);

    buscarProducto(carritoCli);
  }
  else {

  }
}


function tipoCaracteres(str) {
  let tmn = carritoCli.length;
  vartemp = typeof carritoCli;

  const result = [...str]
    .every(char => (char >= '0' && char <= '9'));

  if (result == true) {
    console.log("*** Variable carritoCli con numeros: {" + result + "}, contenido:{" + carritoCli + "}, tamaño:{" + tmn + "}, tipo:{" + vartemp + "}");
    vartemp = "nro"
    return result;
  }
  else {
    const result = [...str]
      .every(char => (char >= ' ' && char <= '/') && (char >= ':' && char <= '@') && (char >= '[' && char <= '_') && (char >= '{' && char <= '¡'));

    if (result == true) {
      console.log("* Variable carritoCli con simbolos: {" + result + "}, contenido:{" + carritoCli + "}, tamaño:{" + tmn + "}, tipo:{" + vartemp + "}");
      return result;
    }
    else {
      const result = [...str]
        .every(char => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'));
      console.log("*** Variable carritoCli con letras: {" + result + "}, contenido:{" + carritoCli + "}, tamaño:{" + tmn + "}, tipo:{" + vartemp + "}");
      vartemp = "txt"
      return result;
    }


  }


}


function buscarProducto(str) {
  let indexbusqueda = arrProductos.indexOf(str);
  console.log(indexbusqueda);

  if (indexbusqueda == -1) {
    console.log("No se encontro el nombre '" + str + ", procederemos a buscar nombre/s relacionados. Valor: " + indexbusqueda);
    //arrProductos.filter(word=> word.includes(str));
    const busqProd = arrProductos.filter((word) => word.includes(str));
    console.log(busqProd);

    vartemp = "";
    vartempd = 0;
    for (let i = 0; i < busqProd.length; i++) {
      indexbusqueda = arrProductos.indexOf(busqProd[i]);
      console.log("Se encontro: '" + busqProd[i] + "' en el indice: '" + indexbusqueda + "' del array arrProductos.");
      vartempd = indexbusqueda + 1;
      vartemp = vartemp + vartempd + ". " + arrProductos[indexbusqueda] + ":   $" + arrProdprecios[indexbusqueda] + "\n";
    }

    if (busqProd.length > 0) {
      mensaje = "Estos son los productos que encontramos con el texto: " + str + ".\n\nIngrese el nro del 'Id del Producto' (Izquierda).\nO escriba el nombre completo del producto a comprar.\n\n" + vartemp;
      console.log(mensaje);
      carritoCli = String(prompt(mensaje));
      tipoCaracteres(carritoCli);
      guardarProductoCarrito();
    }
    else {
      mensaje = "No se encontro el nombre '" + str + "'";
      console.log(mensaje);
      alert(mensaje);
    }


  }
  else {
    console.log("Se encontro el nombre del producto '" + str + "' con el id: '" + indexbusqueda + "'");
    carritoCli = indexbusqueda.toString();

    console.log("*** Variable 'carritoCli' tiene almacenado numero: " + carritoCli);
    let temp = indexbusqueda + 1;
    mensaje = "Nombre de Producto: " + str + " con el Id de Producto: " + temp + "\n\nSe agrego a tu carrito: " + arrProductos[indexbusqueda] + ", Precio: $" + arrProdprecios[indexbusqueda];
    console.log(mensaje);
    alert(mensaje);

    arrCarrito.push(arrProductos[indexbusqueda]);
    arrMontoPagar.push(arrProdprecios[indexbusqueda]);

    varsaldotemp = 0.00;
    for (let i = 0; i < arrCarrito.length; i++) {
      varsaldotemp = varsaldotemp + parseFloat(arrMontoPagar[i]);
      //console.log("Sumas a tu carrito + $" + arrMontoPagar[i] + " ***");
    }
  }
}


function esNumerico(str) {
  let tmn = carritoCli.lenght;
  const result = [...str]
    .every(char => (char >= '0' && char <= '9'));
  vartemp = typeof carritoCli;
  console.log("* Variable carritoCli con numeros: {" + result + "}, contenido:{" + carritoCli + "}, tamaño:{" + tmn + "}, tipo:{" + vartemp + "}");
  return result;
}

function esAlfabeto(str) {
  const result = [...str]
    .every(char => (char >= 'a' && char <= 'z')
      || (char >= 'A' && char <= 'Z'));
  vartemp = typeof carritoCli;
  console.log("* Variable carritoCli con letras: {" + result + "}, contenido:{" + carritoCli + "}, tamaño:{" + carritoCli.lenght + "}, tipo:{" + vartemp + "}");
  return result;
}

function esCaracterEspecial(str) {
  const result = [...str]
    .every(char => (char >= ' ' && char <= '/')
      && (char >= ':' && char <= '@') && (char >= '[' && char <= '_') && (char >= '{' && char <= '¡'));
  vartemp = typeof carritoCli;
  console.log("* Variable carritoCli con simbolos: {" + result + "}, contenido:{" + carritoCli + "}, tamaño:{" + carritoCli.lenght + "}, tipo:{" + vartemp + "}");
  return result;
}

function eseAlfabeto(str) {
  let tmn = carritoCli.length;
  console.log("carritoCli: " + carritoCli + " tamaño: " + tmn);

  if (tmn == 0) {
    console.log("carritoCli esta vacio." + "carritoCli: " + carritoCli + " tamaño" + tmn);
  }
  else if (tmn > 1) {
    console.log("carritoCli tiene el valor: " + carritoCli);
  }
  else {
    const result = [...str]
      .every(char => (char >= 'a' && char <= 'z')
        || (char >= 'A' && char <= 'Z'));
    console.log(result);
    vartemp = typeof carritoCli;
    console.log("* variable carritoCli: " + carritoCli + " tamaño" + carritoCli.lenght + " [" + vartemp + "]");
    return result;
  }
}


function menucarrito() {
  let menucarropc = "";
  mensaje = "Deseas acceder al menu del carrito?";
  console.log(mensaje);
  let menucarr = confirm(mensaje);
  vartemp = typeof menucarr;
  console.log("* constante menucarr: " + menucarr + " >tipo> " + vartemp);

  if ((menucarr == false) && (carritoCli == false)) {
    alert("Como no has comprado ningun producto se te mostrara los precios.");
    listarProductos();

  }
  else if (menucarr == false) {
    mensaje = "Imprimiremos la factura.";
    console.log(mensaje);
    alert(mensaje);
  }
  else {
    mensaje = "*** Menu de Carrito:\n\n1. (A)gregar producto al carrito\n2. (B)orrar producto del carrito\n3. (M)ostrar productos del carrito\n3a. Mostrar productos del carrito en orden a(s)cendente\n3b. Mostrar productos del carrito en orden de(s)cendente\n4. (I)mprimir Ticket";
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
      case "s":
      case "S":
      case "3a":
        console.log("mostrar asc");
        listarCarritoasc();
        break;
      case "d":
      case "D":
      case "3b":
        console.log("mostrar desc");
        listarCarritodesc();
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
  console.log(" Prod" + arrCarrito.length + " Prec" + arrMontoPagar.length);
  console.log("Borrando item del indice: " + carritoCli + " " + arrCarrito[carritoCli] + arrMontoPagar[carritoCli]);
  arrCarrito.splice(carritoCli, 1);
  arrMontoPagar.splice(carritoCli, 1);
  console.log(" Prod" + arrCarrito.length + " Prec" + arrMontoPagar.length);
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

function listarProductosparaComprar(num1, num2) {
  resultado = num1 + num2;

  mensajeConsola = "Suma: " + resultado;
  depuracionConsola(mensajeConsola)

  return resultado;
}

function listarCarritoasc() {
  vartemp = "";
  const arrtmp = arrCarrito.map((x) => x);
  let tmp = arrtmp.sort();
  console.log(arrProductos);
  console.log(arrCarrito);
  console.log(tmp);

  for (let i = 0; i < arrCarrito.length; i++) {
    for (let o = 0; o < arrProductos.length; o++) {
      //console.log("i=" +i +" o=" +o); 
      if (tmp[i] == arrProductos[o]) {
        console.log("i=" + i + " o=" + o + " Prodct. " + tmp[i] + " : " + arrProductos[o] + " Precio: " + arrProdprecios[o]);
        vartemp = vartemp + tmp[i] + ":   $" + arrProdprecios[o] + "\n";
      }
      else {

      }
    }
  }
  mensaje = "Tu Carrito:\n\n" + vartemp;
  console.log(mensaje);
  alert(mensaje);
  menucarrito();
}

function listarCarritodesc() {
  vartemp = "";
  const arrtmp = arrCarrito.map((x) => x);
  let tmp = arrtmp.reverse();
  console.log(arrProductos);
  console.log(arrCarrito);
  console.log(tmp);

  for (let i = 0; i < arrCarrito.length; i++) {
    for (let o = 0; o < arrProductos.length; o++) {
      //console.log("i=" +i +" o=" +o); 
      if (tmp[i] == arrProductos[o]) {
        console.log("i=" + i + " o=" + o + " Prodct. " + tmp[i] + " : " + arrProductos[o] + " Precio: " + arrProdprecios[o]);
        vartemp = vartemp + tmp[i] + ":   $" + arrProdprecios[o] + "\n";
      }
      else {

      }
    }
  }
  mensaje = "Tu Carrito:\n\n" + vartemp;
  console.log(mensaje);
  alert(mensaje);
  menucarrito();
}

function imprimirTicket() {
  let ticketCliente = "";
  let prodtemp = "";
  let ticketGestion = obtenerEnteroRandom(9999999);

  document.write("<header><h1>PruebaJS</h1><img src='./imgs/js.png' alt='Prueba JS'></header>");
  document.write("<main><h1>Tienda de Productos Lacteos</h1><p></p>");
  document.write("<p></p>");
  document.write("<p>Cliente: " + nombreCli + " " + apellidoCli + "</p>");
  ticketCliente = nombreCli + " " + apellidoCli + ",";
  if (arrCarrito.length > 0) {
    varsaldotemp = 0.00
    document.write("<table border='2'><tr><td>Producto</td><td>Precio</td></tr>");

    for (let i = 0; i < arrCarrito.length; i++) {
      let temp = String.prototype.toUpperCase.call(arrCarrito[i]);
      document.write("<tr><td>" + temp + "</td><td>" + arrMontoPagar[i] + "</td></tr>");
      varsaldotemp = varsaldotemp + arrMontoPagar[i];
      prodtemp = prodtemp + temp + ":" + arrMontoPagar[i] + "/";
    }

    ticketCliente = ticketCliente + prodtemp + "," + varsaldotemp + "," + "Tipo C 0003-" + ticketGestion;

    document.write("<p>Ticket: Tipo C 0003-" + ticketGestion + "</p>");
    document.write("<tr><td>&nbsp;</td><td>&nbsp;</td>");
    document.write("<tr><td>*Total</td><td>" + varsaldotemp + "</td>");
    document.write("</table></main>");

    document.write("<footer><p>Los precios unitarios y totales incluyen IVA.</p></footer>");
    document.write("<h2 border='2'>Gracias por tu compra!</h2><p>Te esperamos nuevamente, Que tengas un buen dia!</p>");
    console.log("Ticket:" + ticketCliente);
  }
  else {
    document.write("<p>Listado de Precios</p>");

    document.write("<table border='2'><tr><td>Producto</td><td>Precio</td></tr>");

    for (let i = 0; i < arrProductos.length; i++) {
      let temp = String.prototype.toUpperCase.call(arrProductos[i]);
      document.write("<tr><td>" + temp + "</td><td>" + arrProdprecios[i] + "</td></tr>");
    }

    document.write("</table></main>");

    document.write("<footer><p>Los precios unitarios y totales incluyen IVA.</p><p>Te esperamos nuevamente. Que tengas un buen dia!</p></footer>");
    console.log("Catalogo de precios para:" + nombreCli + " " + apellidoCli);
  }

}

console.log("********************************")
console.log("*         Fin de Programa      *")
console.log("********************************")


