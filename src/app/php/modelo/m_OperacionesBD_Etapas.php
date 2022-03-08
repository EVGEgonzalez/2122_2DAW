<?php

require_once __DIR__ . "/../conexion.php";

class M_Etapas_Operaciones{


    function __construct() {
        //include "../configdb.php"; (Ya no es necesario ya que se utiliza conexion.php)
        
        //$this->mysqli = new mysqli(SERVIDOR,USUARIO,CONTRASENA,BASEDATOS);

        //Llamada a base de datos común...
        $conexion = new Conexion();
        $this->mysqli = $conexion->iniciarBD();
    }
    public function consultas($consulta){

        return  $this->resultado=$this->mysqli->query($consulta);
    }

    public function extraerFila($resultado){
        return $this->fila =$resultado->fetch_array();
    }
    public function consultasMultiple($consulta){

        $this->resultado=$this->mysqli->multi_query($consulta);
    }
    public function  filasAfectadas(){
         return $this->mysqli->affected_rows;


    }
    public function  numeroFilas($resultado){
        return $numeroFilas = $resultado->num_rows;


    }
  public function ultimoInsert_id(){
    return $this->mysqli->insert_id;
  }

    public function error(){

        return  $this->mysqli->error;
    }

    public function errno(){

        return  $this->mysqli->errno;
    }

    public function cerrarConexion(){
        $this->mysqli->close();
    }
}
