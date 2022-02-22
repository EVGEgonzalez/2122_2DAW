<?php
require '../controlador/controlador.php';

$instancia = new Controlador();

/* var_dump($instancia); */

if (isset($_POST['alie'])) {
    $instancia->altaVivencia();
}

if (isset($_POST[''])) {
    
}

if (isset($_POST['borrar'])) {
    $instancia->borrarVivencia();
}

if (isset($_POST[''])) {
    
}

if (isset($_POST[''])) {
    
}