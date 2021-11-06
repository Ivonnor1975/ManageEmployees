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
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateEmployee();
          break;
        case "Update an employee manager":
           updateManager();
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
 //Display all departments
 function showDepartments() {
  db.query("SELECT * FROM department ORDER BY name", function (err, res) {
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

function addDepartment() {
  inquirer.prompt(questions.addDepartmentQ).then(data = data =>{
    db.query("INSERT INTO department SET ?", {
      name: data.name
    }, function (err) {
      if (err) throw err;
      console.log("New department was added successfully!");
      // re-prompt the user with menu
      promptoptions();
    })
  })
}

function addRole() {
  qry = "SELECT id as value, name as name FROM department ORDER BY name"
  db.query(qry, function (err, listdept){
    if (err) throw err;
    inquirer.prompt(questions.addroleq(listdept)).then(data = data =>{
          db.query("INSERT INTO role SET ?", {
            title: data.titleRole,
            salary: data.salary,
            department_id: data.department_id
            },
            function (err) {
              if (err) throw err;
              console.log("New role was added successfully!");
              // re-prompt the user with menu
              promptoptions();
          })   
    })
  })
}    
function addEmployee(){
  let qrymanager = "SELECT id as value, CONCAT(first_name, ' ', last_name) as name FROM employees"
  db.query(qrymanager, function (err, employees){
        if (err) throw err;
        let qryrole = "SELECT role.id as value, title as name FROM role";
        db.query(qryrole, function (err, roles){
          if (err) throw err;
          //insert on database
          inquirer.prompt(questions.addEmployeeq(roles,employees)).then(data = data =>{
              db.query("INSERT INTO employees SET ?", {
                  first_name: data.first_name,
                  last_name: data.last_name,
                  role_id: data.role_id,
                  manager_id: data.manager_id
                  },
              function (err) {
                if (err) throw err;
                console.log("New role was added successfully!");
                // re-prompt the user with menu
                promptoptions();
            })    
          })
        })
      })      
} 



//update employee with a new role
function updateEmployee(){
  let qrymanager = "SELECT id as value, CONCAT(first_name, ' ', last_name) as name FROM employees"
  db.query(qrymanager, function (err, employees){
    if (err) throw err;
    let qryrole = "SELECT role.id as value, title as name FROM role";
    db.query(qryrole, function (err, roles){
        if (err) throw err;                            
        inquirer.prompt(questions.selectEmployeeq(roles, employees)).then(data = data =>{
          console.log(data)
          db.query("UPDATE employees SET ? WHERE ?",
                  [{
                      role_id: data.role_id
                  },
                  {
                      id: data.employee_id
                  },
              ],function (err, res) {
                  if (err) throw err;
                  console.log("The New role was update successfully!");
                  // re-prompt the user with menu
                  promptoptions();
              })
        })    
    })
  })
}

function updateManager(){
    let qrymanager = "SELECT id as value, CONCAT(first_name, ' ', last_name) as name FROM employees"
    db.query(qrymanager, function (err, employees){
        if (err) throw err;
        let managers = employees;
        inquirer.prompt(questions.selectManagerq(employees, managers)).then(data = data =>{
          console.log(data)
          db.query("UPDATE employees SET ? WHERE ?",
                  [{
                      manager_id: data.manager_id
                  },
                  {
                      id: data.employee_id
                  },
              ],function (err, res) {
                  if (err) throw err;
                  console.log("The New Manager was update successfully!");
                  // re-prompt the user with menu
                  promptoptions();
              })
        })           
    })
}

// Start app after DB connection
function init(){
  db.connect(err => {
      if (err) throw err;
  });
  promptoptions();
}

//Launch app
init();


