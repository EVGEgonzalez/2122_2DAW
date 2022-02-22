<?php
require '../modelo/modelo.php';

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

    function altaVivencia()
    {
        $this->insertar();

        $this->redireccionar('../vistas/altaVivencia.html');
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

    function listaVivencias(){

      return $listado =json_encode($this->listar());

       /*  $this->redireccionar(''); */
    }
}
