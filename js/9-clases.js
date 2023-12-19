class Persona {
  constructor(nombre, apellido, dni) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
  }

  mostrarDatos() {
    console.log(`${this.nombre} ${this.apellido}`);
  }
}

const persona1 = new Persona("Andres", "Perlo", "12345678");
const persona2 = new Persona("Maxi", "Busi", "6546465465");
persona1.mostrarDatos();
console.log(persona2);
