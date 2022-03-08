
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
  header("Access-Control-Allow-Origin:*");
  header('Content-Type: application/json; charset=utf-8');
  require_once "c_Etapas.php";
  $procesos = new C_Etapas();


  $data = json_decode(file_get_contents('php://input'), true);

  switch ($data['accion']) {
    case 'etapa.altaEtapa':
      $error=$procesos->validar($data["idEtapa"],$data["duracion"],$data["longitud"]);
      if($error==null){
        $procesos->alta("'".$data["idEtapa"]."'","'".$data["duracion"]."'","'".$data["longitud"]."'","'".$data["idPoblacionInicio"]."'","'".$data["idPoblacionFinal"]."'");
      }else{
        echo json_encode($error);
      }
      break;
    case 'etapa.select':
      $datos = $procesos->poblacion();
      break;
    case 'etapa.selectEtapas':
      $procesos->etapa();
      break;
    case 'etapa.borrar':
      $procesos->borrado($data['idEtapa']);
      break;
    case 'etapa.imagen':
      $procesos->decodificar($data['imagen']);
      break;
    case 'etapa.listado':
     $procesos->listar();
      break;
    case 'etapa.sacarEtapa':
      $procesos->sacarEtapa();
      break;    
    default:
      echo json_encode('error');
      break;
    }


