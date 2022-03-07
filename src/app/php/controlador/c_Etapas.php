
<?php

class C_Etapas{
    public function __construct()
    {
      require_once "../modelo/m_Etapas.php";
      $this->conexion = new M_Etapas();
      header("Access-Control-Allow-Origin:*");
      header('Content-Type: application/json; charset=utf-8');
    }
  function alta($idEtapa, $duracion, $kilometros, $poblacionInicio,$poblacionFinal){
    echo json_encode($this->conexion->altaEtapas($idEtapa, $duracion, $kilometros, $poblacionInicio,$poblacionFinal));
    }
  function validar($idEtapa, $duracion, $kilometros){
    echo json_encode($this->conexion->validar($idEtapa, $duracion, $kilometros));
  }
  //cogemos las poblaciones de la base de datos y se las mandamos al fronted
  function poblacion(){
    echo json_encode($this->conexion->poblaciones());
  }
  function etapa(){
    echo json_encode($this->conexion->etapas());
  }
  function borrado($idEtapa){
    echo json_encode($this->conexion->borrar($idEtapa));
  }
  function decodificar($imagen64){
    echo json_encode($this->conexion->decofificacionImagenes($imagen64));
  }
  function listar(){
    echo json_encode($this->conexion->listarPoblaciones());
  }
}

