
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
  require_once "c_Etapas.php";
  $procesos = new C_Etapas();
  header("Access-Control-Allow-Origin:*");
  header('Content-Type: application/json; charset=utf-8');

  $data = json_decode(file_get_contents('php://input'), true);

  switch ($data['accion']) {
    case 'altaEtapa':
      $error=$procesos->validar($data["idEtapa"],$data["duracion"],$data["longitud"]);
      if (empty($error)){
      echo json_encode($procesos->altaEtapas("'".$data["idEtapa"]."'","'".$data["duracion"]."'","'".$data["longitud"]."'","'".$data["idPoblacionInicio"]."'","'".$data["idPoblacionFinal"]."'"));
      }
      break;
    case 'select':
      echo json_encode($datos = $procesos->poblaciones());
      break;
    case 'selectEtapas':
      echo json_encode($procesos->etapas());
      break;  
    case 'borrar':
      echo $procesos->borrar($data['idEtapa']);
      break;
    case 'imagen':
      echo json_encode($procesos->decofificacionImagenes($data['imagen']));
      
      break;    
    default:
      echo json_encode('error');
      break;
    }


