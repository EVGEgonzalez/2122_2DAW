:: Autor: Sergio Matamoros Delgado <smatamorosdelgado.guadalupe@alumnado.fundacionloyola.net>
:: Licencia: GPL v3
:: Descripción: Compila tu solución de angular...

@echo off
Title "Compilando solución, esto puede tardar un rato..."

:: Poner aquí la ruta de tu directorio raíz (donde está el proyecto de angular entero)
SET directorioRaiz=D:\xampp\htdocs\Ejercicios\Proyectos\2122_2DAW



echo "Compilando angular en el directorio: %directorioRaiz%"
cd %directorioRaiz% & ng build --base-href caminoignaciano
PAUSE