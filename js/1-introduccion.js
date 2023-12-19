const nombre = "Andres";
const edad = 30;

/* String */
console.log(nombre.length); /* length */

/* andres - Andres - ANDRES - anDreS */

const usuario = "Andres2023";
console.log(
  usuario.toUpperCase()
); /* Mayuscula */ /* toUpperCase(parametro o argumento) o toLowerCase() -> metodo = funcion  */
console.log(usuario.toLowerCase()); /* Minuscula */

/* document.write("HOla desde JS"); */

/* const nombreUsuario = prompt("Ingrese su nombre");
console.log(nombreUsuario); */
/* "2" -> String || 2 -> Number */ /* "2" + "2" "22" */ /* "23" Number( "23" > 23) Number("a" > NaN) */
/* const num1 = prompt(" Ingrese un numero");
const num2 = prompt("Ingrese otro numero");
console.log(typeof num1);
console.log(typeof num2); */

//console.log(Number(num1) + Number(num2)); /* NaN -> Not a Number */

/* const numeroDecimal = "10.205232323";
const redondearDecimal = Number(numeroDecimal).toFixed(2);
console.log(Number(redondearDecimal));
console.log(parseFloat(numeroDecimal));
console.log(parseInt(numeroDecimal)); */

const numeroAleatorio = 20.4; /* Math */
/* Ceil - Redondea para el siguiente numero entero */

console.log(numeroAleatorio);
/* console.log(Math.ceil(numeroAleatorio)); */
/* Floor - Devuelve el numero entero */
/* console.log(Math.floor(numeroAleatorio)); */
/* Round -  tiene en cuenta el decimal para devolver el siguiente numero entero o el actual*/
console.log(Math.round(numeroAleatorio));
console.log(Math.max(3, 5, 9, 99, 15, 21));
