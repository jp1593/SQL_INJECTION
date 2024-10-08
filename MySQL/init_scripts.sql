--Table creation:

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    salary DECIMAL(10,2),
    position VARCHAR(50),
    age INT
);


--Users data set:
INSERT INTO users (name, salary, position, age)
VALUES
  ('John Doe', 50000.00, 'Manager', 35),
  ('Jane Smith', 65000.00, 'Engineer', 32),
  ('Michael Johnson', 48000.00, 'Designer', 28),
  ('Emily Brown', 55000.00, 'Sales', 30),
  ('David Lee', 42000.00, 'Developer', 27),
  ('Olivia Taylor', 60000.00, 'Analyst', 33),
  ('William Wilson', 52000.00, 'Marketing', 31),
  ('Sophia Garcia', 45000.00, 'HR', 29),
  ('Benjamin Anderson', 58000.00, 'Accountant', 34),
  ('Ava Miller', 49000.00, 'IT', 26);