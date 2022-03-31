var retiro = document.getElementById("Retiro");
var boton = document.getElementById("botton");
var NombreDeUsuario = document.getElementById("Nombre");
var EstoDecuentActual = document.getElementById("EstodoDeCuenta");
var MontoRetirado = document.getElementById("MontoRetirado");
var SaldoActualizado = document.getElementById("SaldoActualizado");
var aler = document.getElementById("aler");
var cera = document.getElementById("cerrar");
var boton2 = document.getElementById("botto");
var menu = document.getElementById("menu");
var usuario = document.getElementById("usuario");
boton.addEventListener("click", evaluar);
cera.addEventListener("click", cerar);
var cuerpo = document.getElementById("body");
var cera = document.getElementById("cera");
var contenedor = document.getElementById("contenedor");
cera.addEventListener("mouseover", cerar_seccion);
cera.addEventListener("mouseout", fuera_de_cerrar_seccion);
function fuera_de_cerrar_seccion() {
  cera.style.opacity = "1";
  cuerpo.style.opacity = "1";
}
function cerar_seccion() {
  cuerpo.style.opacity = "0.5";
  cera.style.opacity = "1";
}
function cerar() {
  aler.style.display = "none";
}

usuario.addEventListener("click", usuari);
function usuari() {
  menu.classList.toggle("menu2");
}
//Con la fucion de contructora ,creamos los las propiedaes y valor del objecto
function Cuentas(nombre, apellido, edad, contrasena, saldo) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.contrasena = contrasena;
  this.saldo = saldo;
}
//Estas seria las tres cuenta de usuario con sus respectivos valores
var P1 = new Cuentas("Juan", "Salazar", 43, "772357", 300);
var P2 = new Cuentas("Pedro", "Perez", 40, "12857", 600);
var P3 = new Cuentas("Maria", "Peña", 41, "92057", 500);

//Funcion evaluar,toma las siguientes condiciones para evaluar  sobre el saldo y esto lo imprimimos en una tabla
function evaluar() {
  var saldoActual = P1.saldo - retiro.value;
  if (retiro.value >= P1.saldo || saldoActual === 9) {
    if ((aler.style = "none" === "none")) {
      aler.style.display = "block";
    }
  } else if (retiro.value !== "") {
    NombreDeUsuario.innerHTML = P1.nombre;
    EstoDecuentActual.innerHTML = P1.saldo;
    MontoRetirado.innerHTML = retiro.value;
    SaldoActualizado.innerHTML = saldoActual;
    alert("El retiro se realizo de manera correcta");
  }
}

evaluar();
