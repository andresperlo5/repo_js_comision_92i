/* const nombre = "Andres";

console.log(nombre.toLowerCase());
console.log(nombre.toUpperCase());

const frase = prompt("Ingrese una frase");
let vocales = "";

for (let contador = 0; contador < frase.length; contador++) {
  const letra = frase.charAt(contador).toLowerCase();

  if (letra === "a") {
    vocales = vocales + letra;
  } else if (letra === "e") {
    vocales = vocales + letra;
  } else if (letra === "i") {
    vocales = vocales + letra;
  } else if (letra === "o") {
    vocales = vocales + letra;
  } else if (letra === "u") {
    vocales = vocales + letra;
  }
}

console.log(vocales); */

/* const numero = 10.9856; */

/* round - ceil - floor  */
/* console.log(Math.ceil(numero));
console.log(Math.floor(numero));
console.log(Math.round(numero)); */

/* numero aleatorio */
/* const numeroAleatorio = Math.round(Math.random() * 100);
console.log(numeroAleatorio);

const numero1 = "10";
const numero2 = 20;

console.log(Number(numero1) + numero2); */

/* for (let i = 1; i <= 500; i++) {
  document.write("Número: " + i);
  if (i % 4 === 0) {
    document.write(" (Múltiplo de 4)");
  }
  if (i % 9 === 0) {
    document.write(" (Múltiplo de 9)");
  }
  document.write("<br>");
  if (i % 5 === 0) {
    document.write("<hr>");
  }
}
 */

/* 
■ Crear una aplicación de carrito de compras donde se ingresen productos como elementos en un array.
■ las tareas que debe hacer son las siguientes:
● Agregar producto al carrito
● Listar los productos del carrito
● Buscar un producto en el carrito
● Filtrar productos que coincidan con una palabra, parte de ella o una letra
● Eliminar producto del carrito

*/

/* const carrito = ["coca-cola"]; */

/* ● Agregar producto al carrito */
/* const producto = "pepsi";
carrito.push(producto);
console.log(carrito); */

/* ● Listar los productos del carrito */
/* carrito.forEach((prod) => {
  document.write(`${prod} <br>`);
}); */

/* ● Buscar un producto en el carrito */
/* const buscarProducto = carrito.find((prod) => prod === "coca-cola");
console.log(buscarProducto); */

/* ● Filtrar productos que coincidan con una palabra, parte de ella o una letra*/
/* const palabra = "p";
const busquedaPorPalabra = carrito.filter((prod) => prod.includes(palabra));
console.log(busquedaPorPalabra); */

/* ● Eliminar producto del carrito */

/* => */

/*  Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función. */
/* Escribir el código de una función a la que se pasa como parámetro un número entero */

/* const numeroEntero = (num) => {
  if (num % 2 === 0) {
    return "Numero Par";
  } else {
    return "Numero Impar";
  }
};

document.write(numeroEntero(35)); */

/*  Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

/* Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. */

const cadenaTexto = (string) => {
  const mayusculas = new RegExp("[A-Z]").test(string);
  const minusculas = new RegExp("[a-z]").test(string);

  if (mayusculas && minusculas) {
    console.log("Letras combinadas");
  } else if (mayusculas) {
    console.log("Letras  mayusculas");
  } else if (minusculas) {
    console.log("Letras minusculas");
  }
};

cadenaTexto("HOoasd");
