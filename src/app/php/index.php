<?php
header('Access-Control-Allow-Origin: *');

require_once '/controlador/poblaciones_controlador.php';
require_once '/controlador/vivencias_controlador.php';

$controlador = new Controlador();

$datosRecibidos = json_decode(file_get_contents("php://input"));

/* Switch para ver que accion realizo */
switch($datosRecibidos->accion){
    case "vivencias.alta":
        $controlador->altaVivencia($datosRecibidos->datos);
        break;
    case "vivencias.listar":
        $controlador->listarVivencia();
        break;
    case "vivencias.borrar":
        $controlador->borrarVivencia($datosRecibidos->datos);
        break;
    case "vivencias.consultar":
        $controlador->consultarVivencia($datosRecibidos->datos);
        break;
} 