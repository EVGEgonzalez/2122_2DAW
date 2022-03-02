<?php
	require_once '../conexion.php';

	class Poblaciones_modelo{

		private $conexion;

        /* Función constructor */

		function __construct() {
			
			$this->conexion = new Conexion;

		}


		/* Metodo que realiza el alta una población */

		function altaPoblaciones($nombre, $imagen, $descripcion){
			$consulta = "INSERT INTO poblaciones (nombrePoblacion, imagenPoblacion, descripcion) VALUES
				('".$nombre."', '".$imagen."' ,'".$descripcion."');";

			return $this->conexion->realizarConsulta($consulta);
		}
	}
?>
