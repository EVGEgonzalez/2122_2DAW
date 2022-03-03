<?php
  function retornarConexion() {
    $con=new mysqli("localhost","root","","guadalupe_camino_ignaciano");
    return $con;
  }
?>