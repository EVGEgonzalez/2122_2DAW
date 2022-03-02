USE DATABASE guadalupe_camino_ignaciano;

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

--INSERT INTO usuarios(nombreUsuario) VALUES("testUser");


CREATE TABLE Vivencias (
    idVivencias int UNSIGNED AUTO_INCREMENT NOT NULL,
    fechaCreacion datetime NOT NULL DEFAULT NOW(),
    fechaModificacion datetime NOT NULL DEFAULT NOW(),
    imagen varchar(40) NULL,
    texto text NULL,
    idCuaderno int UNSIGNED NOT NULL,
    idEtapa tinyint UNSIGNED NOT NULL,
    CONSTRAINT PK_idVivencias Primary Key (idVivencias),
    CONSTRAINT FK_idCuaderno FOREIGN KEY (idCuaderno) REFERENCES Cuadernos(idCuaderno) ON DELETE CASCADE
    CONSTRAINT FK_idEtapa FOREIGN KEY (idEtapa) REFERENCES Etapas(idEtapa) ON DELETE CASCADE
);

 /*
                         _
                        |   servidor localhost:3306
   Datos para conectar->|   bd:guadalupe_camino_ignaciano
                        |   usuario:camino_ignaciano
                        |   contraseña:diuK_015
                        |_
*/