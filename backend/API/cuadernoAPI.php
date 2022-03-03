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
        //Comprobamos que es un usuario que existe...
        $usuarioExiste = $this->bd->usuarioExiste($data->token);

        //Si la portada está vacía mandamos un error...
        if(empty($data->portada)) {
            
            $datosEnviar = $this->comprobarUsuario(9022);
            //Enviar respuesta a cliente...
            echo json_encode($datosEnviar);
            die();
        } 

        //Comprobamos que el usuario existe
        if($usuarioExiste) {


            //Creación cuaderno en la base de datos...
            //Devuelve true si es válido la acción y los datos se subieron correctamente
            //Devuelve código de error si hubo algún tipo de error.
            $esCorrecto = $this->bd->crearCuaderno($data->token, $data->portada, NULL);

            //Comprueba si se envió una imagen, de ser así la crea...
            //Además actualiza la fila del cuaderno actual con la nueva ruta...
            $this->base64AImagen($data, true);


           
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
     * Método que modifica un cuaderno...
     * @param data -> array con los datos a comprobar...
     */
    function modificarCuaderno($data) {
        //Comprobamos que el cuaderno existe.
        $usuarioExiste = $this->bd->usuarioExiste($data->token);


        if($usuarioExiste) {

            //Si el cliente solo está solicitando datos de la bd se lo damos
            if(isset($data->pidoDatos) && $data->pidoDatos) {
                $resultDatosCuaderno = $this->bd->listarCuadernoVivencias($data->token);

                $datosCuaderno = -1;

                //Si hay datos para enviar...
                if($this->bd->numFilas($resultDatosCuaderno) > 0)
                    $datosCuaderno = $this->bd->recogerArray($resultDatosCuaderno);

                //Enviamos los datos al cliente
                echo json_encode($datosCuaderno);
                die();
            }

            //Si el título no cumple los requerimientos, mandamos error.
            if(strlen($data->portada) < 5 || strlen($data->portada) > 1500) {
                
                $datosEnviar = $this->comprobarUsuario(9022);
                //Enviar respuesta a cliente...
                echo json_encode($datosEnviar);
                die();
            }

            //Comprueba si se envió una imagen, de ser así la crea...
            $rutaImagen = $this->base64AImagen($data, false);


            //Devuelve true si es válido la acción y los datos se subieron correctamente
            //Devuelve código de error si hubo algún tipo de error.
            $esCorrecto = $this->bd->modificarCuaderno($data->token, $data->portada, $rutaImagen, $data->contraportada);

            // /!\ NO TOCAR /!\
            //Devuelve los mensajes tanto de error como de éxito al cliente....
            $datosEnviar = $this->comprobarUsuario($esCorrecto);
        } else {
            $datosEnviar["resultado"] = "NOK";
            $datosEnviar["mensaje"] = "Error, el cuaderno no existe...";
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
        $usuarioExiste = $this->bd->usuarioExiste($data->token);


        $arrayListado = array();

        if($usuarioExiste) {

            $resultado = $this->bd->listarCuadernoVivencias($data->token);


            //Iterar sobre cada resultado...
            while($fila = $this->bd->recogerArray($resultado)) {
                array_push($arrayListado, $fila);
            }
            
        } else {
            $arrayListado["resultado"] = "NOK";
            $arrayListado["mensaje"] = "Error, el cuaderno no existe...";
        }

        //Enviar datos al cliente...
        echo json_encode($arrayListado);
        die();
    }

    /**
     * Método que da de baja un cuaderno
     */
    function bajaCuaderno($data) {
        //Comprobamos que el cuaderno existe
        $usuarioExiste = $this->bd->usuarioExiste($data->token);

        //Comprobamos que el usuario existe
        if($usuarioExiste) {

            $esCorrecto = $this->bd->borrarCuaderno($data->token);

            // /!\ NO TOCAR /!\
            //Devuelve los mensajes tanto de error como de éxito al cliente....
            $datosEnviar = $this->comprobarUsuario($esCorrecto);
            
            
        } else {
            $datosEnviar["resultado"] = "NOK";
            $datosEnviar["mensaje"] = "Error, el cuaderno no existe...";
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
            $datosEnviar["mensaje"] = "Hay datos que no cumplen los requerimientos mínimos, la longitud del texto debe ser mayor a 5 caracteres y menor a 100.";
        }
        //Error genérico...
        else {
            $datosEnviar["resultado"] = "NOK";
            $datosEnviar["mensaje"] = "Error $esCorrecto. Hubo un error al insertar los datos... ";
        }

        return $datosEnviar;
    }

    /**
     * Método que crea una imagen a partir de unos datos en BASE64
     * @param data Cadena en base64
     * @param modificarBD Especifica si se quiere actualizar la fila en la B.D
     * @return Ruta de la imagen...
     */
    function base64AImagen($data, $modificarBD) {
        if(isset($data->imagen) && strlen($data->imagen) > 0) {
            //Obtenemos la id del cuaderno y la recogemos mediante un fetch array
            $cuadernoId = $this->bd->recogerArray($this->bd->obtenerIdCuaderno($data->token));
            $ruta = "userAssets/cuaderno$cuadernoId[idCuaderno]";

            //Si la carpeta no existe la creamos...
            if(!file_exists($ruta))
                mkdir($ruta,0777,true);

            $file = fopen("$ruta/imagen1.png", "w+");

            //Actualizamos la fila de nuestro cuaderno con la nueva ruta
            $contraportada = null;
            if(isset($data->contraportada)) $contraportada = $data->contraportada;

            if($modificarBD)
                $this->bd->modificarCuaderno($cuadernoId["idCuaderno"], $data->portada, $ruta, $contraportada);

            $data = explode(',', $data->imagen);

            //Crear imagen
            fwrite($file, base64_decode($data[1]));
            fclose($file);

            return $ruta;
        }
        return null;
    }
}