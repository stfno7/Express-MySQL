CREATE DATABASE libreria;
USE libreria;

CREATE TABLE clientes(
    id_clientes INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (50),
    apellido VARCHAR (50)
);

DESCRIBE clientes;

INSERT INTO clientes (nombre, apellido) values ('Maria', 'Perez');

SELECT * FROM clientes;