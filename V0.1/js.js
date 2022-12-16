
//Inucializacion de elementos del html
const cajaNombre = document.getElementById("nombre");
const cajaCorreo = document.getElementById("correo");
const cajaPass = document.getElementById("pass");
const cajaPass2 = document.getElementById("pass2");
const cajaDireccion = document.getElementById("direccion");
const cajaTarjeta = document.getElementById("tarjeta");

const labelTarjeta = document.getElementById("labelTarjeta");

const falloNombre = document.getElementById("falloNombre");
const falloCorreo = document.getElementById("falloCorreo");
const falloPass = document.getElementById("falloPass");
const falloPass2 = document.getElementById("falloPass2");
const falloDireccion = document.getElementById("falloDireccion");
const falloTarjeta = document.getElementById("falloTarjeta");

const botonEnviar = document.getElementById("botonEnviar");

//Inicializacion de variables
const regeNombre= /^(\w+(\s+\w+)?\s*)$/;
const regeCorreo= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regePass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const regeVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
const regeMastercard = /^(?:5[1-5][0-9]{14})$/;
const regeDireccion = /Calle\s*(\b\w*\b\s+){1,5}Nº\s*\d{1,5}/i;

let nombreOk=false;
let correoOk=false;
let passOk=false;
let pass2Ok=false;
let direccionOk=true;
let tarjetaOk=true;

//Asignacion de eventos
cajaNombre.addEventListener("blur", (event) => {nombre();});
cajaNombre.addEventListener("focus",function(){cajaNombre.style.color="";}, true);

cajaCorreo.addEventListener("blur", (event) => {correo();});
cajaCorreo.addEventListener("focus",function(){cajaCorreo.style.color="";}, true);

cajaPass.addEventListener("blur", (event) => {pass();});
cajaPass.addEventListener("focus",function(){cajaPass.style.color="";}, true);

cajaPass2.addEventListener("blur", (event) => {
    if(cajaPass.value==cajaPass2.value && cajaPass){
        cajaPass2.style.color="green";
        falloPass2.style.display="none";
        pass2Ok=true;
    }else{
        cajaPass2.style.color="red";
        falloPass2.style.display="";
        pass2Ok=false;
    }});
cajaPass2.addEventListener("focus",function(){cajaPass2.style.color="";}, true);

cajaDireccion.addEventListener("blur", (event) => {direccion();});
cajaDireccion.addEventListener("focus",function(){cajaDireccion.style.color="";}, true);

cajaTarjeta.addEventListener("blur", (event) => {tarjeta();});
cajaTarjeta.addEventListener("focus",function(){cajaTarjeta.style.color="";}, true);

botonEnviar.addEventListener("click",function(){
    if(nombreOk&&correoOk&&passOk&&pass2Ok&&!direccionOk&&!tarjetaOk){

    }else{
        
    }
},false)

//Creacion de funciones.
function nombre(){
    if(regeNombre.test(cajaNombre.value)){
        cajaNombre.style.color="green";
        falloNombre.style.display="none";
        nombreOk=true;
        return;
    } else {
        cajaNombre.style.color="red";
        falloNombre.style.display="";
        nombreOk=false;
        return;
    }
}

function correo(){
    if(regeCorreo.test(cajaCorreo.value)){
        cajaCorreo.style.color="green";
        falloCorreo.style.display="none";
        correoOk=true;
        return;
    } else {
        cajaCorreo.style.color="red";
        falloCorreo.style.display="";
        correoOk=false;
        return;
    }
}

function pass(){
    if(regePass.test(cajaPass.value)){
        cajaPass.style.color="green";
        falloPass.style.display="none";
        passOk=true;
        return;
    } else {
        cajaPass.style.color="red";
        falloPass.style.display="";
        passOk=false;
        return;
    }
}

function direccion(){
    if(regeDireccion.test(cajaDireccion.value)){
        cajaDireccion.style.color="green";
        falloDireccion.style.display="none";
        labelTarjeta.style.display="";
        passOk=true;
        return;
    } else {
        cajaDireccion.style.color="red";
        falloDireccion.style.display="";
        labelTarjeta.style.display="none";
        passOk=false;
        return;
    }
}

function tarjeta(){
    if(regeVisa.test(cajaTarjeta.value.trim())){
        cajaTarjeta.style.color="green";
        falloTarjeta.style.display="";
        tarjetaOk=true;
        return;
    }else if(regeMastercard.test(cajaTarjeta.value.trim())){
        cajaTarjeta.style.color="green";
        falloTarjeta.style.display="";
        tarjetaOk=true;
        return;
    }else{
        cajaTarjeta.style.color="red";
        falloTarjeta.style.display="none";
        tarjetaOk=false;
        return;
    }
}