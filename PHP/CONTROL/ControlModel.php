<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of ControlModel
 *
 * @author guerr
 */
require_once './MODELO/ModeloUsuario.php';
class ControlModel {
    
    
    public function logar($nick,$password){
        $mod=new ModeloUsuario();
        $res=$mod->select($nick, $password);
        return $res;
        if($res==false){
            require_once './Vista/LogIn.php';
            header("Location:index.php?error=0");
        }else{
            require_once './Vista/UsuarioEncontrado.php';
        }
    }
}
