<?php
  require 'modelo_alta.php';

  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);

  $response=alta_usuario($params->emailAlta, $params->passwordAlta, $params->$telefono);

  header('Content-Type: application/json; charset=utf-8');
  echo json_encode($response);  
?>