<?php

if($_SERVER["REQUEST_METHOD"]=="GET"){
    $fallo=" ";
    if(isset($_SERVER["error"])){
        switch ((int)$_SERVER["error"]) {
            case 0:
                 $fallo="Usuario no encontrado";
                break;

        }
   
    }
    
    require_once './Vista/LogIn.php';
}

if($_SERVER["REQUEST_METHOD"]=="POST"){
    require_once './CONTROL/ControlModel.php';
    $model=new ControlModel();
    $model->logar($_POST["nick"], $_POST["password"]);
}

?>
