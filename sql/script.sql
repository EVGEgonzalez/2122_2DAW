CREATE DATABASE cuadernosDB;
USE cuadernosDB;
CREATE TABLE Usuarios (
    idUsuario smallint NOT NULL AUTO_INCREMENT,
    nombreUsuario varchar(100) NOT NULL,
    CONSTRAINT PK_idUsuario PRIMARY KEY(idUsuario)
);


CREATE TABLE Cuadernos (
    idCuaderno int UNSIGNED AUTO_INCREMENT NOT NULL,
    idUsuario smallint NOT NULL,
    fechaCreacion datetime NOT NULL DEFAULT NOW(),
    titulo varchar(100) NOT NULL,
    dedicatoria varchar(255) NULL,

    CONSTRAINT PK_idCuaderno PRIMARY KEY(idCuaderno),
    CONSTRAINT FK_idUsuario FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario) ON DELETE CASCADE
);

-- Insertar usuario por defecto...
INSERT INTO usuarios(nombreUsuario) VALUES("testUser");