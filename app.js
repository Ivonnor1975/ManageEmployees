//import database
const db = require('./db/connection');
// import inquirer 
const inquirer = require('inquirer');
// import console.table
const cTable = require('console.table'); 
//console.table(rows);

//define the array with questions
const question= [
  {
    type: 'list',
    name: 'choices', 
    message: 'What would you like to do?',
    choices: ['View all departments', 
              'View all roles', 
              'View all employees', 
              'Add a department', 
              'Add a role', 
              'Add an employee', 
              'Update an employee role',
              'Update an employee manager',
              "View employees by department",
              'Delete a department',
              'Delete a role',
              'Delete an employee',
              'View department budgets',
              'No Action']
  }
]

//inquirer prompt for first action
const promptoptions = () => {
    console.log(`
    =================
    Manage Employees
    =================
    `);
    inquirer.prompt(question).then(options = options=>{
      switch(options.choices){
        case "View all departments":
          //showDepartments();
          promptoptions();
          break;
        case "View all roles":
          //showRoles();
          promptoptions();
          break;
        case "View all employees":
          //showEmployees();
          promptoptions();
          break;
        case "Add a department":
          //addDepartment();
          promptoptions();
          break;
        case "Add a role":
          //addRole();
          promptoptions();
          break;
        case "Add an employee":
          //addEmployee();
          promptoptions();
          break;
        case "Update an employee role":
          //updateEmployee();
          promptoptions();
          break;
        case "Update an employee manager":
          //updateManager();
          promptoptions();
          break;
        case "View employees by department":
          //employeeDepartment();
          promptoptions();
          break;
        case "Delete a department":
          //deleteDepartment();
          promptoptions();
          break;
        case "Delete a role":
          //deleteRole();
          promptoptions();
          break;
        case "Delete an employee":
          //deleteEmployee();
          promptoptions();
          break;
        case "View department budgets":
          //viewBudget();
          promptoptions();
          break;
        case "No Action":  
         return;
        }
    });
 };


// Start app after DB connection
function init(){
  db.connect(err => {
      if (err) throw err;
  });
  promptoptions();
}

init();


