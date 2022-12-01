<?php

require_once ("../MODELO/Usuario.php");
require_once ("../MODELO/Tipo.php");

$U1=new Usuario();
$U2=new Usuario(3, "Antonio",1);
$T1=new Tipo(null, "CRISTOBAL");
$U3=new Usuario(NULL, "PEPE",2);



//$U2->insertar();
//$T1->insertar();
//$U2->cargar();
//$U2->borrar();
//$U2->actualizar();

