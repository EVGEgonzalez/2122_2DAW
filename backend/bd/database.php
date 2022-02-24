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
    function crearCuaderno($idUsuario, $portada, $imagen) {

        //Comprobamos que si hay campos vacios los ponga a NULL en la B.D
        //strlen($contraportada) == 0 ? $contraportada = NULL : $contraportada;
        strlen($imagen) == 0 ? $imagen = NULL : $imagen;

        $sql = "INSERT INTO Cuadernos(idUsuario,textoPortada, imagen) VALUES(?, ?, ?)";

        $consulta = $this->preparar($sql);


        $consulta->bind_param("iss", $idUsuario, $portada, $imagen);
        $consulta->fetch();

        //Si hay un error lo devolvemos, pero en string (para tener los tipos mejor)...
        if(!$consulta->execute()) return $this->mysql->errno;

        //Cerramos la consulta...
        $consulta->close();

        return true;
    }

    /**
     * Saca el listado completo de las vivencias de un cuaderno
     */
    function listarCuadernoVivencias($idCuaderno) {
        $sql = "SELECT textoPortada, textoContraPortada, cuadernos.imagen, idEtapa
        FROM Cuadernos
        LEFT JOIN vivencias
        ON Cuadernos.idCuaderno = vivencias.idCuaderno
        WHERE Cuadernos.idCuaderno=$idCuaderno";

        $consulta = $this->mysql->query($sql);

        if(!$consulta) return $this->mysql->errno;

        return $consulta;

    }

    /**
     * Método que borra un cuaderno...
     * 
     */
    function borrarCuaderno($idCuaderno) {

        //Los de vivencias tienen que tener puesto el Borrado y modificación en cascada 
        $sql = "DELETE idCuaderno FROM Cuaderno;"; 
        

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

    /**
     * Método que comprueba si un cuaderno ya existe en el sistema...
     * @param $idCuaderno -> id del cuaderno a comprobar
     */
    function cuadernoExiste($idCuaderno) {
        $sql = "SELECT idCuaderno FROM Cuadernos WHERE idCuaderno=$idCuaderno";

        $consulta = $this->mysql->query($sql);

        if(!$consulta) return $this->mysql->errno;

        //Comprobamos si hay más de una fila...
        if($this->numFilas($consulta) > 0) return true;

        return false;
    }

    
}