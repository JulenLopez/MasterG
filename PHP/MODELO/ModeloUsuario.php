<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of ModeloUsuario
 *
 * @author guerr
 */
require_once 'Conexion.php';
class ModeloUsuario {
    private $conexion;
    
    public function __construct() {
        $conectar=new Conexion();
        $this->conexion=$conectar->conectar();
    }
    
    public function select($nick,$password){
        $query="SELECT u.id,u.nick,u.foto,u.correo,c.password
        FROM usuario u inner JOIN codigo c WHERE u.id=c.idusuario AND
        u.nick=? and c.password=?";
        
        $stmt=$this->conexion->prepare($query);
        $stmt->bind_param("ss",$nick,$password);
        $stmt->execute();
        $resultado=$stmt->get_result();
        
        if($resultado->num_rows==1){
            $asoc=$resultado->fetch_assoc();
            return $asoc;
            // echo "got it";
        }
       //echo "no machio";
        return false;

        
    }
    
    

}
