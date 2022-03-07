<?php
  require("../conexion.php");

  function login_usuario($email, $password){
    $con = new Conexion;

    $con->iniciarBD();

    $result = $con->realizarConsulta("SELECT idUsuario, email, contrasenia FROM usuarios WHERE email = '$email';");
    $fila = $result->fetch_assoc();
      
    //Si es correcto, el valor devuelto debe ser 1
	
    $response = new stdClass();

    if(password_verify($password, $fila['contrasenia'])){  
      $response -> resultado ='OK';
      session_start();
      $_SESSION["idUsuario"] = $fila["idUsuario"];
    }else{  
      $response -> resultado ="NOK"; 
    }    
    
    return $response;
  }
