DROP DATABASE IF EXISTS mysqlSeinfeldDB;
CREATE DATABASE mysqlSeinfeldDB;

USE mysqlSeinfeldDB;

CREATE TABLE actors(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  coolness_points INT default 0,
  attitude VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO actors (name, coolness_points, attitude)
VALUES ("Jerry Seinfeld", 110, "funny"), ("Elanie Banes", 99, "happy"), ("Kranmer", 98, "weird"), ("George Constanza", 100, "grumpy");
SELECT * FROM actors;  
