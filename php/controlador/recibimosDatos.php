
<?php
require_once "../modelo/Alta.php";
$alta = new Alta();

header("Access-Control-Allow-Origin:*");
header('Content-Type: application/json; charset=utf-8');
	$data = json_decode(file_get_contents('php://input'), true);
	//echo json_encode([$data["idEtapa"],$data["duracion"],$data["longitud"]] );
//echo json_encode($alta->altaEtapas($data["idEtapa"],$data["duracion"],$data["longitud"]));
 if ($alta->altaEtapas($data["idEtapa"],$data["duracion"],$data["longitud"])){
    echo json_encode("se guardo");
  }else{
    echo json_encode("algo fallo");
  }
