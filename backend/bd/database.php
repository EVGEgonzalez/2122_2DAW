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
    function crearCuaderno($idUsuario, $portada, $contraportada, $imagen) {

        //Comprobamos que si hay campos vacios los ponga a NULL en la B.D
        strlen($contraportada) == 0 ? $contraportada = NULL : $contraportada;
        //strlen($imagen) == 0 ? $imagen = NULL : $imagen;

        $sql = "INSERT INTO Cuadernos(idUsuario,textoPortada, textoContraportada, imagen) VALUES(?, ?, ?, ?)";

        $consulta = $this->preparar($sql);


        $consulta->bind_param("isss", $idUsuario, $portada, $contraportada, $imagen);
        $consulta->fetch();

        //Si hay un error lo devolvemos, pero en string (para tener los tipos mejor)...
        if(!$consulta->execute()) return $this->mysql->errno;

        //Cerramos la consulta...
        $consulta->close();

        return true;
    }

    /**
     * Método que borra un cuaderno...
     * 
     */
    function borrarCuaderno($idCuaderno) {

        $sql = "DELETE Cuaderno WHERE idCuaderno=$idCuaderno";

        //Si hay un error lo devolvemos, pero en string (para tener los tipos mejor)...
        if(!$this->mysql->query($sql)) return $this->mysql->errno;

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