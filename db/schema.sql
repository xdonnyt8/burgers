### Schema

DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured boolean default false,
	PRIMARY KEY (id)
);


INSERT INTO  burgers(name) VALUE ("Hamburger");
INSERT INTO  burgers(name) VALUE ("Cheeseburger");
INSERT INTO  burgers(name) VALUE ("Bacon Cheese Burger");
INSERT INTO  burgers(name) VALUE ("McDouble");