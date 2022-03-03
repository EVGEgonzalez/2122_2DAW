<?php
  require("../conexion.php");

  function login_usuario($email, $password){
    $con=new Conexion;

    $result = $con->realizarConsulta("SELECT email, contrasenia FROM usuarios WHERE email = '$email';");
    $fila = $result->fetch_assoc();
      
    //Si es correcto, el valor devuelto debe ser 1
	
    $response = new stdClass();

    if(password_verify($password, $fila['contrasenia'])){  
      $response -> resultado ='OK';
    }else{  
      $response -> resultado ="OKn't"; 
    }    
    
    return $response;
  }
