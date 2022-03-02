<?php
  //Controlador
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);

  // if(strpos($params->emailAlta, '@')!==false)
  //   return;

  //Modelo
  require("conexion.php");
  $con=retornarConexion();
  

  mysqli_query($con,"insert into usuarios(email,password) values ('$params->emailAlta',$params->passwordAlta)");
    
  
  $response = new stdClass();
  $response->resultado = 'OK';
  $response->mensaje = 'datos grabados';

  header('Content-Type: application/json; charset=utf-8');
  echo json_encode($response);  
?>