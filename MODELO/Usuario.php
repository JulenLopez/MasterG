<?php

require_once ("Modelo.php");

class Usuario {
    
        public $id;
        public $nick;
        public $tipo;
        
        
        public function __construct(...$args) {
            $args = func_get_args();
            $prop = get_object_vars( $this);
            current($prop);
            foreach($args as $value)
            {
                $this->{key($prop)}=$value;
                next($prop);
            }

        }
        
        public function insertar(){
            
            $mod=new Modelo("usuarios");
            $mod->insertar($this);
            
        }
        public function borrar(){
            $mod=new Modelo("usuarios");
            $mod->borrar($this->id);
            
        }
        public function actualizar(){
            $mod=new Modelo("usuarios");
            $mod->actualizar($this);
            
        }
        public function cargar(){
            $mod=new Modelo("usuarios");
            $mod->select($this->id);
            
        }
        public function getId() {
            return $this->id;
        }

        public function getNick() {
            return $this->nick;
        }

        public function getTipo() {
            return $this->tipo;
        }

        public function setId($id): void {
            $this->id = $id;
        }

        public function setNick($nick): void {
            $this->nick = $nick;
        }

        public function setTipo($tipo): void {
            $this->tipo = $tipo;
        }


}
