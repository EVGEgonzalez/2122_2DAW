CREATE DATABASE cuadernosDB;
USE cuadernosDB;
CREATE TABLE Usuarios (
    idUsuario smallint NOT NULL AUTO_INCREMENT,
    nombreUsuario varchar(100) NOT NULL,
    CONSTRAINT PK_idUsuario PRIMARY KEY(idUsuario)
);


CREATE TABLE Cuadernos (
    idCuaderno smallint UNSIGNED AUTO_INCREMENT NOT NULL,
    idUsuario smallint UNSIGNED NOT NULL UNIQUE,
    fechaCreacion datetime NOT NULL DEFAULT NOW(),
    textoPortada varchar(1500) NOT NULL,
    textoContraportada varchar(1500) NULL,
    imagen varchar(40) NULL,

    CONSTRAINT PK_idCuaderno PRIMARY KEY(idCuaderno),
    CONSTRAINT FK_idUsuario FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario) ON DELETE CASCADE
);


INSERT INTO usuarios(nombreUsuario) VALUES("testUser");
