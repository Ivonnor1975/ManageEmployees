INSERT INTO department (name)
VALUES
  ('HR'),
  ('IT'),
  ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
  ('HR Assistant',10,1),
  ('Helpdesk',80,2),
  ('Consultant',10,3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1,0),
  ('Virginia', 'Woolf', 2,1),
  ('Piers', 'Gaveston', 3,0),
  ('Charles', 'LeRoi', 1,0);
