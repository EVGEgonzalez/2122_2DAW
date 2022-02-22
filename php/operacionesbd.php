<?php
    require 'configbd.php';

    class OperacionesBD{
        function __construct(){
            $sql=new mysqli($db_host, $db_username, $db_password, $db_name);
        }
    }