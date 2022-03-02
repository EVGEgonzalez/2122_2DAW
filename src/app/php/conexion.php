<?php

    // Solicitamos el archivo configbd el cual contiene las constantes de la Base de datos
	  require 'configdb.php';

    /* Clase que realiza la conexion con la base de datos */

	class Conexion{

		function __construct(){
			$this->conexion = new mysqli(SERVIDOR, USUARIO, CONTRASENA, BASEDATOS);
		}

        /* Método que realiza las consultas */

        function realizarConsulta($consulta){
            return $this->conexion->query($consulta);
        }
    }
