<?php
    require 'modelo-login.php';

    if(isset($_POST['iEnviar'])){
        $exito=comprobar_login();
    }

    include vista-login.php';