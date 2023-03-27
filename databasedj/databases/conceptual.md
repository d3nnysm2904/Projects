### Conceptual Exercise

Answer the following questions below:

- What is PostgreSQL?
  An open source object relational database management system

- What is the difference between SQL and PostgreSQL?

  SQL Server: PostgreSQL: Basic Difference: SQL server is a database management system which is mainly used for e-commerce and providing different data warehousing solutions. PostgreSQL is an advanced version of SQL which provides support to different functions of SQL like foreign keys, subqueries, triggers, and different user-defined types and functions.

- In `psql`, how do you connect to a database?
  open psql and then \c databasename 

- What is the difference between `HAVING` and `WHERE`?
    WHERE Clause is used to filter the records from the table or used while joining more than one table.Only those records will be extracted who are satisfying the specified condition in WHERE clause. It can be used with SELECT, UPDATE, DELETE statements.

- What is the difference between an `INNER` and `OUTER` join?
  An inner join of 1 and 2 gives the result of 1 intersect 2

  An outer join of 1 and 2 gives the results of 1 union 2

- What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join?

  LEFT OUTER:This returns all the rows from the left table in conjunction with the matching rows from the right table.

  RIGHT OUTER:This returns all the rows from the right table in conjunction with the matching rows from the left table.


- What is an ORM? What do they do?

  Object-relational-mapping is the idea of being able to write queries , using the object-oriented paradigm of your preferred programming language.

  

- What are some differences between making HTTP requests using AJAX 
  and from the server side using a library like `requests`?

  HTTPS :Can be faster: 

  server side : has more protection 


- What is CSRF? What is the purpose of the CSRF token?
  
  CSRF:Cross Site Request Forgery
  A CSRF Token : is a secret, unique and unpredictable value a server-side application generates in order to protect CSRF vulnerable resources. 

- What is the purpose of `form.hidden_tag()`?
Is to create  a hidden field that includes a token used to protect the form against CSRF attacks.
