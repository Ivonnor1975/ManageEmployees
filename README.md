# Manage Employees

![License](https://img.shields.io/badge/license-MIT-Blue.svg)
              

  ## Description
  As a small business owner, you will be able to view and manage the departments, roles, and employees in your company so you can organize and plan yuur business.
  
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Licence](#license)
  * [test](#test)
 
  
  ## Installation
  This application uses node.js, express, inquirer, console.table and mysql2 modules
  
  To install necessary dependecies, run the following commands: 
  1. Clone repository to local computer
  2. Install Node.Js
  3. npm init
  4. npm install express
  5. npm install inquirer
  6. npm install console.table --save
  7. npm install mysql2
  8. npm start 
  
  ## Usage
  
  WHEN launching the application, the user is presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add   an employee, and update an employee role.
  WHEN choosing to view all departments, the user is presented with a formatted table showing department names and department ids
  WHEN choosing to view all roles, the user is presented with the job title, role id, the department that role belongs to, and the salary for that role
  WHEN choosing to view all employees, the user is presented with a formatted table showing employee data, including employee ids, first names, last names, job titles,           departments, salaries.
  WHEN choosing to add a department, the user is prompted to enter the name of the department and that department is added to the database.
  WHEN choosing to add a role, the user is prompted to enter the name, salary, and department for the role and that role is added to the database.
  WHEN choosing to add an employee, the user is prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database.
  WHEN choosing to update an employee role, the user is prompted to select an employee to update and their new role and this information is updated in the database 

  ![image](https://user-images.githubusercontent.com/88918693/140844917-5b39f089-1c32-4e11-8265-037a0faae687.png)

  In addition: The following option were added.
  ![image](https://user-images.githubusercontent.com/88918693/140845054-8daf524d-13cb-48d9-b72c-e292d6a6c0c3.png)

  
  
 

  ## License
  
  This project is licensed under the MIT
  
  Link: https://opensource.org/licenses/MIT
            
   
  ## Test
  There is not test in this project.
