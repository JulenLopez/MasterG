
//Inucializacion de elementos del html
const cajaNombre = document.getElementById("nombre");
const cajaCorreo = document.getElementById("correo");
const cajaPass = document.getElementById("pass");
const cajaPass2 = document.getElementById("pass2");
const cajaDireccion = document.getElementById("direccion");
const cajaTarjeta = document.getElementById("tarjeta");

//Inicializacion de variables
const regeNombre= /^(\w+\s+\w+ ?)$/;
const regeCorreo= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regePass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const regeVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
const regeMastercard = /^(?:5[1-5][0-9]{14})$/;

let nombreOk=false;
let correoOk=false;
let passOk=false;
let pass2Ok=false;
let tarjetaOk=false;

//Asignacion de eventos
cajaNombre.addEventListener("blur", (event) => {
    nombre();});
cajaNombre.addEventListener("focus",function(){
    cajaNombre.style.color="";
}, true);

cajaCorreo.addEventListener("blur", (event) => {
    correo();});
cajaCorreo.addEventListener("focus",function(){
    cajaCorreo.style.color="";
}, true);

cajaPass.addEventListener("blur", (event) => {
    pass();});
cajaPass.addEventListener("focus",function(){
    cajaPass.style.color="";
}, true);

cajaPass2.addEventListener("blur", (event) => {
    if(cajaPass.value==cajaPass2.value && cajaPass){
        cajaPass2.style.color="green";
        pass2Ok=true;
    }else{
        cajaPass2.style.color="red";
        pass2Ok=false;
    }
});
cajaPass2.addEventListener("focus",function(){
    cajaPass2.style.color="";
}, true);

cajaDireccion.addEventListener("blur", (event) => {
    direccion();});
cajaDireccion.addEventListener("focus",function(){
    cajaDireccion.style.color="";
}, true);

cajaTarjeta.addEventListener("blur", (event) => {
    tarjeta();});
cajaTarjeta.addEventListener("focus",function(){
    cajaTarjeta.style.color="";
}, true);

//Creacion de funciones.
function nombre(){
    if(regeNombre.test(cajaNombre.value)){
        cajaNombre.style.color="green";
        errorNombre.textContent("");
        nombreOk=true;
        return;
    } else {
        cajaNombre.style.color="red";
        //alert("Nombre y Apellido no valido");
        nombreOk=false;
        return;
    }
}

function correo(){
    if(regeCorreo.test(cajaCorreo.value)){
        cajaCorreo.style.color="green";
        correoOk=true;
        return;
    } else {
        cajaCorreo.style.color="red";
        //alert("Correo electrónico no valido");
        correoOk=false;
        return;
    }
}

function pass(){
    if(regePass.test(cajaPass.value)){
        cajaPass.style.color="green";
        passOk=true;
        return;
    } else {
        cajaPass.style.color="red";
        //alert("Correo electrónico no valido");
        passOk=false;
        return;
    }
}

function direccion(){
    if(regePass.test(cajaPass.value)){
        cajaDireccion.style.color="green";
        passOk=true;
        return;
    } else {
        cajaDireccion.style.color="red";
        //alert("Correo electrónico no valido");
        passOk=false;
        return;
    }
}

function tarjeta(){
    if(regeVisa.test(cajaTarjeta.value)){
        cajaTarjeta.style.color="green";
        tarjetaOk=true;
        return;
    }else if(regeMastercard.test(cajaTarjeta.value)){
        cajaTarjeta.style.color="green";
        tarjetaOk=true;
        return;
    }else{
        cajaTarjeta.style.color="red";
        tarjetaOk=false;
        return;
    }
}
