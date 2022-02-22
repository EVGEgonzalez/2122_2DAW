<?php

require_once __DIR__ . "/metodos.php";

class Database extends Metodos {
    
    private $mysql = null;

    /**
     * Iniciamos la Base de datos con los datos del config...
     */
    function __construct()
    {
        $this->mysql = $this->iniciar();
    }

    /**
     * Método que crea un cuaderno...
     * 
     */
    function crearCuaderno($idUsuario, $titulo = "Cuaderno Ignaciano", $dedicatoria = "Dedicatoria...") {

        $sql = "INSERT INTO cuadernos(idUsuario,titulo, dedicatoria) VALUES($idUsuario, '$titulo', '$dedicatoria')";

        //Si hay un error lo devolvemos, pero en string (para tener los tipos mejor)...
        if(!$this->mysql->query($sql)) return "" . $this->mysql->errno;

        return true;
    }

    /**
     * Método que borra un cuaderno...
     * 
     */
    function borrarCuaderno($idCuaderno) {

        $sql = "DELETE idCuaderno FROM Cuaderno;";

        //Si hay un error lo devolvemos, pero en string (para tener los tipos mejor)...
        if(!$this->mysql->query($sql)) return "" . $this->mysql->errno;

        return true;
    }

    /**
     * Método que comprueba si un usuario ya existe en el sistema...
     * @param $idUsuario -> id del usuario a comprobar
     */
    function usuarioExiste($idUsuario) {
        $sql = "SELECT idUsuario FROM usuarios WHERE idUsuario=$idUsuario";

        $consulta = $this->mysql->query($sql);

        if(!$consulta) return $this->mysql->errno;

        //Comprobamos si hay más de una fila...
        if($this->numFilas($consulta) > 0) return true;

        return false;
    }

    
}