
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
      if (empty($error)){
      echo json_encode($procesos->alta("'".$data["idEtapa"]."'","'".$data["duracion"]."'","'".$data["longitud"]."'","'".$data["idPoblacionInicio"]."'","'".$data["idPoblacionFinal"]."'"));
      }else{
        echo json_encode('algo falla');
      }
      break;
    case 'etapa.select':
      echo json_encode($datos = $procesos->poblacion());
      break;
    case 'etapa.selectEtapas':
      echo json_encode($procesos->etapa());
      break;
    case 'etapa.borrar':
      echo $procesos->borrado($data['idEtapa']);
      break;
    case 'etapa.imagen':
      echo json_encode($procesos->decodificar($data['imagen']));
      break;
    case 'etapa.listado':
      echo json_encode($procesos->listar());
      break;
    case 'etapa.traerModificar':
      echo json_encode($procesos->encontrarEtapa($data['id']));
      break;
    default:
      echo json_encode('error');
      break;
    }


