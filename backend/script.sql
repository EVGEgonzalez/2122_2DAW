CREATE DATABASE cuadernosDB;
USE cuadernosDB;
CREATE TABLE Usuarios (
    idUsuario smallint NOT NULL AUTO_INCREMENT,
    nombreUsuario varchar(100) NOT NULL,
    CONSTRAINT PK_idUsuario PRIMARY KEY(idUsuario)
);


CREATE TABLE Cuadernos (
    idCuaderno int UNSIGNED AUTO_INCREMENT NOT NULL,
    idUsuario smallint NOT NULL UNIQUE,
    fechaCreacion datetime NOT NULL DEFAULT NOW(),
    textoPortada varchar(100) NOT NULL,
    textoContraportada varchar(65535) NULL,
    imagen varchar(40) NULL,

    CONSTRAINT PK_idCuaderno PRIMARY KEY(idCuaderno),
    CONSTRAINT FK_idUsuario FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario) ON DELETE CASCADE
);

INSERT INTO usuarios(nombreUsuario) VALUES("testUser");