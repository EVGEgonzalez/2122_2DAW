<?php

require_once __DIR__ . "/../config.php";

class Metodos {
    
    private $mysql = null;

    function iniciar() {
        return $this->mysql = new mysqli(DB_HOST,DB_USER,DB_PASSWORD,DB_DATABASE);
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
}