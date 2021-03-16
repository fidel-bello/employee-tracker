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
function startApp(){
    inquirer.prompt([
        {
            message: "What would you like to do?",
            name: "choice",
            type: 'rawlist',
            choices: [
                "View All Employees?",
                "View All Employee's By Roles?",
                "View All Employee's By Departments?",
                "Update Employees?",
                "Add Employee?",
                "Add Role?",
                "Add Department?"
            ]
        }
    ]).then(function(select){
        switch(select.choice) {
            case "View All Employees?":
                viewAll();
            break;
            case "View Alll Employee's By Roles?":
                viewAllRoles();
            break;

            case  "View All Employee's By Departments?":
                viewAllDept();
            break;
            case  "Update Employees?":
                updateEmp();
            case "Add Employee?":
                addEmp();
            break;
            case "Add Role?":
                addRole();
            break; 
            case "Add Department?":
                addDept();
            break;
        }
    })
}

function viewAll() {
    connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;",
     function (err, res){
         if (err) throw err;
         console.table(res);
         startApp();
     })
};

function viewAllRoles(){
    
}
 