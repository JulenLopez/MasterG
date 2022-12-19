<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Usuario
 *
 * @author alumno
 */
class Usuario {
    
    public $id = 0;
    public $nick = "";
    public $foto;
    public $correo="";
    public $direccion;
    public $tarjeta;
    public $revista;
    public $sexo;
    public $fechaNac;
    public $pais;
    
    public function __construct($id, $nick, $foto, $correo, $direccion=null, $tarjeta=null, $revista=null, $sexo=null, $fechaNac=null, $pais=null) {
        $this->id = $id;
        $this->nick = $nick;
        $this->foto = $foto;
        $this->correo = $correo;
        $this->direccion = $direccion;
        $this->tarjeta = $tarjeta;
        $this->revista = $revista;
        $this->sexo = $sexo;
        $this->fechaNac = $fechaNac;
        $this->pais = $pais;
    }
    
    

        /*public function __construct() {
        $num_params = func_num_args();
        $args = func_get_args();
    }*/
    //put your code here
}
