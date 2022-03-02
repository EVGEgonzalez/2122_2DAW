<?php
  //Controlador
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);


  //Modelo
  require("conexion.php");
  $con=retornarConexion();
  
    $sql = "SELECT email, password FROM usuarios WHERE email = '$params->emailLogin' and password = '$params->passwordLogin'";  
    // $result = mysqli_query($con, $sql);
    $result=$con->query($sql);  
    // $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    // $row=$result->fetch_assoc();  
    // $count = mysqli_num_rows($result);
    $count=$result->num_rows; 
      
      
    //Si es correcto, el valor devuelto debe ser 1
	
    $response = new stdClass();

    if($count == 1){  
      $response -> resultado ='OK';
    }else{  
      $response -> resultado ='NOK' ; 
    }    

  header('Content-Type: application/json; charset=utf-8');
  echo json_encode($response);  

?>