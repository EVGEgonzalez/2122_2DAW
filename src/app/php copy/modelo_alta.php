<?php
  require("conexion.php");

  function alta_usuario($email, $password){
    $con=retornarConexion();

    $con->query($con,"insert into usuarios(email,password) values ('$email','$password')");
    
    $response = new stdClass();
    $response->resultado = 'OK';
    $response->mensaje = 'datos grabados';

    return $response;
  }
