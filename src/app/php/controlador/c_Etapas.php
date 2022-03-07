
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
      return $this->conexion->altaEtapas($idEtapa, $duracion, $kilometros, $poblacionInicio,$poblacionFinal);
    }
  function validar($idEtapa, $duracion, $kilometros){
      return $this->conexion->validar($idEtapa, $duracion, $kilometros);
  }
  //cogemos las poblaciones de la base de datos y se las mandamos al fronted
  function poblacion(){
      return $this->conexion->poblaciones();
  }
  function etapa(){
    return $this->conexion->etapas();
  }
  function borrado($idEtapa){
    return $this->conexion->borrar($idEtapa);

  }
  function decodificar($imagen64){
    return $this->conexion->decofificacionImagenes($imagen64);

  }
  function listar(){
    return $this->conexion->listarPoblaciones();
  }
}

