-- Subir aquí las B.D en común.

CREATE DATABASE guadalupe_camino_ignaciano;

USE guadalupe_camino_ignaciano;

-- Creación de usuarios
CREATE TABLE usuarios(
    idUsuario smallint unsigned primary key not null auto_increment,
    nombreUsuario varchar(100) not null,
    email varchar(100) not null,
    telefono char(9) not null,
    perfil char(1) not null,
    contrasenia varchar(255) not null,
    imgUsuario blob null
);

-- Creación de cuadernos...
CREATE TABLE Cuadernos (
    idCuaderno smallint UNSIGNED AUTO_INCREMENT NOT NULL,
    idUsuario smallint UNSIGNED NOT NULL UNIQUE,
    fechaCreacion datetime NOT NULL DEFAULT NOW(),
    textoPortada varchar(100) NOT NULL,
    textoContraportada varchar(65535) NULL,
    imagen varchar(40) NULL,

    CONSTRAINT PK_idCuaderno PRIMARY KEY(idCuaderno),
    CONSTRAINT FK_idUsuario FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario) ON DELETE CASCADE
);

-- CREACIÓN DE TABLA poblaciones
CREATE TABLE poblaciones(
    idPoblacion SMALLINT UNSIGNED PRIMARY KEY NOT NULL,
    nombrePoblacion VARCHAR(80) NOT NULL,
    imagenPoblacion VARCHAR(80) NOT NULL,
    descripcion text NULL
);

-- Creación de etapas...
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

-- Creación de vivencias...
CREATE TABLE Vivencias (
    idVivencias int UNSIGNED AUTO_INCREMENT NOT NULL,
    fechaCreacion datetime NOT NULL DEFAULT NOW(),
    fechaModificacion datetime NOT NULL DEFAULT NOW(),
    imagen varchar(40) NULL,
    texto text NULL,
    idCuaderno smallint UNSIGNED NOT NULL,
    idEtapa tinyint UNSIGNED NOT NULL,
    CONSTRAINT PK_idVivencias Primary Key (idVivencias),
    CONSTRAINT FK_idCuaderno FOREIGN KEY (idCuaderno) REFERENCES Cuadernos(idCuaderno) ON DELETE CASCADE,
    CONSTRAINT FK_idEtapa FOREIGN KEY (idEtapa) REFERENCES etapas(idEtapa) ON DELETE CASCADE
);

-- CREACIÓN DE TABLA lugaresInteres
CREATE TABLE lugaresInteres (
	idLugar int UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
	idPoblacion smallint unsigned NOT NULL,
	nombreLugar varchar(200) NOT NULL,
	
	FOREIGN KEY (idPoblacion) REFERENCES poblaciones(idPoblacion) ON DELETE CASCADE
);


-- Creación de tabla población intermedia
CREATE TABLE poblacion_intermedia(
    idPoblacion SMALLINT UNSIGNED NOT NULL,
    idEtapa TINYINT UNSIGNED NOT NULL,
    orden TINYINT UNSIGNED NOT NULL,
    PRIMARY KEY(idPoblacion, idEtapa),
    CONSTRAINT FK_poblaciones FOREIGN KEY (idPoblacion) REFERENCES poblaciones(idPoblacion),
    CONSTRAINT FK_etapas FOREIGN KEY (idEtapa) REFERENCES etapas(idEtapa)
);

-- Creación de tabla de datos del camino general...
CREATE TABLE datos_camino (
    cursoEscolar char(9) NULL,
    fechaInicio date NULL,
    fechaFin date NULL,
    informacion varchar(300)
);
