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


mensaje = "Hola Cliente!. Te voy a solicitar tu Nombre y Apellido.";
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

  if ((nombreCli.length == 0) || (nombreCli == 'undefined') || (nombreCli == "") || (nombreCli == null) || (nombreCli == "NULL")|| (nombreCli == "ESCRIBE AQUI TU NOMBRE")) {
    ingresarDatosdeCliente();
  }
  else if ((apellidoCli.length == 0) || (apellidoCli == 'undefined') || (apellidoCli == "") || (apellidoCli == null) || (apellidoCli == "NULL")|| (apellidoCli == "ESCRIBE AQUI TU APELLIDO")) {
    ingresarDatosdeCliente();
  }
  else {
    mensaje = "Te doy la bienvenida " + nombreCli + " " + apellidoCli;
    console.log(mensaje);
    alert(mensaje);
    console.log("\n\n");
  }

}



function realizarCompraProductos()
{
  mensaje = "Deseas Realizar una compra?";
  console.log(mensaje);
  realizarCompra = confirm(mensaje);
  vartemp = typeof realizarCompra;
  console.log("* constante realizarCompra: " + realizarCompra + " [" + vartemp + "]");
  console.log("\n\n");

  //*                          BreakPoint1                                */
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
      mensaje = "Tienes el carrito vacio. Te vamos a mostrar los productos y sus precios.";
      console.log(mensaje);
      realizarCompra = confirm(mensaje);
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

  if ((carritoCli == "") || (parseFloat(carritoCli) < carritoCli.length)) {
    vartemp = typeof carritoCli;
    console.log("* variable carritoCli: " + carritoCli + " [" + vartemp + "]");


    mensaje = "Codigo de producto ingresado: " + carritoCli + "\n\nSe agrego a tu carrito: Producto: " + arrProductos[carritoCli] + ", Precio: $" + arrProdprecios[carritoCli];
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
    alert("Debes ingresar un numero de la lista!");
    agregarProductosCarrito();
  }



  mensaje = "Tienes en tu carrito " + arrCarrito.length + " producto/s.\n\nTotal: $" + vartempd;
  console.log(mensaje);
  alert(mensaje);

  mensaje = "Deseas seguir comprando otro producto?";
  console.log(mensaje);
  realizarCompra = confirm(mensaje);
  vartemp = typeof realizarCompra;
  console.log("* constante realizarCompra: " + realizarCompra + " >tipo> " + vartemp);

}

function listarProductosCarrito() {
  
  vartemp = "";
  for (let i = 0; i < arrProductos.length; i++) {
    vartemp = vartemp + i + ". " + arrProductos[i] + ":   $" + arrProdprecios[i] + "\n";
  }

  console.log("Estos son nuestros productos para compra Online:\n\nIngrese el numero de la izquierda del producto que deseas comprar?\n\n" + vartemp);
  let carritoCli = String(prompt("Estos son nuestros productos para compra Online:\n\nIngrese el numero de la izquierda del producto que deseas comprar?\n\n" + vartemp))

}

function mostrarTicket() {
  document.write("Hello World!");
  document.write("<h2>Hello World!</h2><p>Have a nice day!</p>");
}

function listarProductosparaComprar(num1, num2) {
  resultado = num1 + num2;

  mensajeConsola = "Suma: " + resultado;
  depuracionConsola(mensajeConsola)

  return resultado;
}





function imprimirTicket()
{
  vartempd = 0.00
  document.write("<header><h1>PruebaJS</h1><img src='../imgs/js.png' alt='Prueba JS'></header>");
  document.write("<main><label>Tienda de Productos Lacteos</label><p></p><br><p>Los precios unitarios y totales incluyen IVA.</p>");
  document.write("<table border='2'><tr><td>Producto</td><td>Precio</td></tr>");
  
  for (let i = 0; i < arrCarrito.length; i++) {
    document.write("<tr><td>"+arrCarrito[i] +"</td><td>"+arrMontoPagar[i] +"</td></tr>");
    vartempd = vartempd + arrMontoPagar[i];
  }
  document.write("<tr><td>&nbsp;</td><td>&nbsp;</td>");
  document.write("<tr><td>*Total</td><td>" +vartempd +"</td>");
  document.write("</table></main>");

  document.write("<footer></footer>");
  document.write("<h2 border='2'>Gracias por tu compra!</h2><p>Te esperamos nuevamente, Que tengas un buen dia!</p>");
}





