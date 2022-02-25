
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



if($data['nombre']=='altaEtapa'){
  $error=$procesos->validar($data["idEtapa"],$data["duracion"],$data["longitud"]);
  if (empty($error)){
    if ($procesos->altaEtapas("'".$data["idEtapa"]."'","'".$data["duracion"]."'","'".$data["longitud"]."'","'".$data["idPoblacionInicio"]."'","'".$data["idPoblacionFinal"]."'")){

      echo json_encode("Se guardo correctamente");
    }else{
      echo json_encode("algo fallo");

    }
  }else{
    echo json_encode($error);
  }
}else{
  $datos = $procesos->poblaciones();
  echo json_encode($datos);
}

