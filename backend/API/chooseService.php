<?php
/**
 * Autor: Sergio Matamoros Delgado
 * Descripción: Accede a las diferentes opciones de la API...
 */

require_once "./cuadernoAPI.php";

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

// Recogemos los datos enviados por el cliente...
$jsonPost = file_get_contents('php://input');

// Lo convertimos en string...
$data = json_decode($jsonPost);

$api = new CuadernoAPI();

//Diferentes opciones de la API...
switch ($data->accion) {
    case 'cuaderno.alta':
        $api->altaCuaderno($data);
        break;
    case 'cuaderno.listaVivencias':
        $api->listaVivencias($data);
        break;
    case 'cuaderno.baja':
        $api->bajaCuaderno($data);
        break;
    default:
        $datosEnviar["mensaje"] = "Error, acción no válida.";

        echo json_encode($datosEnviar);
        break;
}