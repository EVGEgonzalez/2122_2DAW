CREATE DATABASE prueba;

USE prueba;

CREATE TABLE usuarios(
    idUsuario smallint unsigned primary key not null auto_increment,
    nombreUsuario varchar(100) not null,
    email varchar(100) not null,
    telefono char(9) not null,
    perfil char(1) not null,
    contrasenia varchar(255) not null,
    imgUsuario blob null
);