<?php

require_once __DIR__ . "/../configdb.php";

class CuadernoOperacionesDB {
    
    private $mysql = null;

    function iniciar() {
        return $this->mysql = new mysqli("guadalupe.fundacionloyola.net","camino_ignaciano","diuK_015","guadalupe_camino_ignaciano");
    }

    function preparar($sql) {
        return $this->mysql->prepare($sql);
    }

    /*function recogerArray($result, $tipo=MYSQLI_ASSOC) {
        return $result>fetch_array($tipo);
    }*/

    function numFilas($result) {
        return $result->num_rows;
    }

    function recogerArray($resultado, $tipo = MYSQLI_ASSOC) 
    {
        return $resultado->fetch_array($tipo);
    }
}