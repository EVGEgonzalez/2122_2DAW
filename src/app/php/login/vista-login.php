<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <!-- <link rel="stylesheet" href="css/estilo.css"/> -->
        <title>Login</title>
    </head>
    <body>
        <!-- El name del submit que sea iEnviar -->
        <header></header>
        <main>
            <form action="index.php" class="form-login" method="post">
                <h5>Login</h5>
                <?php
                    if(isset($exito)){
                        if($exito){
                            echo 'Inicio de sesión correcto';
                        }else{
                            echo 'El correo y/o la contraseña son incorrectos';
                        }
                    }
                ?>
                <input class="controles" type="text" name="iMail" placeholder="Correo">
                <input class="controles" type="password" name="iPass" placeholder="Contraseña">
                <input class="botones" type="submit" name="iEnviar" value="Ingresar">        
                <a href="index.php?reset">dasdas</a>        
            </form>
        </main>
    </body>
</html>