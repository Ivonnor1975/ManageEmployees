//define the array with questions
module.exports = {
    menuq: {
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
                'Delete a department',
                'Delete a role',
                'Delete an employee',
                'View department budgets',
                'Quit']
    },
    addDepartmentQ: {
      type: "input",
      message: "What is the department's name?",
      name: "name",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter Department name!');
          return false;
        }
      }
    },
    addroleq: (department) => [
      {
        type: "input",
        message: "What is the title of your new role?",
        name: "titleRole",
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter Title name!');
            return false;
          }
        }
      },
      {
        type: "input",
        message: "What is the salary for this role?",
        name: "salary",
        validate: salaryInput => {
          if (salaryInput > 0) {
            return true;
          } else {
            console.log('Please enter salary!');
            return false;
          }
        }
      },
      {
        type: "list",
        message: "Select a Department: ",
        name: "department_id",
        choices: department
      }],
      addEmployeeq: (roles, employees) => [{
        type: "input",
        message: "What is your employee's first name?",
        name: "first_name",
    },
    {
        type: "input",
        message: "What is your employee's last name?",
        name: "last_name",
    },
    {
        type: "list",
        message: "What is your employee's role?",
        name: "role_id",
        choices: roles
    },
    {
        type: "list",
        message: "Who is your employee's manager?",
        name: "manager_id",
        choices: employees
    }
  ],
  selectEmployeeq: (roles,employees) => [{ 
      type: "list",
      message: "Choose the employee you whish to update the role?",
      name: "employee_id",
      choices: employees
    },
    {
      type: "list",
      message: "What is your employee's new role?",
      name: "role_id",
      choices: roles
    }
    ],
    selectManagerq: (employees,managers) => [{ 
      type: "list",
      message: "Choose the employee you whish to update the manager?",
      name: "employee_id",
      choices: employees
    },
    {
      type: "list",
      message: "What is your employee's new Manager?",
      name: "manager_id",
      choices: managers
    }
    ],
    selectdepartment: (departments) =>[{
      type: "list",
      message: "What is the Department you like to delete?",
      name: "dpt_id",
      choices: departments
    }
    ],
    selectrole: (listroles) =>[{
      type: "list",
      message: "What is the Role you like to delete?",
      name: "role_id",
      choices: listroles
    }
    ],
    selectemployee: (listemployees) =>[{
      type: "list",
      message: "Choose the employee you whish to DELETE?",
      name: "employee_id",
      choices: listemployees
    }]

  };
  