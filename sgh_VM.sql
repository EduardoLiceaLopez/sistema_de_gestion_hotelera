CREATE TABLE tipo_usuarios(
	id INT PRIMARY KEY auto_increment,
	nombre VARCHAR(50) NOT NULL

);

CREATE TABLE usuarios(
	id INT PRIMARY KEY auto_increment,
	nombre VARCHAR(50) NOT NULL,
	apPaterno VARCHAR(50) NOT NULL,
	apMaterno VARCHAR(50) NOT NULL,
	fech_nacimiento DATE NOT NULL,
	numTelefono VARCHAR(15) NOT NULL,
	tipo_usuario_id INT NOT NULL,

	FOREIGN KEY (tipo_usuario_id) REFERENCES tipo_usuarios(id)
);

CREATE TABLE cliente(
	usuario_id INT PRIMARY KEY,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE tipo_habitacion(
	id Int AUTO_INCREMENT NOT NULL,
	tipo Varchar(50) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE habitacion(
	id Int AUTO_INCREMENT NOT NULL,
	estado Varchar(50) NULL,
    numero_habitacion Char(3) NOT NULL,
	precio Varchar(50) NOT NULL,
    ubicacion Varchar(50) NOT NULL,
    tipo_habitacion_id Int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (tipo_habitacion_id) REFERENCES tipo_habitacion(id)
);

CREATE TABLE user_access(
	id Int AUTO_INCREMENT NOT NULL,
	correo Varchar(100) NOT NULL,
    contrasenia Varchar(50) NOT NULL,
    usuarios_id Int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (usuarios_id) REFERENCES usuarios(id)
    ); 