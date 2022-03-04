<?php
	require_once '../conexion.php';

	class M_poblaciones{

		private $conexion;

        /* Función constructor */

		function __construct() {

			$this->conexion = new Conexion;

		}


		/* Metodo que realiza el alta una población */

		function altaPoblaciones($nombre, $imagen, $descripcion){

      /*Si el campo descripcion o el campo imagen está vacío se le asigna el valor NULL*/

      if(!empty($descripcion)){
        $descripcion = "'".$descripcion."'";
      }
      else{
        $descripcion = "NULL";
      }

      if(!empty($imagen)){
        $imagen = "'".$imagen."'";
      }
      else{
        $imagen = "NULL";
      }

			$consulta = "INSERT INTO poblaciones (nombrePoblacion, imagenPoblacion, descripcion) VALUES
				('".$nombre."', $imagen ,$descripcion);";


			return $this->conexion->realizarConsulta($consulta);
		}

    /* Metodo que realiza el listado de las poblaciones */
    /* Sin terminar */

  /*   function listadoPoblaciones(){
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

