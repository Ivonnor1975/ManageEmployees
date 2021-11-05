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
   Employees Tracker.
    =================
    `);
    inquirer.prompt(question).then(options = options=>{
      switch(options.choices){
        case "View all departments":
          //showDepartments();
           break;
        case "View all roles":
          //showRoles();
          break;
        case "View all employees":
          //showEmployees();
          break;
        case "Add a department":
          //addDepartment();
          break;
        case "Add a role":
          //addRole();
          break;
        case "Add an employee":
          //addEmployee();
          break;
        case "Update an employee role":
          //updateEmployee();
          break;
        case "Update an employee manager":
          //updateManager();
          break;
        case "View employees by department":
          //employeeDepartment();
          break;
        case "Delete a department":
          //deleteDepartment();
          break;
        case "Delete a role":
          //deleteRole();
          break;
        case "Delete an employee":
          //deleteEmployee();
          break;
        case "View department budgets":
          //viewBudget();        
          break;
        case "No Action": 
         db.end(); //close database
         break;
        default:
          db.end(); //close database
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


