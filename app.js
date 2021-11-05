//import database
const db = require('./db/connection');
// import inquirer 
const inquirer = require('inquirer');
//import module with question
const questions = require('./utils/questions.js')
// import console.table
const cTable = require('console.table'); 
//console.table(rows);


//inquirer prompt for first action
const promptoptions = () => {
    console.log(`
    =================
   Employees Tracker.
    =================
    `);
    inquirer.prompt(questions.menuq).then(options = options=>{
      switch(options.choices){
        case "View all departments":
           showDepartments();
           break;
        case "View all roles":
           showRoles();
           break;
        case "View all employees":
           showEmployees();
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
 //select all departments
 function showDepartments() {
  db.query("SELECT * FROM department", function (err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.table(res);
      promptoptions();
  });
}
// SELECT all roles
function showRoles() {
  db.query("SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department ON role.department_id = department.id", function (err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.table(res);
      promptoptions();
  });
}
 // SELECT first_name, last_name, role_id FROM employee
function showEmployees() {
  db.query("SELECT employees.id, employees.first_name, employees.last_name, role.title, role.salary, department.name AS department FROM employees LEFT JOIN role ON employees.role_id = role.id LEFT JOIN department ON role.department_id = department.id", function (err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.table(res);
      promptoptions();
  });
}

// Start app after DB connection
function init(){
  db.connect(err => {
      if (err) throw err;
  });
  promptoptions();
}

init();


