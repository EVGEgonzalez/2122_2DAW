
<?php
require_once "../modelo/Alta.php";
$alta = new Alta();

header("Access-Control-Allow-Origin:*");
header('Content-Type: application/json; charset=utf-8');

$data = json_decode(file_get_contents('php://input'), true);

//json_encode($alta->poblaciones());
json_encode($data["duracion"]);
 if ($alta->altaEtapas($data["idEtapa"],$data["duracion"],$data["longitud"])){
    echo json_encode("Estos datos se guardaron Correctamente");
  }else{
    echo json_encode("algo fallo");
  }
