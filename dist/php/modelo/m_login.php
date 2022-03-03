<?php
  require("../conexion.php");

  function login_usuario($email, $password){
    $con=retornarConexion();

    $result= $con->query("SELECT email, password FROM usuarios WHERE email = '$email' AND password = '$password'");
      
    //Si es correcto, el valor devuelto debe ser 1
	
    $response = new stdClass();

    if($result->num_rows == 1){  
      $response -> resultado ='OK';
    }else{  
      $response -> resultado ='NOK' ; 
    }    
    
    return $response;
  }
