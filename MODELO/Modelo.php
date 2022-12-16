
<?php


class Modelo {
    private $hostname="localhost";
    private $usuario="prueba";
    private $password="prueba";
    private $basededatos="masterg";
    private $conn;
    private $tabla;
    private $lista=array();
    public function __construct($tabla) {
        
        $this->tabla = $tabla;
        $this->conn = new mysqli($this->hostname, $this->usuario, $this->password, $this->basededatos);
        
      
        
    }
    
    public function insertar($obj) {
       
        $campos="";
        $valores="(";
        $sql="INSERT INTO ".$this->tabla."(";
        $arrayobj = get_object_vars( $obj);
        $i=0;
        
        foreach($arrayobj as $key=>$value){
            $campos.=$key . ",";
            if(is_null($value)){
                $valores=$valores . "?, ";
                $param[$i++]=null;
            }else{
                
                if (gettype($value) == "string"){
                    
                    $valores.=   "?" . ", ";
                    $param[$i++] =$value;
                    
                }else{
                        $valores.= "?" . "$value" . ",";
                        $param[$i++] =$value;
                }
                
            }
        }
        $campos=substr_replace($campos, ")", strlen($campos)-1);
        $valores=substr_replace($valores, ")", strlen($valores)-2);
        $sql.="". $campos . " VALUES " . $valores."";
         
        echo $sql;
        $stmt = $this->conn->prepare($sql);
        $stmt->execute($param);
        
        $this->close($stmt);
    }
    
    public function borrar($obj){
        
        $sql = "DELETE FROM " . $this->tabla . " WHERE  id = " . $obj; 
        echo $sql;
        
        if ($this->conn->query($sql)) {
             return true;
        } else {
             return false;
        }

    }
    
    public function select($condicion){
        
        $sql= "Select * from " . $this->tabla . " where id =" . $condicion;
        $result = $this->conn->query($sql);
        $lista=array();
        $i=0;
        
        while($row = $result->fetch_array(MYSQLI_ASSOC)){  
               $this->lista[$i++]=$row;
        }
        var_dump ($this->lista);
        return $this->lista;
    }
    
    
    public function actualizar($obj){
 
        $sql= "UPDATE " . $this->tabla . " SET ";
        $campos="";
        $patron="";
        $param=array();
        $i=0;
        $arrayobj = get_object_vars( $obj);
        
        foreach($arrayobj as $key=>$value){
            
           $campos.=$key . "= ?, ";
        
           switch (gettype($value)){
               
           case "string":
               
                $patron.="s";
                $param[$i++]=$value;
               break;
           
           case "object":
               
               $auxobj = get_object_vars( $value);               
               $patron.="i";
               $param[$i++]=(int)$auxobj["id"];
              break;
          
           default:
               
               $patron.="i";
               $param[$i++]=$value;
           }
        }
        
        $param[$i]=$obj->getId();
        $campos=substr_replace($campos, " ", strlen($campos)-2);
        $sql.= $campos . " WHERE id = ?" ;
        echo $sql;
        
        $stmt=$this->conn->prepare($sql);
        
        $stmt->execute($param);
        $this->close($stmt);
        
    }
    
    public function close($stmt) {
        $stmt->close();
        $this->conn->close();
        return true;
    }
    
    
}
