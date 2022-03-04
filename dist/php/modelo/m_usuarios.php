<?php
  require("../conexion.php");

  function alta_usuario($nombre, $email, $password, $telefono, $imagen){
    $con=new Conexion;

    $con->realizarConsulta("INSERT INTO usuarios(nombreUsuario, email, telefono, perfil, contrasenia, imgUsuario) VALUES ('$nombre', '$email', '$telefono','U', '$password', '$imagen');");
    
    $response = new stdClass();
    $response->resultado = 'OK';
    $response->mensaje = 'datos grabados';

    return $response;
  }
