
1. Script de creación de la BD.

CREATE DATABASE cuaderno_ignaciano


2. Script de creación de la tabla

CREATE TABLE cuaderno_ignaciano.vivencias ( 
idVivencias INT UNSIGNED NOT NULL AUTO_INCREMENT , 
fechaCreacion DATETIME NOT NULL , 
fechaModificacion DATETIME NOT NULL , 
rutaImagen VARCHAR(40) NULL , 
texto TEXT NULL , 
idCuaderno INT UNSIGNED NOT NULL , 
idEtapa INT UNSIGNED NOT NULL , 
PRIMARY KEY (idVivencias));