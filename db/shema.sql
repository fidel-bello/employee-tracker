DROP DATABASE IF EXISTS emptracker_db;
CREATE DATABASE emptracker_db;
USE emptracker_db;

--DEPT TABLE --
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  dept_name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id) 
);

-- ROLES TABLE--
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department (id),
  PRIMARY KEY (id)
);

-- EMPLOYEE TABLE--
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR (30) NOT NULL,
  last_name VARCHAR (30) NOT NULL,
  employee_dept VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  roles_id INT NOT NULL,
  manager_id INT, 
  FOREIGN KEY (manager_id) REFERENCES employee (id),
  FOREIGN KEY (roles_id) REFERENCES roles(id),
  PRIMARY KEY(id) 
);
 -- MANAGER TABLE-- 
CREATE TABLE manager(
  id INT NOT NULL, 
  man_name VARCHAR(30)
);
