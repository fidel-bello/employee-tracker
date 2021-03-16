/*dept seeds*/

INSERT INTO department (name)
VALUE("Sales");
INSERT INTO department(name)
VALUE("Engineering");
INSERT INTO department(name)
VALUE("HR");
INSERT INTO department(name)
VALUE("QA");


/*role seeds*/
INSERT INTO role (title, salary, department_id)
VALUE("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUE("Software Engineer", 100000, 2);
INSERT INTO role (title, salary, department_id)
VALUE("Lead Sales", 120000, 1);
INSERT INTO role (title, salary, department_id)
VALUE("Sales Person", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Head of Human Resources", 90000, 3);
INSERT INTO role (title, salary, department_id)
VALUE("Workplace Safety", 60000, 3);
INSERT INTO role(title, salary, department_id)
VALUE("Quality Assurance", 70000, 4);

/*employee seeds*/

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE("Frank", "Hernandez", NULL, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE("Fidel", "Bello", NULL, 2);
INSERT INTO employee(first_name, last_name, manager_id, role_id)
VALUE ("Speedy", "Gonzales", 3, 7);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE("Nathan", "Peek", NULL, 2);
INSERT INTO employee(first_name, last_name, manager_id, role_id)
VALUE("Billy", "Phillips", NULL, 3);
INSERT INTO employee(first_name, last_name, manager_id, role_id)
VALUE("Monica", "Jorge", NULL, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE("Boki", "My Dog", NULL, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Cool", "Dude", NULL, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE("Awesome", "Guy", NULL, 7);

/*selection*/
SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;