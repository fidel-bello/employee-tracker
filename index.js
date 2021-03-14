//node modules
const connection = require('./config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');``


//connection to mysql, if not console error
connection.connect((err) => {
    if(err) {
        console.log((err));
        return;
    }
    console.log(`connected to thread id: ${connection.threadId}`);
    //calling function to start app
    startApp();
});
//starting inquirer 
function startApp(){
    inquirer.prompt([
        {
            name: "startPrompt",
            type: 'rawlist',
            choices: [
                "View All Employees?",
                "View All Employee's By Roles?",
                "View All Employee's By Departments",
                "Update Employees",
                "Add Employee",
                "Add Role?",
                "Add Department?"
            ]
        }
    ])
}