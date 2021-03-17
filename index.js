//node modules
const connection = require('./config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

//connection to mysql, if not console error
connection.connect((err) => {
    if(err) {
        console.log((err));
        return;
    }
    console.log(`connected to thread id: ${connection.threadId}`);
    console.log("Welcome!");
    //calling function to start app
    startApp();
});

//starting inquirer 
function startApp() {
    inquirer.prompt({
        name: "choice",
        type: "rawlist",
        message: "What would you like to do?",
        choices: ["View all departments.", "View all employees.", "View all employees by department.", "View all employees by manager.", "Add employee.", "Remove employee.", "Update employee role.", "Update employee manager.", "Finish."]
    }) .then( function(res){
        switch(res.choice) {
            case "View all departments.":
                viewDept();
            break;
            case "View all employees.":
                viewEmp();
            break; 
            case "View all employees by department.":
                viewByDept();
                break;
            case "View all employees by manager.": 
                viewByManager();
            break;
            case  "Add employee.":
                addEmp();
            break;
            case "Remove employee.":
                deleteEmp();
            break;
            case "Update employee role.":
                updateEmpRole();
            break;
            case "Update employee manager.":
                UpdateManager();
            break;
            case "Finish.":
                endSession();
            break;
        }
    });
} 

// VIEW ALL DEPARTMENTS
function viewDept(){

    // SELECT PROPERTIES FROM DEPARTMENT TABLES
    connection.query("SELECT id, dept_name FROM department", 
    function(err, res){
        if(err) throw err;
        console.table('All Current Departments', res);
        startApp()
    })
}

//VIEW ALL EMPLOYEES
function viewEmp (){
    let query = "SELECT employee.id, employee.first_name, employee.last_name, employee.employee_dept, employee.salary, roles.title, man_name "
    query += "FROM employee ";
    query += "INNER JOIN roles ON employee.roles_id = roles.id ";
    query += "INNER JOIN department ON department.id = roles.department_id ";
    query += "LEFT JOIN manager ON employee.manager_id = manager.id ";
    
    connection.query(query, function(err, res){
        if (err) throw err;
        console.table('All Current Employees', res);
        startApp()
    })
    
}

//VIEW ALL EMPLOYEES BY DEPARTMENTS
function viewByDept(){
    let queryString = "SELECT department.dept_name, employee.id, employee.first_name, employee.last_name ";
    queryString += "FROM department ";
    queryString += "INNER JOIN employee ON employee.employee_dept = department.dept_name ";
    queryString += "ORDER by department.dept_name";

    connection.query(queryString, function(err, res){
        if(err) throw err;
        console.table("Employees by Department", res);
        startApp()
    })
}

function viewByManager(){
   let queryString = "SELECT manager.id, manager.man_name, employee.first_name, employee.last_name ";
   queryString += "FROM manager ";
   queryString += "INNER JOIN employee ON manager.id = employee.manager_id ";
   queryString += "ORDER BY manager.man_name";

   connection.query(queryString, function(err, res){
       if(err)throw err;
       console.table('Employee under managers', res);
       startApp()
   })
}

function endSession(){
    console.log(`Session ended by id # ${connection.threadId}`)
    connection.end()
}

function addEmp(){
    inquirer.prompt([
        {
            type: "input",
            name: "newfs",
            message: "What is the new hire's first name?"
        },
        {
            type: "input",
            name: "newls",
            message: "What is the new hire's last name?"
        },
        {
            message: "What is the new hire's department?",
            type: "rawlist",
            name: "newdept",
            choices: ["Engineering", "HR", "Sales", "Administration"],
        },
        {
            message: "What is the new hire's salary?",
            type: "input",
            name: "newsalary"
        },
        {
            message: "Who is going to be the new hire's manager?",
            type: "rawlist",
            name: "newEmpMgr",
            choices: ["Frank Hernandez", "Monica Jorge", "Diego Cancela", "Chill Dude", "Null"],
        },
        {
            message: "What is the role of the new hire?",
            type: "rawlist",
            name: "newRoles",
            choices: ['Lead Engineer', 'Software Engineer', 'Human Resources', 'Workplace Safety', 'Lead Sales', 'Sales Person', 'Front Desk', 'Front Desk Assistant'],
        },
        
    ]).then(function(choices){
        let newEmpManager = '';
        let newRole = '';

        if(choices.newEmpMgr === 'Frank Hernandez') {
            newEmpManager = 1;
        }
        if(choices.newEmpMgr === 'Diego Cancela'){
            newEmpManager = 4;
        }
        if(choices.newEmpMgr === 'Monica Jorge'){
            newEmpManager = 6;
        }
        if(choices.newEmpMgr === 'Chill Dude') {
            newEmpManager = 8;
        }
        if(choices.newEmpMgr === 'Null'){
            newEmpManager = null; 
        }
        if(choices.newRoles === 'Lead Engineer'){
            newRole = 1;
        }
        if(choices.newRoles === 'Software Engineer') {
            newRole = 2;
        }
        if(choices.newRoles === 'Human Resources'){
            newRole = 3;
        }
        if(choices.newRoles === 'Workplace Safety'){
            newRole = 4;
        }
        if(choices.newRoles === 'Lead Sales'){
            newRole = 5;
        }
        if(choices.newRoles === 'Sales Person'){
            newRole = 6;
        }
        if(choices.newRoles === 'Front Desk'){
            newRole = 7;
        }
        if(choices.newRoles === 'Front Deskt Assistant'){
            newRole = 8;
        }
        let queryString = connection.query(
            "INSERT INTO employee SET ?",
            {
                first_name: choices.newfs,
                last_name: choices.newls,
                employee_dept: choices.newdept,
                salary: choices.newsalary,
                manager_id: newEmpManager,
                roles_id: newRole
            },
            function(err, res) {
                if(err) throw err;
                console.log(res.affectedRows + ' employee added!\n');
                startApp()
            }
        )
    })
}