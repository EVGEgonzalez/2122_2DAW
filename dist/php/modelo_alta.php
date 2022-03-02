<?php
  require("conexion.php");

  function alta_usuario($email, $password, $telefono){
    $con=retornarConexion();

    $con->query("INSERT INTO usuarios(email, contrasenia, telefono) VALUES ('$email', '$password','$telefono');");
    
    $response = new stdClass();
    $response->resultado = 'OK';
    $response->mensaje = 'datos grabados';

    return $response;
  }
