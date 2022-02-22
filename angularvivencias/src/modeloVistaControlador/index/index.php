<?php
header('Access-Control-Allow-Origin: *');

require_once '../controlador/controlador.php';
$controlador = new Controlador();

/* var_dump($instancia); */
$datosRecibidos = json_decode(file_get_contents("php://input"));
echo json_encode($datosRecibidos[0]);
/* switch($datosRecibidos->accion){
    case "vivencias.alta":
        echo json_encode('entraaa aaa');
        //$controlador->altaVivencia($datosRecibidos->datos);
        break;
} */

/* if (isset($_POST['alie'])) {
    $controlador->altaVivencia();
}

if (isset($_POST[''])) {
    
}

if (isset($_POST['borrar'])) {
    $controlador->borrarVivencia();
}

if (isset($_POST[''])) {
    
}

if (isset($_POST[''])) {
    
} */