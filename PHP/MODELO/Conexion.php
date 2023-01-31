<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of cONEXIO
 *
 * @author guerr
 */
class Conexion {
    
    private $hostname ="localhost";
    private $usuario="root";
    private $password="";
    private $baseDeDatos="master_g";
    
    
    public function __construct($hostname="localhost", $usuario="root", $password="", $baseDeDatos="master_g") {
        $this->hostname =$hostname;
        $this->usuario =$usuario;
        $this->password =$password;
        $this->baseDeDatos =$baseDeDatos;
    }
    
    public function conectar(){
        return new mysqli($this->hostname, $this->usuario, $this->password,$this->baseDeDatos);
    }
    
    

}