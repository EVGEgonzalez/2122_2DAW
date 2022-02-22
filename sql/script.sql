-- Subir aquí las B.D en común.
CREATE TABLE poblaciones(
idPoblacion SMALLINT UNSIGNED PRIMARY KEY NOT NULL,
nombrePoblacion VARCHAR(80) NOT NULL,
imagenPoblacion VARCHAR(40) NOT NULL,
descripcion text

);

CREATE TABLE etapas(
idEtapa TINYINT UNSIGNED NOT NULL PRIMARY KEY,
duracion TIME NOT NULL,
kilometros DECIMAL NOT NULL,
imgEtapa VARCHAR(40) NOT NULL,
idPoblacionInicio SMALLINT UNSIGNED,
idPoblacionFin SMALLINT UNSIGNED,
CHECK (idPoblacionInicio!=idPoblacionFin),
CONSTRAINT FK_etapaInicio FOREIGN KEY (idPoblacionInicio) REFERENCES poblaciones(idPoblacion),
CONSTRAINT FK_etapaFin FOREIGN KEY (idPoblacionFin) REFERENCES poblaciones(idPoblacion)
);

CREATE TABLE poblacion_intermedia(
idPoblacion SMALLINT UNSIGNED NOT NULL,
idEtapa TINYINT UNSIGNED NOT NULL,
orden TINYINT UNSIGNED NOT NULL,
PRIMARY KEY(idPoblacion, idEtapa),
CONSTRAINT FK_poblaciones FOREIGN KEY (idPoblacion) REFERENCES poblaciones(idPoblacion),
CONSTRAINT FK_etapas FOREIGN KEY (idEtapa) REFERENCES etapas(idEtapa)
);

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
