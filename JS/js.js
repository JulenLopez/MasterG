//Inicialización de elementos del html
//Todos los inputs utilizados y asignados
const cajaNombre = document.getElementById("nombre");
const cajaCorreo = document.getElementById("correo");
const cajaPass = document.getElementById("pass");
const cajaPass2 = document.getElementById("pass2");
const cajaDireccion = document.getElementById("direccion");
const cajaTarjeta = document.getElementById("tarjeta");

//Label para invocar el input de tarjeta
const labelTarjeta = document.getElementById("labelTarjeta");

//Todos los elementos de la "alerta" custom
const alertCentro = document.getElementById("alertCentro");
const cuadroAlert = document.getElementById("cuadroAlert");
const alertTexto = document.getElementById("alertTexto");

//Diferentes p para argumentar los fallos del usuario
const falloNombre = document.getElementById("falloNombre");
const falloCorreo = document.getElementById("falloCorreo");
const falloPass = document.getElementById("falloPass");
const falloPass2 = document.getElementById("falloPass2");
const falloDireccion = document.getElementById("falloDireccion");
const falloTarjeta = document.getElementById("falloTarjeta");

//Botones de html
const botonEnviar = document.getElementById("botonEnviar");
const botonAceptar = document.getElementById("botonAceptar");
const botonSol = document.getElementById("botonSol");

//Inicialización de variables
//Cración de las diferentes Regex para tenerlas a mano ante los cambios futuros
const regeNombre = /^(\s*[a-zA-Z]+(\s+[a-zA-Z]+)?\s*)$/;
const regeCorreo = /^\s*\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regePass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const regeVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
const regeMastercard = /^(?:5[1-5][0-9]{14})$/;
const regeDireccion = /\s*Calle\s*(\b\w*\b\s+){1,5}Nº\s*\d{1,5}/i;

//Variables para la comprobación de los valores correctos, variables opcionales inicializadas a true
let nombreOk = false;
let correoOk = false;
let passOk = false;
let pass2Ok = false;
let direccionOk = true;
let tarjetaOk = true;

//Asignación de eventos divido a pares por elemento, obtención y perdida del foco
cajaNombre.addEventListener("blur", (event) => { nombre(); });
cajaNombre.addEventListener("focus", function () { cajaNombre.style.color = ""; }, true);

cajaCorreo.addEventListener("blur", (event) => { correo(); });
cajaCorreo.addEventListener("focus", function () { cajaCorreo.style.color = ""; }, true);

cajaPass.addEventListener("blur", (event) => { pass(); });
cajaPass.addEventListener("focus", function () { cajaPass.style.color = ""; }, true);

cajaPass2.addEventListener("blur", (event) => {//No es necesario crear una función debido a la facilidad del evento
    if (cajaPass.value == cajaPass2.value && passOk) {
        cajaPass2.style.color = "green";
        falloPass2.style.display = "none";
        pass2Ok = true;
    } else {
        cajaPass2.style.color = "red";
        falloPass2.style.display = "";
        pass2Ok = false;
    }
});
cajaPass2.addEventListener("focus", function () { cajaPass2.style.color = ""; }, true);

cajaDireccion.addEventListener("blur", (event) => { direccion(); });
cajaDireccion.addEventListener("focus", function () { cajaDireccion.style.color = ""; }, true);

cajaTarjeta.addEventListener("blur", (event) => { tarjeta(); });
cajaTarjeta.addEventListener("focus", function () { cajaTarjeta.style.color = ""; }, true);

alertCentro.addEventListener("click", function () { alertCentro.style.display = "none"; }, false);
cuadroAlert.addEventListener("click", function () { alertCentro.style.display = "none"; }, false);

