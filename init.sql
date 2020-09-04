CREATE database utenti;
USE utenti;
CREATE TABLE elenco_utenti(
ID int NOT NULL AUTO_INCREMENT,
utente TEXT,
pwd TEXT,
PRIMARY KEY (ID)

);
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'MyNewPassword';
