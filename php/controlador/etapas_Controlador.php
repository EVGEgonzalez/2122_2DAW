
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

switch ($data['accion']) {
  case 'altaEtapa':
    $error=$procesos->validar($data["idEtapa"],$data["duracion"],$data["longitud"]);
    if (empty($error)){
      if ($procesos->altaEtapas("'".$data["idEtapa"]."'","'".$data["duracion"]."'","'".$data["longitud"]."'","'".$data["idPoblacionInicio"]."'","'".$data["idPoblacionFinal"]."'")){

        echo json_encode("Se guardo correctamente");
      }else{
        echo json_encode("algo fallo");

      }
    }else{
      echo json_encode("No se pudieron guardar los datos");

    }
    break;
  case 'select':
    $datos = $procesos->poblaciones();
    echo json_encode($datos);
      break;
  case 'selectEtapas':
    $datos = $procesos->etapas();
    echo json_encode($datos);
    break;  
  case 'borrar':
   $datos=$procesos->borrar($idEtapa);
  break;  
  default:
    
    break;
  }


