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

class Admin extends Persona {
  constructor(nombre, apellido, dni, role) {
    super(nombre, apellido, dni);
    this.role = role;
  }

  mostrarRole() {
    console.log(`Mi rol es: ${this.role}`);
  }
}

const persona1 = new Persona("Andres", "Perlo", "12345678");
const admin1 = new Admin("Maxi", "Busi", "6546465465", "admin");

/* console.log(persona1);
console.log(admin1);

admin1.mostrarDatos();
persona1.mostrarRole(); */

/* 
Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/
//Escribe un programa que cree un objeto "cuenta"

class Cuenta {
  constructor() {
    this.titular = "Alex";
    this.saldo = 0;
  }

  ingresar(cantidad) {
    this.saldo += cantidad;
    console.log(this.saldo);
  }

  extraer(cantidad) {
    let resultado = this.saldo - cantidad;
    if (resultado < 0) {
      console.log(`Operacion incorrecta. Tu saldo es de $${this.saldo}`);
    } else {
      this.saldo -= cantidad;
      console.log(this.saldo);
    }
  }

  informar() {
    console.log(`Tu cuenta tiene: $${this.saldo}`);
  }
}

const cuenta1 = new Cuenta();
cuenta1.ingresar(500);
cuenta1.extraer(400);
cuenta1.informar();
