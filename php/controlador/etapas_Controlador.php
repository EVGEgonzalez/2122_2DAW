
<?php
/*
class Controlador{
  public function __construct()
  {
   
  }
  function subirEtapa(){

  }
}
*/
require_once "../modelo/procesosAPP.php";
$procesos = new ProcesosAPP();
header("Access-Control-Allow-Origin:*");
header('Content-Type: application/json; charset=utf-8');

$data = json_decode(file_get_contents('php://input'), true);
$error=$procesos->validar($data["idEtapa"],$data["duracion"],$data["longitud"]);	
  if ($error==true){
    if ($procesos->altaEtapas($data["idEtapa"],$data["duracion"],$data["longitud"])){
      echo json_encode("se guardo");
    }else{
      echo json_encode("algo fallo");
    }
  }else{
      echo json_encode(print_r($error));
  }

