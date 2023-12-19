const redirigirPagina = () => {
  setTimeout(() => {
    location.href = "https://google.com.ar";
  }, 2000);
};

const saludo = () => {
  setInterval(() => {
    document.write(`Hola Mundo <br>`);
  }, 2000);
};

const frenarSaludor = () => {
  clearInterval(saludo);
};
