<?php
header('Access-Control-Allow-Origin: *');
class Modelo
{
    /* Atributo */
    public $conexion;

    /* Constructor */
    public function __construct()
    {
        require '../config.php'; //Llamo al archivo de las constantes de la base de datos
        $this->conexion = new mysqli(SERVIDOR, USUARIO, CONTRASENIA, BD);
    }

    /* Metodos */
    public function listar()
    {
        $resultado = $this->conexion->query('SELECT * FROM ');

        if ($fila = $resultado->fetch_array(MYSQLI_ASSOC)) {
            $listadoVivencias []= [
                "idVivencia" => $fila['idVivencias'],
                "fechaModificación" => $fila['fechaModificacion'],
                "imagen" => $fila['Imagen'],
                'texto'=> $fila['texto'],
                "idCuaderno" => $fila['idCuaderno'],
                "idEtapa" => $fila['idEtapa']
            ];

        }
    }

    public function insertar($datosRecibidos)
    {
        //$datosRecibidos = json_decode(file_get_contents("php://input"));
        
        
        echo json_encode($datosRecibidos);
        //$this->conexion->query('INSERT INTO ... VALUES');
    }

    public function actualizar()
    {
        $this->conexion->query('UPDATE ... SET  ');
    }

    public function borrar()
    {
        $this->conexion->query('DELETE FROM ... WHERE ... ');
    }
}
