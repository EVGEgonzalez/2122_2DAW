<?php

class Modelo
{
    /* Atributo */
    protected $conexion;

    /* Constructor */
    protected function __construct()
    {
        $this->conexion = new mysqli(SERVIDOR, USUARIO, CONTRASENIA, BD);
    }

    /* Metodos */
    protected function listar()
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

    protected function insertar()
    {
        $datosRecibidos = json_decode(file_get_contents("php://input"));
        header('Access-Control-Allow-Origin: *');
        
        echo json_encode($datosRecibidos);
        //$this->conexion->query('INSERT INTO ... VALUES');
    }

    protected function actualizar()
    {
        $this->conexion->query('UPDATE ... SET  ');
    }

    protected function borrar()
    {
        $this->conexion->query('DELETE FROM ... WHERE ... ');
    }
}
