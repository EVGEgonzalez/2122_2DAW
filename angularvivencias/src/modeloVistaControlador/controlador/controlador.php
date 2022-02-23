<?php
header('Access-Control-Allow-Origin: *');
require_once '../modelo/modelo.php';
class Controlador extends Modelo
{
    
    function __construct()
    {
        parent::__construct();
    }

    static function redireccionar($url)
    {
        header('Location: ' . $url);
    }

    function altaVivencia($datos)
    {
        //echo json_encode($datos);
        $this->insertar($datos);

        //$this->redireccionar('../vistas/altaVivencia.html');
    }

    function borrarVivencia()
    {
        /* $this->borrar(); */

        $this->redireccionar('../vistas/borrarVivencia.html');
    }

    function modificarVivencia()
    {
        $this->actualizar();

        $this->redireccionar('');
    }

    function listarVivencia(){

      $this->listar();

       /*  $this->redireccionar(''); */
    }
}
