<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("database.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = new mysqli('localhost', 'root', '', 'pruebas'); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  $conexion->query("INSERT INTO usuarios (email, password) VALUES ('$params->email', '$params->password')");    
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE

  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO
