<?php

//Import del cuaderno
require_once "./controlador/c_cuadernoAPI.php";

//require_once './controlador/poblaciones_controlador.php';
require './controlador/c_vivencias.php';


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

$vivenciascontrolador = new Vivenciascontrolador();

$cuadernoControlador = new CuadernoAPI();

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
    //CUADERNO
    case 'cuaderno.alta':
        $cuadernoControlador->altaCuaderno($datosRecibidos);
        break;
    case 'cuaderno.modificar':
        $cuadernoControlador->modificarCuaderno($datosRecibidos);
        break;
    case 'cuaderno.listaVivencias':
        $cuadernoControlador->listaVivencias($datosRecibidos);
        break;
    case 'cuaderno.baja':
        $cuadernoControlador->bajaCuaderno($datosRecibidos);
        break;
    default:
        $datosEnviar["mensaje"] = "Error, acción no válida.";
        echo json_encode($datosEnviar);
        break;
};