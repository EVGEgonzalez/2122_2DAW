<?php

//Import del cuaderno
require_once "./controlador/c_cuadernoAPI.php";

//require_once './controlador/poblaciones_controlador.php';
require './controlador/c_vivencias.php';

//import de etapas
require_once "c_Etapas.php";
$etapascontrolador = new C_Etapas();

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
    case 'etapa.altaEtapa':
        $error=$etapascontrolador->validar($datosRecibidos["idEtapa"],$datosRecibidos["duracion"],$datosRecibidos["longitud"]);
        if (empty($error)){
            $etapascontrolador->alta("'".$datosRecibidos["idEtapa"]."'","'".$datosRecibidos["duracion"]."'","'".$datosRecibidos["longitud"]."'","'".$datosRecibidos["idPoblacionInicio"]."'","'".$datosRecibidos["idPoblacionFinal"]."'");
        }else{
            echo json_encode('algo falla');
        }
        break;
    case 'etapa.select':
        $datos = $etapascontrolador->poblacion();
        break;
    case 'etapa.selectEtapas':
        $etapascontrolador->etapa();
        break;
    case 'etapa.borrar':
        $etapascontrolador->borrado($datosRecibidos['idEtapa']);
        break;
    case 'etapa.imagen':
        $etapascontrolador->decodificar($datosRecibidos['imagen']);
        break;
    case 'etapa.listado':
        $etapascontrolador->listar();
        break;
    default:
        $datosEnviar["mensaje"] = "Error, acción no válida.";
        echo json_encode($datosEnviar);
        break;
};