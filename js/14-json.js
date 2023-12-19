const formUsuario = {
  nombre: "andres",
  apellido: "perlo",
  email: "andres@gmail.com",
  contrasenia: "12345679",
};

const array = [true];

/* 
JSON
- stringify - convierte un objeto o array a un string
- parse - convierte un string a un objeto o array
*/

//- stringify - convierte un objeto o array a un string
console.log(formUsuario);
const objetoAstring = JSON.stringify(formUsuario);
console.log(objetoAstring);

//- parse - convierte un string a un objeto o array
const stringAobjeto = JSON.parse(objetoAstring);
console.log(stringAobjeto);

//- stringify - convierte un objeto o array a un string
console.log(array);
const arrayAstring = JSON.stringify(array);
console.log(arrayAstring);

//- parse - convierte un string a un objeto o array
const stringArray = JSON.parse(arrayAstring);
console.log(stringArray);
