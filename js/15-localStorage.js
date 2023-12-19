/* LocalStorage - SessionStorage
getItem - trae el dato
setItem - crea o edita un dato
removeItem - elimina un dato
*/

//setItem - crea o edita un dato
const nombre = "Andres";
localStorage.setItem("nombre", nombre);

//getItem - trae el dato
const obtenerNombre = localStorage.getItem("nombre");
console.log(obtenerNombre);

//removeItem - elimina un dato
const borrarNombre = () => {
  localStorage.removeItem("nombre");
};
