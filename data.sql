-- Utilizar usarios con los privilegios suficientes
-- En caso que la DB ya exista, se elimina
DROP DATABASE IF EXISTS RDS_FirstExample;
-- Crea la base de datos RDS_FirstExample
CREATE DATABASE RDS_FirstExample;
-- Las queries/comandos usadas a continuación serán ejecutadas
-- dentro del contexto de RDS_FirstExample
USE RDS_FirstExample;
-- Crea la tabla Students
CREATE TABLE Students (
  -- El valor ID se auto-incrementará en cada inserción
  ID INT NOT NULL AUTO_INCREMENT,
  FirstName VARCHAR(50) NOT NULL,
  LastName VARCHAR(50) NOT NULL,
  PhoneNumber INT NOT NULL,
  CONSTRAINT Students_PK PRIMARY KEY (ID)
);
-- Inserta valores a la table Students
-- No especifica ID ya que es auto-incremental
INSERT INTO
  Students (FirstName, LastName, PhoneNumber)
VALUES
  ("Alan", "Turing", 123456789),
  ("Bill", "Gates", 85329182),
  ("Ada", "Lovelace", 942914223);