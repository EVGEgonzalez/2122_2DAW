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
    /**
     * Función consultar() para consultar la vivencia que el usuario elija.
     *
     * @param number $datosRecibidos
     * @return void
     */
    public function consultar($datosRecibidos){
        $sql='SELECT * FROM vivencias WHERE idVivencias='.$datosRecibidos->idVivencia;
        $resultado=$this->conexion->query($sql);
        $consultarVivencia=array();
        while($fila=$resultado->fetch_array(MYSQLI_ASSOC)){
            array_push($consultarVivencia,
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
        }
        echo json_encode($consultarVivencia);
    }
    /**
     * Función listar() para listar las vivencias
     */
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
    /**
     * Función insertar() para insertar una nueva vivencia
     * @param datosRecibidos es el array de datos para insertar la Vivencia
     */
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
    /**
     * Función borrar() para eliminar una vivencia
     * @param datosRecibidos es el id de la Vivencia que queremos eliminar
     */
    public function borrar($datosRecibidos)
    {
        $idVivencia=$datosRecibidos;
        $sql='DELETE FROM vivencias WHERE idVivencias='.$idVivencia;
        if($this->conexion->query($sql)){
            echo json_encode('Vivencia eliminada correctamente '.$idVivencia);
        }else{
            echo json_encode('Vivencia no se eliminó, falló la consulta');
        }
    }
}
