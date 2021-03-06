:: Autor: Sergio Matamoros Delgado <smatamorosdelgado.guadalupe@alumnado.fundacionloyola.net>
:: Licencia: GPL v3
:: Descripción: Mueve tu solución de angular a la carpeta indicada (por defecto en raíz de htdocs)

@echo off

:: Poner aquí la ruta de tu directorio raíz (donde está el proyecto de angular entero)
SET directorioSolucion=D:\Program Files\xampp\htdocs\2122_2DAW\dist\camino-ignaciano

:: Poner aquí la ruta de tu directorio raíz (donde está el proyecto de angular entero)
SET directorioAMover=D:\Program Files\xampp\htdocs\camino-ignaciano

echo "Vaciando la carpeta a mover..."
cd %directorioAMover% & del *.* /Q

echo "Moviendo solución de angular al directorio: %directorioAMover%"
xcopy %directorioSolucion% %directorioAMover% /E
::PAUSE