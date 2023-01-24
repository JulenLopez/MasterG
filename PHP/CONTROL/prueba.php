<?php

require_once ("../MODELO/Usuario.php");
    

$modelo = new Modelo("usuario");

var_dump($modelo->select(1)->fetch_assoc());

//$U2->insertar();
//$T1->insertar();
//$U2->cargar();
//$U2->borrar();
//$U2->actualizar();

