
<?php



class Alta{
    public function __construct()
    {
      require_once "Conexion.php";
      $this->conexion = new Conexion();
    }

  function altaEtapas($idEtapa, $duracion, $kilometros){
        $insercion = "INSERT INTO `etapas`(`idEtapa`, `duracion`, `kilometros`, `imgEtapa`, `idPoblacionInicio`, `idPoblacionFin`) VALUES ($idEtapa,'.$duracion.', $kilometros, 'a' , 1, 2)";
        if($this->conexion->consultas($insercion)){

          return true;
        }else{
          return false;
        }


    }
  //cogemos las poblaciones de la base de datos y se las mandamos al fronted
  function poblaciones(){
    $consulta = "SELECT idPoblacion, nombrePoblacion FROM poblaciones WHERE 1";
    $resultado=  $this->conexion->consultas($consulta);
    $poblacion = array();
    while ($fila = $this->conexion->extraerFila($resultado)){
      array_push($poblacion,
        [
          "idPoblacion" => $fila["idPoblacion"],
          "nombrePoblacion"=> $fila["nombrePoblacion"]
        ]
      );
    }
    return json_encode($poblacion);

  }

}
