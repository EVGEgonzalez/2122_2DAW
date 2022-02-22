<?php
    /* script de inserción de datos para hacer pruebas */

    //Conectamos con la BD
    $sql=new mysqli('localhost', 'root', '', 'prueba_usuario');
    //Preparamos la consulta
    $consulta=$sql->prepare("INSERT INTO usuarios (nombreUsuario, email, telefono, perfil, contrasenia) 
    VALUES (?, ?, ?, ?, ?);");
    $consulta->bind_param("sssss", $nombreUsuario, $email, $telefono, $perfil, $contrasenia);
    for($i=0; $i<10; $i++){
        $nombreUsuario='Usuario_'.$i;
        $email='usuario'.$i.'@fundacionloyola.net';
        $telefono='666666666';
        if($i==3||$i==7){
            $perfil='a';
        }elseif($i==2||$i==8){
            $perfil='p';
        }else{
            $perfil='e';
        }
        $contrasenia='Clave'.$i;
        $contrasenia=password_hash($contrasenia, PASSWORD_DEFAULT);
        $consulta->execute();
        //Debug
        echo '<p>'.$nombreUsuario.'-'.$contrasenia.'</p>';
    }