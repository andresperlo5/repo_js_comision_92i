const productos = [
  {
    id: 1,
    nombre: "coca-cola",
    precio: 1500,
  },
  {
    id: 2,
    nombre: "pepsi",
    precio: 1000,
  },
];

localStorage.setItem("productos", JSON.stringify(productos));

const arrayProductos = JSON.parse(localStorage.getItem("productos"));
console.log(arrayProductos);
