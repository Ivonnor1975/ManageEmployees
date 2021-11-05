INSERT INTO department (name)
VALUES
  ('Sales'),
  ('Finance'),
  ('Legal'),
  ('Customer Service')
  ('Marketing'),
  ('IT'),
  ('HR');

INSERT INTO role (title, salary, department_id)
VALUES
  ('HR Assistant',10.15,1),
  ('Helpdesk',80.20,2),
  ('Consultant',10.20,3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1,2),
  ('Virginia', 'Woolf', 2,1),
  ('Piers', 'Gaveston', 3,1),
  ('Charles', 'LeRoi', 1, NULL);
