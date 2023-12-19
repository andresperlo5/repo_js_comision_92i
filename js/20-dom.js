/* Document Object Model */
/* GET - Obtener - Element - Elemento - By - Por - Id */
const textPrincipal = document.getElementById("idTextoPrincipal");
const parrafoPrincipal = document.getElementsByClassName("clase-parrafo");
const botonPrincipal = document.getElementsByTagName("button");
/* console.log(textPrincipal);
console.log(parrafoPrincipal);
console.log(botonPrincipal);
 */

const texto = document.querySelector(".clase-parrafo");
const textos = document.querySelectorAll("#idTextoPrincipal");
/* console.log(texto);
console.log(textos); */

/* setTimeout(() => {
  textPrincipal.innerText = "Hola Comision 91i desde js";
}, 2000); */

const div = document.createElement("div");
div.id = "idDivJS";
div.className = "clase-js";
document.body.appendChild(div);

const divJs = document.getElementById("idDivJS");

const p = document.createElement("p");
p.innerHTML = "Soy un parrafo desde js";
divJs.appendChild(p);
