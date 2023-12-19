const empezarJuego = () => {
  let resultadoPrograma = eleccionPrograma();
  let resultadoPersona = eleccionJugador();

  if (resultadoPersona) {
    if (resultadoPrograma === resultadoPersona) {
      alert("Empate");
    } else if (
      (resultadoPrograma === "tijera" && resultadoPersona === "piedra") ||
      (resultadoPrograma === "piedra" && resultadoPersona === "papel") ||
      (resultadoPrograma === "papel" && resultadoPersona === "tijera")
    ) {
      alert("ganaste");
    } else {
      alert("perdiste");
    }
  }
};

const eleccionPrograma = () => {
  const opciones = ["piedra", "papel", "tijera"];
  const numeroAleatorio = Math.round(Math.random() * 2);
  const resultado = opciones[numeroAleatorio];
  console.log(resultado);
  return resultado;
};

const eleccionJugador = () => {
  const opciones = ["piedra", "papel", "tijera"];
  const eleccion = prompt("Elige tu opcion: Piedra - Papel - Tijera");
  const resultado = opciones.filter(
    (opcion) => opcion === eleccion.toLowerCase()
  );

  if (resultado.length > 0) {
    return eleccion.toLowerCase();
  } else {
    alert("Opcion incorrecta");
  }
};
