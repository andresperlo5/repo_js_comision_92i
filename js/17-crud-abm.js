/* CRUD o ABM

C - Create - crear
R - read - leer
U - update - actulizar
D - delete - borrar - fisico - logico

A - Alta
B - Baja
M - Modificacion

*/

//C - Create - crear
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const crearUsuario = () => {
  if (usuarios.length) {
    const idUsuario = usuarios[usuarios.length - 1].id + 1;

    usuarios.push({
      id: idUsuario,
      nombreUsuario: "andres2023",
      contrasenia: "123456789",
      borrado: false,
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  } else {
    usuarios.push({
      id: 1,
      nombreUsuario: "andres2023",
      contrasenia: "123456789",
      borrado: false,
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
};

//R - read - leer
const obtenerUsuarios = () => {
  const usuariosNoBorrado = usuarios.filter((usuario) => !usuario.borrado);
  console.log(usuariosNoBorrado);
};

const obtenerUnUsuario = (idUsuario) => {
  const usuario = usuarios.find((usuario) => usuario.id === idUsuario);

  if (!usuario) {
    return console.log("ID Incorrecto");
  }

  if (usuario.borrado) {
    console.log("usuario borrado. tenes que mandar un mail al administrador");
  } else {
    console.log(usuario);
  }
};

//U - update - actulizar | M - Modificar
const actualizarUsuario = (idUsuario) => {
  const indiceUsuario = usuarios.findIndex(
    (usuario) => usuario.id === idUsuario
  );

  usuarios[indiceUsuario].nombreUsuario = "Juan2024";
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
};

//D - delete - borrar - fisico - logico
const borrarUsuarioFisico = (idUsuario) => {
  const usuariosNoBorrados = usuarios.filter(
    (usuario) => usuario.id !== idUsuario
  );
  localStorage.setItem("usuarios", JSON.stringify(usuariosNoBorrados));
};

const borrarUsuarioLogico = (idUsuario) => {
  const indiceUsuario = usuarios.findIndex(
    (usuario) => usuario.id === idUsuario
  );

  usuarios[indiceUsuario].borrado = true;
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
};
