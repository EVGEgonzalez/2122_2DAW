<?php
header('Access-Control-Allow-Origin: *');

//require_once './controlador/poblaciones_controlador.php';
require './controlador/c_vivencias.php';

$vivenciascontrolador = new Vivenciascontrolador();

$datosRecibidos = json_decode(file_get_contents("php://input"));

/* Switch para ver que accion realizo */
switch($datosRecibidos->accion){
    case "vivencias.alta":
        $vivenciascontrolador->altaVivencia($datosRecibidos->datos);
        break;
    case "vivencias.listar":
        $vivenciascontrolador->listarVivencia();
        break;
    case "vivencias.listarEtapas":
        $vivenciascontrolador->listarEtapa();
        break;
    case "vivencias.borrar":
        $vivenciascontrolador->borrarVivencia($datosRecibidos->datos);
        break;
    case "vivencias.consultar":
        $vivenciascontrolador->consultarVivencia($datosRecibidos->datos);
        break;
};