console.log("********************************")
console.log("*         Fin de Programa      *")
console.log("********************************")


// *** Inicio de programa ***

// Matematicas
// Datos dinamicos
let radioCirculo = 2
let num1 = 3
let num2 = 0
let resultado



// Datos Constantes
const PI = 3.14159265

// Formulas
let nombreFormula = "Area de un circulo"
const RADIOCIR = PI * (radioCirculo * radioCirculo)


// Llamada a funciones

suma(num1, num2)
rest(num1, num2)
mult(num1, num2)
divi(num1, num2)
areaCirculo()











// Funciones
function suma(num1, num2) {
  resultado = num1 + num2;

  mensajeConsola = "Suma: " + resultado;
  depuracionConsola(mensajeConsola)

  return resultado;
}

function rest(num1, num2) {
  resultado = num1 - num2;

  mensajeConsola = "Resta: " + resultado;
  depuracionConsola(mensajeConsola)

  return resultado;
}

function mult(num1, num2) {
  resultado = num1 * num2;

  mensajeConsola = "Multiplicacion: " + resultado;
  depuracionConsola(mensajeConsola)

  return resultado;
}

function divi(num1, num2) {
  if (num2 === 0) {
    mensajeConsola = "Division: ¡No se puede dividir por cero!";
    depuracionConsola(mensajeConsola)

    //console.error("¡No se puede dividir por cero!");

    return NaN;
  }
  else {
    resultado = num1 / num2;

    mensajeConsola = "Division: " + resultado;
    depuracionConsola(mensajeConsola)

    return resultado;
  }
}

function areaCirculo() {
  resultado = RADIOCIR;

  mensajeConsola = "Radio: " + resultado.toFixed(3);
  depuracionConsola(mensajeConsola)

  return resultado;
}





// 1. Inicializar tres variables de distintos tipos de datos

let dniEmpleado = 32899632;
let nombreEmpleado = "Martin Hernandez";
let permisoconducirEmpleado = true;
const experienciastecnologicasEmpleado = ["Diseño Web", "JS", "SQL"];
let salariobasicoEmpleado = 760000.03;
const salariobolsilloEmpleado = ((salariobasicoEmpleado / 100) * 17) + salariobasicoEmpleado


// 2. Declarar dos variables y asignarles valor más adelante.

let fechanacEmpleado;
let pluspuntualidadEmpleado;

fechanacEmpleado = "03/03/2003"
pluspuntualidadEmpleado = 7000.00

// 3. Mostrar las 5 variables anteriores por consola con el operador typeof para verificar los tipos de datos.

console.log(typeof dniEmpleado)
console.log(typeof nombreEmpleado)
console.log(typeof permisoconducirEmpleado)
console.log(typeof experienciastecnologicasEmpleado)
console.log(typeof salariobasicoEmpleado)
console.log(typeof salariobolsilloEmpleado)
console.log(typeof fechanacEmpleado)
console.log(typeof pluspuntualidadEmpleado)

// 4. Ejemplo de variable con la declaración "const".

let radioCircul = 2
const vPI = 3.41
const RADIOCIRC = PI * (radioCircul * radioCircul)

console.log(RADIOCIRC)

console.log(typeof radioCircul)
console.log(typeof vPI)
console.log(typeof RADIOCIRC)


// 1. Utilizar dos de las cuatro operaciones básicas asignando el valor en una variable y mostrarla por consola.
let numer1 = 3
let numer2 = 2

let opsuma = numer1 + numer2;
console.log("Resultado de la suma [num1] + [num2]: " + opsuma);
let opresta = numer1 - numer2;
console.log("Resultado de la resta [num1] - [num2]: " + opresta);


//2. Utilizar las otras dos operaciones restantes directamente por consola sin utilizar una variable.
let nume1 = Number(prompt("Ingrese Numero 1"))
let nume2 = Number(prompt("Ingrese Numero 2"))

let multip = nume1 * nume2;
console.log("Resultado de la multiplicacion [nume1] * [nume2]: " + multip);

let divisio = nume1 / nume2;
console.log("Resultado de la division [nume1] / [nume2]: " + divisio.toFixed(3));

let moddiv = nume1 % nume2;
console.log("Resultado del modulo de la division [nume1] % [nume2]: " + moddiv);

alert("Los resultados son los siguientes: " + opsuma + ", " + opresta + ", " + multip + ", " + divisio.toFixed(3) + ", " + moddiv)








