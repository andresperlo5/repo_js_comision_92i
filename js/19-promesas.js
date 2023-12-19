/* Promesa - 
Resolve - Then - La promesa se cumple - 
Reject - Catch - La promesa no se cumple

Verbos HTTP:
GET - Obtener datos
POST - Crear un dato 
PUT / PATCH - Editar un dato
DELETE - Eliminar un dato

FETCH - URL - METODO - Cabecera - Cuerpo
fetch('url', {
  methods: GET, POST, PUT, DELETE
  headers:{

  },
  body
})

fetch('url') - then/catch - async/await - resuelven promesas
*/

/* Then/catch */

/* fetch("https://rickandmortyapi.com/api/character")
  .then((data) => data.json())
  .then((personajes) => console.log(personajes.results))
  .catch((error) => console.log(error))

/* async/await */
/* const obtenerPersonajes = async () => {
  try {
    const data = await fetch("https://rickandmortyapi.com/api/character");
    const personajes = await data.json();
    console.log(personajes.results);
  } catch (error) {
    console.log(error);
  }
}; */
