<?php
//TODO cambiar sentencias sql
class Modelo {

    private $hostname = "localhost";
    private $usuario = "prueba";
    private $password = "prueba";
    private $basededatos = "phpUsuarios";
    private $conn;
    private $tabla;
    private $lista=array();

    public function __construct($tabla) {

        $this->tabla = $tabla;
        $this->conn = new mysqli($this->hostname, $this->usuario, $this->password, $this->basededatos);
    }

    public function select($condicion) {
        //Sql de busqueda no creemos que sea necesaria asegurarla ya que el usuario no tiene acceso(Deberia ser segura en segundo pensamiento)
        $sql = "Select * from " . $this->tabla . " where " . $condicion;
        
        //Lanzamiento de sql por conn
        $result = $this->conn->query($sql);
        $lista = array();
        $i = 0;
        while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $this->lista[$i++] = $row;
        }
        //Nos devuelve la lista de las cosicas que queremos buscar
        return $this->lista;
    }

    public function actualizar($obj, $obj2) {
        //Inicializacion de la variables
        $sql = "update " . $this->tabla . " SET ";
        $campos = "";
        $patron = "";
        $i = 0;
        $arrayobj = get_object_vars($obj);
        
        //Select para encontrar el id de referencia al nick.
        if ($this->tabla == "tipo") {
            $condicion = "descripcion = '" . $arrayobj["descripcion"] . "'";
        } else if ($this->tabla == "usuarios") {
            $condicion = "nick = '" . $arrayobj["nick"] . "'";
        }
        $select = $this->select($condicion);
        $arrayobj2 = get_object_vars($obj2);
        
        //Sustituimos el ID nullo al que realmente le pertenece y terminamos de contruir el nuevo objeto con los datos a cambiar
        $arrayobj2["id"] = $select[0]["id"];
        
        //Foreach para recoger y ordenar los datos para nuestra sql segura
        foreach ($arrayobj2 as $key => $value) {
            $campos .= $key . "= ?, ";
            if (is_null($value)) {
                $param[$i++] = null;
                $patron .= "s";
            } else {
            switch (gettype($value)) {
                case "string":
                    $patron .= "s";
                    $param[$i++] = $value;
                    break;
                case "object":
                    $auxobj = get_object_vars($value);
                    $patron .= "i";
                    $param[$i++] = (int) $auxobj["id"];
                    break;
                default:
                    $patron .= "i";
                    $param[$i++] = $value;
            }                
            }
        }
        
        //Preparacion de la sql para el modo seguro tambien debemos ayadir los varoles del ultimo Id ya que no podemos hacerlo en el Foreach
        $param[$i++] = $arrayobj2["id"];
        $patron.="i";
        $campos = substr_replace($campos, " ", strlen($campos) - 2);
        $sql .= $campos . " WHERE id = ?";
        $statement = $this->conn->prepare($sql);
        $statement->bind_param($patron, ...$param);
        $statement->execute();
    }

    public function insertar($obj) {
        //Inicializacion de la variables
        $campos = "";
        $patron = "";
        $valores = "(";
        $sql = "INSERT INTO " . $this->tabla . " (";
        $arrayobj = get_object_vars($obj);
        $i = 0;
        foreach ($arrayobj as $key => $value) {
            $campos .= $key . ",";

            if (is_null($value)) {
                $valores .= "?, ";
                $param[$i++] = null;
                $patron .= "s";
            } else {
                switch (gettype($value)) {
                    case "string":
                        $patron .= "s";
                        $valores .= "?, ";
                        $param[$i++] = $value;
                        break;
                    case "object":

                        $auxobj = get_object_vars($value);

                        $patron .= "i";
                        $valores .= "?, ";
                        $param[$i++] = (int) $auxobj["id"];
                        break;
                    default:
                        $patron .= "i";
                        $valores .= "?, ";
                        $param[$i++] = $value;
                }
            }
        }
        $campos = substr_replace($campos, ")", strlen($campos) - 1);
        $valores = substr_replace($valores, ")", strlen($valores) - 2);
        $sql .= $campos . " VALUES " . $valores;
        $statement = $this->conn->prepare($sql);
        //Los ... sirven para que la variable que ponemos la considere como un elemento de tamaño variable, en otras palabaras
        //que lo entienda como que estamos introduciendo varias variables.
        $statement->bind_param($patron, ...$param);
        $statement->execute();
    }

    public function delete($obj) {

        $sql = "DELETE FROM " . $this->tabla . " WHERE id=?";
        $arrayobj = get_object_vars($obj);
        $campos = "";
        $condicion = "";
        if ($this->tabla == "tipo") {
            $condicion = "descripcion = '" . $arrayobj["descripcion"] . "'";
        } else if ($this->tabla == "usuarios") {
            $condicion = "nick = '" . $arrayobj["nick"] . "'";
        }
        $select = $this->select($condicion);
        $param = $select[0]["id"];
        $sql .= $campos;
        $statement = $this->conn->prepare($sql);
        $statement->bind_param("i", $param);
        $statement->execute();
    }

}
