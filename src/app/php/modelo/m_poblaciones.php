<?php
	require_once '../conexion.php';

	class M_poblaciones{

		private $conexion;

        /* Función constructor */

		function __construct() {

			$this->conexion = new Conexion;

		}


		/* Metodo que realiza el alta una población */

		function altaPoblaciones($sql){
			return $this->conexion->realizarConsulta($sql);
		}

    /* Metodo que realiza el listado de las poblaciones */
    /* Sin terminar */

    /*function listadoPoblaciones(){
        $consulta = "SELECT * FROM poblaciones;";

        $resultado = $this->conexion->realizarConsulta($consulta);

        $poblaciones = array();

        while($fila = $resultado->fetch_array(MYSQLI_ASSOC)){
          array_push($poblaciones, [
              "nombrePoblacion" => $fila["nombre"],
              "descripcion" => $fila["descripcion"]
          ]);
        }
          echo json_encode($poblaciones);
      } */
    }

