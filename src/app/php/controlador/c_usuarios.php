<?php
  require_once '../modelo/m_usuarios.php';

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: *");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  $passwordEncriptada=password_hash("Curso2122", PASSWORD_DEFAULT);

  $response=alta_usuario($params->nombre, $params->emailAlta, $passwordEncriptada, $params->telefono, $params->imagen);

  header('Content-Type: application/json; charset=utf-8');
  echo json_encode($response);  
  die();
?>