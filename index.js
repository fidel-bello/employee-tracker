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
    console.log("Welcome!");
    //calling function to start app
    startApp()
});
//starting inquirer 
function startApp(){
    inquirer.prompt({})
}