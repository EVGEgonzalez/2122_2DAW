<?php
    require '../modelo/m_poblaciones.php';

    $poblacionesModelo = new M_poblaciones();

    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json; charset=utf-8');

    $data = json_decode(file_get_contents('php://input'), true);

    /*Si el campo descripcion o el campo imagen está vacío se le asigna el valor NULL*/

    if(!empty($data["imagen"])){
      $data["imagen"] = "'".$data["imagen"]."'";
    }
    else{
      $data["imagen"] = "NULL";
    }

    if(!empty($data["descripcion"])){
      $data["descripcion"] = "'".$data["descripcion"]."'";
    }
    else{
      $data["descripcion"] = "NULL";
    }

    $sql = "INSERT INTO poblaciones (nombrePoblacion, imagenPoblacion, descripcion) VALUES
    ('".$data["nombre"]."', ".$data["imagen"].", ".$data["descripcion"].");";

    if(empty($data["nombre"])){
      echo json_encode('El nombre es un campo obligatorio');
    }
    else{
      if($poblacionesModelo->altaPoblaciones($sql)){
        echo json_encode('Poblacion añadida');
      }
      else{
          echo json_encode('Error al añadir la población');
      }
    }


