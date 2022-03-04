<?php
  require '../modelo/m_login.php';

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: *");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);

  $response=login_usuario($params->emailLogin, $params->passwordLogin);

  header('Content-Type: application/json; charset=utf-8');
  echo json_encode($response);  
?>