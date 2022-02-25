<?php
  function retornarConexion() {
    $con=mysqli_connect("localhost","root","","pruebas");
    return $con;
  }
?>