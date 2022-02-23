
<?php



class Alta{
    public function __construct()
    {
      require_once "Conexion.php";
      $this->conexion = new Conexion();
    }

  function altaEtapas($idEtapa, $duracion, $kilometros){
        $insercion = 'INSERT INTO `etapas`(`idEtapa`, `duracion`, `kilometros`, `imgEtapa`, `idPoblacionInicio`, `idPoblacionFin`) VALUES ($idEtapa,$duracion, $kilometros, "a" , 1, 2)';
        $this->conexion->consultas($insercion);

    }
}
