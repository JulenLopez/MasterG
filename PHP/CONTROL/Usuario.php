<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of uSUARIO
 *
 * @author guerr
 */
class Usuario {
    
    private $id;
    private $nombre;
    private $correo;
    private $foto;
    
    public function __construct($id, $nombre, $correo, $foto=null) {
        
        $this->id = $id;
        $this->$nombre = $nombre;
        $this->correo = $correo;
        $this->foto = $foto;
    }
    
    public function getId() {
        return $this->id;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function getCorreo() {
        return $this->correo;
    }

    public function getFoto() {
        return $this->foto;
    }
    
    
    
    


}
