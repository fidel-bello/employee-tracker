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