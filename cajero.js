//Variable que contiene las cuentas: nombre, dinero, contraseña y numero de cuenta
var cuentas = {
    frida :{
        nombre : "Frida",
        cuenta : "123455",
        saldo : 500,
        contrasenia: "FriAbi01"
    },
    esteban :{
        nombre : "Esteban",
        cuenta : "678901",
        saldo : 500,
        contrasenia : "AntEst02"
    },
    diego : {
        nombre : "Diego",
        cuenta : "041219",
        saldo : 100,
        contrasenia : "D1eB0rO3"
    }
}
//Boton para entrar a alguna cuenta
var botonIngCuenta = document.getElementById("botonIngCuenta")
//Botones de identidad
var botonSi = document.getElementById("botonSi")
var botonNo = document.getElementById("botonNo")
//Boton para ingresar contraseña
var botonContrasena = document.getElementById("botonContrasena")
//Botones de operaciones
var saldo = document.getElementById("saldo")
var exit = document.getElementById("exit")
var pantallaInicial = document.getElementById("pantallaInicial")
var regresarPantalla = document.getElementById("regresarPantalla")
//Titulos que se van a modificar
var preguntaIdentidad = document.getElementById("preguntaIdentidad")
var tituloContrasena = document.getElementById("tituloContrasena")
var tituloSaldo = document.getElementById("tituloSaldo")
//Variables extras que serán ocultadas o mostradas
var eleccion = document.getElementById("eleccion")
var contrasena = document.getElementById("contrasena")
var identidad = document.getElementById("identidad")
var operaciones = document.getElementById("operaciones")
var consulta = document.getElementById("consulta")
//Input contraseña
var ingresoContrasena = document.getElementById("ingresoContrasena")
var noCuenta = document.getElementById("noCuenta")


//Funcion para el boton "si", ocultar identidad y mostrar ingreso de contraseña 
function identidadContrasena(){
    identidad.classList.add('none')
    contrasena.classList.remove('none')
    noCuenta.value = ""
}
//Funcion si se oprime el boton "no" regresa a la seleccion de cuentas
function regresarCuentas(){
    eleccion.classList.remove('none')
    identidad.classList.add('none')
    noCuenta.value = ""
}
//Funciones para ingresar la contraseña
function passwordF(){
   if(cuentas.frida.contrasenia===ingresoContrasena.value){
       contrasena.classList.add('none')
       operaciones.classList.remove('none')
   }else{
       var error = document.createElement('p')
       error.innerHTML = "La contraseña es incorrecta"
       contrasena.append(error)
   }
}
function passwordE(){
    if(cuentas.esteban.contrasenia===ingresoContrasena.value){
        contrasena.classList.add('none')
        operaciones.classList.remove('none')
    }else{
        var error = document.createElement('p')
        error.innerHTML = "La contraseña es incorrecta"
        contrasena.append(error)
    }
 }
 function passwordD(){
    if(cuentas.diego.contrasenia===ingresoContrasena.value){
        contrasena.classList.add('none')
        operaciones.classList.remove('none')
    }else{
        var error = document.createElement('p')
        error.innerHTML = "La contraseña es incorrecta"
        contrasena.append(error)
    }
 }
//Funcion para consultar saldo
function consultarSaldo(){
    operaciones.classList.add('none')
    consulta.classList.remove('none')
}
//Funcion para salir
function Regresar(){
    contrasena.classList.add("none")
    operaciones.classList.add("none")
    consulta.classList.add("none")
    eleccion.classList.remove("none")
    noCuenta.value=""
    ingresoContrasena.value=""
}
// Funcion para ocultar selector de cuentas y mostrar pregunta de identidad
function IngresarCuenta(){
    switch(noCuenta.value){
        //Validación de la cuenta
        case cuentas.frida.cuenta:
            //Validación de identidad
            eleccion.classList.add('none')
            //Ajuste del titulo de identidad
            preguntaIdentidad.innerHTML = "¿Eres Frida?"
            identidad.classList.remove('none')
            //Ajuste del titulo de contraseña
            tituloContrasena.innerHTML = "Hola Frida, introduce tu contraseña por favor"
            //Validacion de la contraseña 
            botonContrasena.addEventListener('click',passwordF)
            //Imprimir el saldo actual de la cuenta 
            tituloSaldo.innerHTML = "Tu saldo actual es de $"+cuentas.frida.saldo
        break
        //Validación de la cuenta
        case cuentas.esteban.cuenta:
            //Validación de identidad
            eleccion.classList.add('none')
            //Ajuste del titulo de identidad 
            preguntaIdentidad.innerHTML = "¿Eres Esteban?"
            identidad.classList.remove('none')
            //Ajuste del titulo de contraseña
            tituloContrasena.innerHTML = "Hola Esteban, introduce tu contraseña por favor"
            //Validacion de la contraseña
            botonContrasena.addEventListener('click',passwordE)
            //Imprimir el saldo actual de la cuenta 
            tituloSaldo.innerHTML = "Tu saldo actual es de $"+cuentas.esteban.saldo
        break
        //Validación de la cuenta
        case cuentas.diego.cuenta:
            //Validación de identidad
            eleccion.classList.add('none')
            //Ajuste del titulo de identidad
            preguntaIdentidad.innerHTML = "¿Eres Diego?"
            identidad.classList.remove('none')
            //Ajuste del titulo de contraseña
            tituloContrasena.innerHTML = "Hola Diego, introduce tu contraseña por favor"
            //Validacion de la contraseña
            botonContrasena.addEventListener('click',passwordD)
            //Imprimir el saldo actual de la cuenta 
            tituloSaldo.innerHTML = "Tu saldo actual es de $"+cuentas.diego.saldo
        break
        default : 
            var error = document.createElement('p')
            error.innerHTML = "Esa cuenta no existe"
            eleccion.append(error)
    }
}
//Boton para ingresar a la cuenta
botonIngCuenta.addEventListener('click',IngresarCuenta)
//Botones de confirmación de identidad
botonSi.addEventListener('click',identidadContrasena)
botonNo.addEventListener('click',regresarCuentas)
//Boton para regresar a la pantalla inicial
exit.addEventListener('click',Regresar)
regresarPantalla.addEventListener('click',Regresar)
pantallaInicial.addEventListener('click',Regresar)
//Boton para consultar Saldo
saldo.addEventListener('click',consultarSaldo)