-- DEPARTMENT SEEDS--
INSERT INTO department (dept_name)
VALUES ("Engineering"),
       ("HR"),
       ("Sales"),
       ("Administration");

-- ROLES SEEDS -- 
INSERT INTO roles (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 1),
       ("Software Engineer", 100000, 1),
       ("Human Resources", 80000, 2),
       ("Workplace Safety", 60000, 2),
       ("Lead Sales", 100000, 3),
       ("Sales Person", 60000, 3),
       ("Front desk", 35000, 4),
       ("Front desk Assisstant", 30000, 4);

-- EMPLOYEE SEEDS --
INSERT INTO employee (first_name, last_name, employee_dept, salary, manager_id, roles_id)
VALUES ("Frank", "Hernandez", "Engineering", 150000, NULL, 1),
       ("Fidel", "Bello", "Engineering", 100000, 1 , 2),
       ("Nathan", "Peek", "Engineering", 100000, 1, 2),
       ("Diego", "Cancela", "HR", 80000, NULL, 3),
       ("Jonathan", "Lee", "HR", 60000, 4, 4),
       ("Monica", "Jorge", "Sales", 100000, NULL, 5),
       ("Carlos", "Lopez", "Sales", 60000, 6, 6),
       ("Chill", "Dude", "Administration", 35000, NULL, 7),
       ("Cool", "Bro", "Administration", 30000, 8, 8);


-- MANAGER SEEDS --
INSERT INTO manager (id, man_name)
VALUES (1, "Frank Hernandez"),
       (4, "Diego Cancela"),
       (6, "Monica Jorge"),
       (8, "Chill Dude");


-- SELECTING FROM TABLES --
SELECT * FROM employee;
SELECT * FROM roles;
SELECT * FROM department;
SELECT * FROM manager;

