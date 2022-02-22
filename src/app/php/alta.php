<?php
	header('Access-Control-Allow-Origin: *');
	//echo "TRON";
	$respuesta = new stdClass();
	$respuesta->resultado = 'OK';
	$respuesta->$datos = new StdClass();
	$respuesta->$datos->atrib1 = 'El Sentido del Universo';
	$respuesta->$datos->atrib2 = 42;

	header('Content-Type: application/json; charset=utf-8');
	echo json_encode($respuesta);
