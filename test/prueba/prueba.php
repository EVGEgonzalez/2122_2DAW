<?php
	header('Access-Control-Allow-Origin:*');
	
	header('Content-Type: application/json; charset=utf-8');
	
	$data = json_decode(file_get_contents('php://input'), true);
	echo json_encode([$data["nombre"],$data["descripcion"], $data["imagen"]]);
	

	//echo json_encode('holamundo');
