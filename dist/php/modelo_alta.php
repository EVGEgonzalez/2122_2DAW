<?php
  require("conexion.php");

  function alta_usuario($email, $password){
    $con=retornarConexion();

    $con->query("INSERT INTO usuarios(email, password) VALUES ('$email', '$password');");
    
    $response = new stdClass();
    $response->resultado = 'OK';
    $response->mensaje = 'datos grabados';

    return $response;
  }
