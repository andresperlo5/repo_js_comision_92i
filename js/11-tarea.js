const personas = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    domicilio: "Calle 123",
    profesion: "Ingeniero",
    email: "juan@example.com",
  },
  {
    id: 2,
    nombre: "María",
    apellido: "Gómez",
    domicilio: "Avenida 456",
    profesion: "Doctora",
    email: "maria@example.com",
  },
  {
    id: 3,
    nombre: "Carlos",
    apellido: "López",
    domicilio: "Plaza Principal",
    profesion: "Abogado",
    email: "carlos@example.com",
  },
  {
    id: 4,
    nombre: "Laura",
    apellido: "Martínez",
    domicilio: "Carrera 789",
    profesion: "Arquitecta",
    email: "laura@example.com",
  },
  {
    id: 5,
    nombre: "Pedro",
    apellido: "Rodríguez",
    domicilio: "Boulevard 012",
    profesion: "Profesor",
    email: "pedro@example.com",
  },
  {
    id: 6,
    nombre: "Ana",
    apellido: "Sánchez",
    domicilio: "Camino 345",
    profesion: "Diseñadora",
    email: "ana@example.com",
  },
  {
    id: 7,
    nombre: "Gabriel",
    apellido: "Fernández",
    domicilio: "Paseo 678",
    profesion: "Programador",
    email: "gabriel@example.com",
  },
  {
    id: 8,
    nombre: "Elena",
    apellido: "Ramírez",
    domicilio: "Sendero 901",
    profesion: "Enfermera",
    email: "elena@example.com",
  },
  {
    id: 9,
    nombre: "Miguel",
    apellido: "Hernández",
    domicilio: "Ruta 234",
    profesion: "Contador",
    email: "miguel@example.com",
  },
  {
    id: 10,
    nombre: "Isabel",
    apellido: "Díaz",
    domicilio: "Callejón 567",
    profesion: "Estudiante",
    email: "isabel@example.com",
  },
];

/* Tarea
Crear funciones que realicen las siguientes tareas
1- Mostrar una lista con los nombres completos en orden alfabetico
2- crear tarjetas de presentacion con los datos de los usuarios
3- Agregar un usuario mas al final de la lista
4- Actualizar el nombre de un usuario
5- Eliminar un usuario en Particular
6- Realizar busqueda de usuario cuyo apellido coincida con el termino a buscar */

//1- Mostrar una lista con los nombres completos en orden alfabetico
const nombreYapellido = () => {
  const nombreCompleto = personas.map(
    (persona) => `${persona.apellido} ${persona.nombre}`
  );

  document.write(`<ol>`);
  nombreCompleto.sort().forEach((dato) => {
    document.write(`<li>${dato}</li>`);
  });
  document.write(`</ol>`);
};

//2- Crear tarjetas de presentacion con los datos de los usuarios
const tarjetaDePresentacion = () => {
  for (let contador = 0; contador < personas.length; contador++) {
    let persona = personas[contador];

    document.write(`---Tarjeta de Presentacion-- <br>`);
    document.write(
      `Apellido y Nombre: ${persona.apellido} ${persona.nombre} <br>`
    );
    document.write(`Email: ${persona.email} <br> <br>`);
  }
};

//3- Agregar un usuario mas al final de la lista
const agregarNuevoUsuario = () => {
  let idUsuario = personas[personas.length - 1]?.id + 1 || 1;

  personas.push({
    id: idUsuario,
    nombre: "Andres",
    apellido: "Perlo",
    domicilio: "Las Talitas",
    profesion: "Profesor",
    email: "andres@example.com",
  });
  console.log(personas);
};

//4- Actualizar el nombre de un usuario
const actualizarNombre = (idUsuario) => {
  /* filter, find */
  const indiceUsuario = personas.findIndex(
    (persona) => persona.id === idUsuario
  );

  if (indiceUsuario < 0) {
    return console.log("ID Incorrecto");
  }

  let nuevoNombre = prompt("Ingrese su nuevo nombre");
  personas[indiceUsuario].nombre = nuevoNombre;
  console.log(personas);
};

//5- Eliminar un usuario en Particular
const borrarUsuario = (idUsuario) => {
  const deleteUser = personas.filter((persona) => persona.id !== idUsuario);
  console.log(deleteUser);
};

//6- Realizar busqueda de usuario cuyo apellido coincida con el termino a buscar
const buscarUsuario = (termino) => {
  const buscarApellido = personas.filter((persona) =>
    persona.apellido.toLowerCase().includes(termino.toLowerCase())
  );
  console.log(buscarApellido);
};
