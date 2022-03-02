/**
 * Autor: Sergio Matamoros Delgado
 * Descripción: Ejemplo de como llamar a la API de la creación del cuaderno de bitácora...
 * Fecha: 15/02/2022
 */

"use strict";

//Estructura json:
//Acción: cuaderno.alta
//token: idUsuario

let datos = {
    "accion": "cuaderno.alta",
    "token": 1
};

const opciones = {
    method: "POST",
    body: JSON.stringify(datos)
};

//Mandamos los datos al servidor...
fetch("API/server.php", opciones)
.then(respuesta => respuesta.json())
.then(respuesta => {

    console.log(respuesta);

    document.querySelector("div").textContent = respuesta.mensaje;
})