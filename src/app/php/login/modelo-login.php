<?php
    require 'configbd.php';

    function conectar_bd(){
        return new mysqli(HOSTNAME, USERNAME, PASSWORD, DB);
    }

    function comprobar_login(){
        $sql=conectar_bd();
        $correo=$_POST['iMail'];
        $pass=$_POST['iPass'];
        $resultado=$sql->query("SELECT idUsuario, nombreUsuario, contrasenia FROM usuarios WHERE email='".$correo."';");
        $fila=$resultado->fetch_assoc();
        if(password_verify($pass, $fila['contrasenia'])){
            $exito=true;
        }else{
            $exito=false;
        }
        return $exito;
    }