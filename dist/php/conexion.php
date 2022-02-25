<?php
  function retornarConexion() {
    $con=new mysqli("localhost","root","","pruebas");
    return $con;
  }
?>