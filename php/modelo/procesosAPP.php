
<?php



class procesosAPP{
    public function __construct()
    {
      require_once "procesosBD.php";
      $this->conexion = new procesosBD();
    }
  function altaEtapas($idEtapa, $duracion, $kilometros){
      $insercion = "INSERT INTO `etapas`(`idEtapa`, `duracion`, `kilometros`, `imgEtapa`, `idPoblacionInicio`, `idPoblacionFin`) VALUES ($idEtapa,$duracion, $kilometros, 'a' , 1, 2)";
      if($this->conexion->consultas($insercion)){
        return true;
      }else{
        return false;
      }
    }
  function validar($idEtapa, $duracion, $kilometros){
    $error=[];
    if(!isset($idEtapa)){
      $error[]="idEtapa no puede estar vacio";
    }else{
      if(strlen($idEtapa)<1 || strlen($idEtapa)>2){
        $error[]="El formato de idEtapa es inválido";
      }
    }
    if(!isset($duracion)){
      $error[]="el campo duracion no puede estar vacio";
    }else{
      if(preg_match('/^[0-9]?[0-9]?[0-9]:[0-5][0-9]$/',$duracion)==0){
        $error[]="El formato del campo duracion es inválido";  
      }
    }
    if(!isset($kilometros)){
      $error[]="el campo longitud no puede estar vacio";
    }else{
      if(preg_match('/^\d{1,4}(\,\d{1,3})?[ ]?km$/',$kilometros)==0){
        $error[]="El formato del campo longitud es inválido";  
      } 
    }
    return $error;      
  }
  
    
}
