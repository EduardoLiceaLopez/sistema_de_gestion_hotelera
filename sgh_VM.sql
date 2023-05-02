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
    tipo_usuario_id INT PRIMARY KEY,
    FOREIGN KEY (tipo_usuario_id) REFERENCES tipo_usuarios(id)

);