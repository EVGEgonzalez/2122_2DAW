
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
    return $this->conexion->validar($idEtapa, $duracion, $kilometros);
  }
  //cogemos las poblaciones de la base de datos y se las mandamos al fronted
  function poblacion(){
    echo json_encode($this->conexion->poblaciones());
  }
  //Aqui insertamos las etapas
  function etapa(){
    echo json_encode($this->conexion->etapas());
  }
  //Este es el borrado de etapas
  function borrado($idEtapa){
    echo json_encode($this->conexion->borrar($idEtapa));
  }
  //Aqui extraemos la imagen de base 64
  function decodificar($imagen64){
    echo json_encode($this->conexion->decofificacionImagenes($imagen64));
  }
  //listamos todas las poblaciones con la imagenes.
  function listar(){
    echo json_encode($this->conexion->listarPoblaciones());
  }
  function sacarEtapa(){
    echo json_encode($this->conexion->sacarIdEtapa());
  }
  function encontrarEtapa(){
    return $this->conexion->encontrarEtapa();
  }
}