//Eventos de los botones, están bastante planos debido a la falta de implementación de elementos
botonEnviar.addEventListener("click", function () {
    if (nombreOk && correoOk && passOk && pass2Ok && direccionOk && tarjetaOk) {
        alertTexto.innerHTML = "Usuario creado";
        alertCentro.style.display = "";
        //TODO Crear un objeto con la información del formulario para poder enviarlo contra la BBDD cuando se implemente
    } else {
        alertTexto.innerHTML = "Todos los campos obligatorios deben estar rellenados y correctos";
        alertCentro.style.display = "";
    }
}, false);
botonAceptar.addEventListener("click", function () {
    //TODO Redirigir al home page
}, false);

botonSol.addEventListener("click", (event) => { cambioColor(); })

//Creación de funciones. 
//TODO Interesante crear una función para todos debido a la alta repetición de código 
//Dar una vuelta para comprobar asequibilidad 
//Eliminación de más del 50% de líneas de las funciones 
function cambioColor(){
    let colorTop = document.getElementById("cabeza");
    let colorMid= document.getElementById("mid");
    let colorBot = document.getElementById("pie");

    if(colorMid.style.backgroundColor=="")
        colorMid.style.backgroundColor="black";
    
    if(colorMid.style.backgroundColor!="black"){
        colorMid.style.backgroundColor="black";
        colorMid.style.color="white";
        colorBot.style.color="white";
        colorTop.style.backgroundImage="linear-gradient(#302038, #000000)";
        colorMid.style.backgroundImage="linear-gradient(black, #2C323A)";
        colorBot.style.backgroundImage="linear-gradient(#2C323A, #a50f8d)";
        botonSol.style.backgroundImage="url('../imgs/sol.png')";
        botonSol.style.backgroundColor="white";
    }else{
        colorMid.style.backgroundColor="white";
        colorMid.style.color="black";
        colorBot.style.color="black";
        colorTop.style.backgroundImage="linear-gradient(#302038, wheat)";
        colorMid.style.backgroundImage="linear-gradient(wheat, white)";
        colorBot.style.backgroundImage="linear-gradient(white, #a50f8d)";
        botonSol.style.backgroundImage="url('../imgs/luna.png')";
        botonSol.style.backgroundColor="black";
    }

    return;
}

function nombre() {
    if (regeNombre.test(cajaNombre.value)) {
        cajaNombre.style.color = "green";
        falloNombre.style.display = "none";
        nombreOk = true;
        return;
    } else {
        cajaNombre.style.color = "red";
        falloNombre.style.display = "";
        nombreOk = false;
        return;
    }
}

function correo() {
    if (regeCorreo.test(cajaCorreo.value)) {
        cajaCorreo.style.color = "green";
        falloCorreo.style.display = "none";
        correoOk = true;
        return;
    } else {
        cajaCorreo.style.color = "red";
        falloCorreo.style.display = "";
        correoOk = false;
        return;
    }
}

function pass() {
    if (regePass.test(cajaPass.value)) {
        cajaPass.style.color = "green";
        falloPass.style.display = "none";
        passOk = true;
        return;
    } else {
        cajaPass.style.color = "red";
        falloPass.style.display = "";
        passOk = false;
        return;
    }
}

function direccion() {//Función distinta al resto debido al display, tener en cuenta
    if (regeDireccion.test(cajaDireccion.value)) {
        cajaDireccion.style.color = "green";
        falloDireccion.style.display = "none";
        labelTarjeta.style.display = "";//Poner después/antes de la función global
        passOk = true;
        return;
    } else {
        cajaDireccion.style.color = "red";
        falloDireccion.style.display = "";
        labelTarjeta.style.display = "none";//Poner después/antes de la función global
        passOk = false;
        return;
    }
}

function tarjeta() {
    if (regeVisa.test(cajaTarjeta.value.trim())) {
        cajaTarjeta.style.color = "green";
        falloTarjeta.style.display = "none";
        tarjetaOk = true;
        return;
    } else if (regeMastercard.test(cajaTarjeta.value.trim())) {
        cajaTarjeta.style.color = "green";
        falloTarjeta.style.display = "none";
        tarjetaOk = true;
        return;
    } else {
        cajaTarjeta.style.color = "red";
        falloTarjeta.style.display = "";
        tarjetaOk = false;
        return;
    }
}
