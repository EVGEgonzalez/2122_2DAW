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
  

  // mysqli_query($con,"SELECT email, password FROM usuarios WHERE email='$params->emailLogin' AND password='$params->passwordLogin'");
  $resultado=mysqli_query($con,"SELECT password FROM usuarios WHERE email='$params->emailLogin';");
  $fila=$resultado->fetch_assoc();  
  
  $response = new stdClass();

  if($fila['password']==$params->passwordLogin){
    $response->resultado = 'OK';
  }else{
    $response->resultado = 'NOK';
  }

  header('Content-Type: application/json; charset=utf-8');
  echo json_encode($response);  
?>