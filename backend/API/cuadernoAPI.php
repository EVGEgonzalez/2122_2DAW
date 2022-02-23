<?php

/**
 * Autor: Sergio Matamoros Delgado
 * Descripción: Creación de un nuevo cuaderno usando los datos enviados por el cliente...
 */

require_once __DIR__ . "/../bd/database.php";

class CuadernoAPI {

    private $bd = null;

    function __construct()
    {
        $this->bd = new Database();
        
    }

    /**
     * Método que da de alta un nuevo cuaderno...
     */
    function altaCuaderno($data) {
        //Comprobamos que es un usuario valido
        $usuarioValido = $this->bd->usuarioExiste($data->token);

        //Si el título está vacío mandamos error...
        if(empty($data->portada)) {
            
            $datosEnviar = $this->comprobarUsuario(9022);
            //Enviar respuesta a cliente...
            echo json_encode($datosEnviar);
            die();
        } 

        //Comprobamos que el usuario existe
        if($usuarioValido) {

            //Creación cuaderno en la base de datos...
            //Devuelve true si es válido la acción y los datos se subieron correctamente
            //Devuelve código de error si hubo algún tipo de error.
            $esCorrecto = $this->bd->crearCuaderno($data->token, $data->portada, $data->textoContraportada, $data->imagen);

            // /!\ NO TOCAR /!\
            //Devuelve los mensajes tanto de error como de éxito al cliente....
            $datosEnviar = $this->comprobarUsuario($esCorrecto);
            
        } else {
            $datosEnviar["resultado"] = "NOK";
            $datosEnviar["mensaje"] = "Error, el usuario no existe...";
        }

        //Enviar respuesta a cliente...
        echo json_encode($datosEnviar);
        die();
    }

    /**
     * Envia los datos correspondientes al cliente...
     * @param data -> id del cuaderno...
     */
    function listaVivencias($data) {
        //Comprobamos que es un usuario valido
        $cuadernoValido = $this->bd->cuadernoExiste($data->token);

        if($cuadernoValido) {

            $resultado = $this->bd->listarCuadernoVivencias($data->token);

            $arrayListado = array();

            //Iterar sobre cada resultado...
            while($fila = $this->bd->recogerArray($resultado)) {
                array_push($arrayListado, $fila);
            }
            
        } else {
            $datosEnviar["resultado"] = "NOK";
            $datosEnviar["mensaje"] = "Error, el cuaderno no existe...";
        }

        //Enviar datos al cliente...
        echo json_encode($arrayListado);
        die();
    }

    /**
     * Método que da de baja un cuaderno
     */
    function bajaCuaderno($data) {
        //Comprobamos que es un usuario valido
        $usuarioValido = $this->bd->usuarioExiste($data->token);

        //Comprobamos que el usuario existe
        if($usuarioValido) {

            $esCorrecto = $this->bd->borrarCuaderno($data->token);

            // /!\ NO TOCAR /!\
            //Devuelve los mensajes tanto de error como de éxito al cliente....
            $datosEnviar = $this->comprobarUsuario($esCorrecto);
            
            
        } else {
            $datosEnviar["resultado"] = "NOK";
            $datosEnviar["mensaje"] = "Error, el usuario no existe...";
        }

        //Enviar respuesta a cliente...
        echo json_encode($datosEnviar);
        die();
    }
    
    /**
     * Función que comprueba si el usuario es válido...
     * @param esCorrecto Parámetro a pasar con la información de si hubo un error, ó no...
     * @return Array- devuelve un array con los mensajes de éxito ó error.
     */
    function comprobarUsuario($esCorrecto, $mensajeDatosOK = "Datos añadidos correctamente...", $mensajeRepetido = "Error, ya tienes un cuaderno creado...") {

        //Comprobación de datos correctos
        if($esCorrecto === true) {
            $datosEnviar["resultado"] = "OK";
            $datosEnviar["mensaje"] = $mensajeDatosOK;
        //Dato repetido...
        } else if($esCorrecto === 1062) {
            $datosEnviar["resultado"] = "NOK";
            $datosEnviar["mensaje"] = $mensajeRepetido;
        } else if($esCorrecto === 9022) {
            $datosEnviar["resultado"] = "NOK";
            $datosEnviar["mensaje"] = "Error, hay datos necesarios que están vacios...";
        }
        //Error genérico...
        else {
            $datosEnviar["resultado"] = "NOK";
            $datosEnviar["mensaje"] = "Error $esCorrecto. Hubo un error al insertar los datos... ";
        }

        return $datosEnviar;
    }
}