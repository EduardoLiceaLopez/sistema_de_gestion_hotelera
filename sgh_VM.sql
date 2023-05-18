CREATE DATABASE sgh_VM;

USE sgh_VM;

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
	tipo_usuario_id INT NOT NULL

	FOREIGN KEY (tipo_usuario_id) REFERENCES tipo_usuarios(id)
);

CREATE TABLE cliente(
	usuario_id INT PRIMARY KEY,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE tipo_habitacion(
	id Int AUTO_INCREMENT PRIMARY KEY auto_increment,
	tipo Varchar(50) NOT NULL
);

CREATE TABLE habitacion(
	id Int auto_increment PRIMARY KEY,
	estado Varchar(50) NULL,
	precio Float NOT NULL,
    ubicacion Varchar(50) NOT NULL,
    tipo_habitacion_id Int NOT NULL,
	capacidad INT NOT NULL,
	FOREIGN KEY (tipo_habitacion_id) REFERENCES tipo_habitacion(id)

);

/*
CREATE TABLE reservas(
	id Int AUTO_INCREMENT NOT NULL,
	num_huespedes Char(3) NOT NULL,
	num_cuartos Char(3) NOT NULL,
	fecha_reserva Date NOT NULL,
    periodo Date NOT NULL,
    monto Float NOT NULL,
    habitacion_id Int NOT NULL,
    cliente_id Int NOT NULL,
	hora VARCHAR(50) NOT NULL,
	fech_nacimiento DATE
	PRIMARY KEY (id),
	FOREIGN KEY (habitacion_id) REFERENCES habitacion(id),
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);
*/

/*

CREATE TABLE reservas(
	id Int AUTO_INCREMENT PRIMARY KEY,
	num_huespedes varchar(3) NOT NULL,
	num_cuartos varchar(3) NOT NULL,
	fecha_reserva Date NOT NULL,
    periodo INT NOT NULL,
    monto Float NOT NULL,
    habitacion_id Int NOT NULL,
    persona_id Int NOT NULL,
	fecha_inicio DATE NOT NULL,
	fecha_final DATE NOT NULL,
	hora_registro Varchar(10),
	cantidad_habitaciones INT NOT NULL,
	FOREIGN KEY (habitacion_id) REFERENCES habitacion(id)
);

*/

CREATE TABLE reservas(
	id Int AUTO_INCREMENT PRIMARY KEY,
	num_huespedes varchar(3) NOT NULL,
	num_cuartos varchar(3) NOT NULL,
	fecha_reserva Date NOT NULL,
    periodo INT NOT NULL,
    monto FLOAT NOT NULL,
    habitacion_id Int NOT NULL,
    persona_id Int NOT NULL,
	fecha_inicio DATE NOT NULL,
	fecha_final DATE NOT NULL,
	hora_registro Varchar(10),
	cantidad_habitaciones INT NOT NULL,
	FOREIGN KEY (habitacion_id) REFERENCES habitacion(id)
);

CREATE TABLE user_access(
	id Int AUTO_INCREMENT NOT NULL,
	correo Varchar(100) NOT NULL UNIQUE,
    contrasenia Varchar(50) NOT NULL,
    usuarios_id Int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (usuarios_id) REFERENCES usuarios(id)
); 