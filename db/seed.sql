/*department seeds*/
INSERT INTO department (name)
VALUE("Engineer");
INSERT INTO department(name)
VALUE("QA");
INSERT INTO department(name)
VALUE("HR");
INSERT INTO department(name)
VALUE("Sales")
/*employee roles*/
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 150000, 1);
INSERT INTO role(title, salary, department_id)
VALUE("QA", 60000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Workplace Safety", 65000, 3);
INSERT INTO role(title, salary, department_id)
VALUE("Sales Lead", 90000, 4);

/*employee seeds*/
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Frank", "Hernandez", null, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Fidel", "Bello", 1, 2);
INSERT INTO employee (first_name. last_name, manager_id, role_id)
VALUE ("Nathan", "Peek", null, 1);
INSERT INTO employee(first_name, last_name, manager_id, role_id)
VALUE ("Chill", "Dude", null, 2 );
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Tina", "Huo Zang", 1, 3);
INSERT INTO(first_name, last_name, manager_id, role_id)
VALUE("Billy", "Phillips", null, 3);
INSERT INTO employee(first_name, last_name, manager_id, role_id)
VALUE("Speedy", "Gonzalez", 2, 4);

/*selecting*/
SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
