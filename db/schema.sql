### SCHEMA  

DROP DATABASE IF EXISTS burger_devour_db; 

CREATE DATABASE burger_devour_db;

USE burger_devour_db; 

CREATE TABLE burgers 

(
       id int NOT NULL AUTO_INCREMENT,
       burger_name varchar(255) NOT NULL,
       devour BOOLEAN DEFAULT false,
       PRIMARY KEY (id)

)


