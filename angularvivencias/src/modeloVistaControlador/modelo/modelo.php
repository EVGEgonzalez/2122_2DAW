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
        $sql='SELECT * FROM vivencias';
        $resultado = $this->conexion->query($sql);
        /* $prueba[] = 1;
        array_push($prueba,[1,2,3,4]);
        echo json_encode($prueba); */
        $listadoVivencias = array();
        while ($fila = $resultado->fetch_array(MYSQLI_ASSOC)) {
            array_push($listadoVivencias,
            [
                "idVivencia" => $fila['idVivencias'],
                "fechaCreacion"=>$fila['fechaCreacion'],
                "fechaModificación" => $fila['fechaModificacion'],
                "rutaImagen" => $fila['rutaImagen'],
                'texto' => $fila['texto'],
                "idCuaderno" => $fila['idCuaderno'],
                "idEtapa" => $fila['idEtapa']
            ] 
        );
            
            /* $listadoVivencias = [
                "idVivencia" => $fila['idVivencias'],
                "fechaCreacion"=>$fila['fechaCreacion'],
                "fechaModificación" => $fila['fechaModificacion'],
                "rutaImagen" => $fila['rutaImagen'],
                'texto' => $fila['texto'],
                "idCuaderno" => $fila['idCuaderno'],
                "idEtapa" => $fila['idEtapa']
            ]; */
        }
        echo json_encode($listadoVivencias);
    }

    public function insertar($datosRecibidos)
    {
        $idEtapa = $datosRecibidos->idEtapa;
        $texto = $datosRecibidos->texto;
        $rutaImagen = $datosRecibidos->foto; //Falta poner bien la imagen 
        $sql = 'INSERT INTO vivencias(fechaCreacion,fechaModificacion,rutaImagen,texto,idCuaderno,idEtapa) VALUES (now(), now(), "blabla", "'. $texto .'",2,'. $idEtapa .')';
        if ($this->conexion->query($sql))
            echo json_encode('He llegado');
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
