// src/data/dbmsQuestions.ts
import type { Question } from '../types';

export const dbmsQuestions: Question[] = [
  {
    id: 1,
    question: "What is a Database Management System (DBMS)?",
    options: [
      "A collection of related data.",
      "A software system that enables users to define, create, maintain, and control access to the database.",
      "A set of programs to access the data.",
      "A type of database."
    ],
    correctAnswer: 1,
    explanation: "A DBMS is the software that interacts with users, applications, and the database itself to capture and analyze data. The other options describe a database or a partial function of a DBMS."
  },
  {
    id: 2,
    question: "Which of the following is a primary advantage of using a DBMS?",
    options: [
      "Increased data redundancy.",
      "Reduced data integrity.",
      "Controlling data redundancy and improving data integrity.",
      "Slower data access."
    ],
    correctAnswer: 2,
    explanation: "A primary goal of a DBMS is to minimize data redundancy by storing data in a centralized manner and to enforce data integrity through constraints."
  },
  {
    id: 3,
    question: "What are the different types of languages present in a DBMS?",
    options: [
      "DDL, DML, DCL, and TCL.",
      "HTML, CSS, and JavaScript.",
      "Java, Python, and C++.",
      "Binary and Assembly."
    ],
    correctAnswer: 0,
    explanation: "DBMS languages are categorized into Data Definition Language (DDL), Data Manipulation Language (DML), Data Control Language (DCL), and Transaction Control Language (TCL)."
  },
  {
    id: 4,
    question: "What does the ACID acronym in the context of database transactions stand for?",
    options: [
      "Atomicity, Consistency, Isolation, Durability.",
      "Availability, Concurrency, Integrity, Durability.",
      "Atomicity, Concurrency, Isolation, Durability.",
      "Availability, Consistency, Integrity, Durability."
    ],
    correctAnswer: 0,
    explanation: "The ACID properties guarantee database transactions are processed reliably. Atomicity (all-or-nothing), Consistency (valid state), Isolation (transactions don't interfere), and Durability (committed transactions persist)."
  },
  {
    id: 5,
    question: "Which of the following is an example of a DDL command in SQL?",
    options: [
      "SELECT",
      "INSERT",
      "UPDATE",
      "CREATE"
    ],
    correctAnswer: 3,
    explanation: "Data Definition Language (DDL) commands are used to define the database schema. CREATE is a DDL command used to create database objects like tables. SELECT, INSERT, and UPDATE are DML commands."
  },
  {
    id: 6,
    question: "A primary key in a table must be:",
    options: [
      "Nullable.",
      "Not unique.",
      "Unique and not null.",
      "A foreign key in another table."
    ],
    correctAnswer: 2,
    explanation: "A primary key is a constraint that uniquely identifies each record in a table. It cannot have NULL values, and each value must be unique."
  },
  {
    id: 7,
    question: "What is the purpose of a foreign key?",
    options: [
      "To uniquely identify a record in a table.",
      "To link two tables together.",
      "To create an index on a table.",
      "To define the structure of a table."
    ],
    correctAnswer: 1,
    explanation: "A foreign key is a key used to link two tables together. It is a field (or collection of fields) in one table that refers to the Primary Key in another table."
  },
  {
    id: 8,
    question: "Normalization in a database is the process of:",
    options: [
      "Organizing columns and tables to minimize data redundancy.",
      "Increasing data redundancy for faster queries.",
      "Creating a single large table with all data.",
      "Removing all relationships between tables."
    ],
    correctAnswer: 0,
    explanation: "Normalization is the process of designing a database in a way that reduces data redundancy and improves data integrity by organizing tables and columns."
  },
  {
    id: 9,
    question: "Which normal form ensures that there are no partial dependencies?",
    options: [
      "First Normal Form (1NF)",
      "Second Normal Form (2NF)",
      "Third Normal Form (3NF)",
      "Boyce-Codd Normal Form (BCNF)"
    ],
    correctAnswer: 1,
    explanation: "Second Normal Form (2NF) requires a table to be in 1NF and that all non-key attributes are fully functionally dependent on the entire primary key. This eliminates partial dependencies."
  },
  {
    id: 10,
    question: "What is a view in a database?",
    options: [
      "A physical copy of a table.",
      "A virtual table based on the result-set of an SQL statement.",
      "An index on a table.",
      "A stored procedure."
    ],
    correctAnswer: 1,
    explanation: "A view is a saved SQL query that is treated as a virtual table. It does not store data itself but displays data from one or more underlying tables."
  },
  {
    id: 11,
    question: "Which SQL command is used to retrieve data from a database?",
    options: [
      "GET",
      "RETRIEVE",
      "SELECT",
      "FETCH"
    ],
    correctAnswer: 2,
    explanation: "The SELECT statement is the primary DML command used to query a database and retrieve data that matches criteria that you specify."
  },
  {
    id: 12,
    question: "What is the difference between DELETE and TRUNCATE commands?",
    options: [
      "DELETE is a DDL command, while TRUNCATE is a DML command.",
      "DELETE removes all rows from a table, while TRUNCATE can be used with a WHERE clause.",
      "TRUNCATE is faster and cannot be rolled back, while DELETE is slower and can be rolled back.",
      "There is no difference."
    ],
    correctAnswer: 2,
    explanation: "TRUNCATE is a DDL command that quickly removes all rows and typically cannot be undone. DELETE is a DML command that removes rows one by one and can be rolled back."
  },
  {
    id: 13,
    question: "Which join returns all rows when there is a match in either the left or the right table?",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL OUTER JOIN"
    ],
    correctAnswer: 3,
    explanation: "A FULL OUTER JOIN returns all records when there is a match in either the left or the right table records. It combines the results of both LEFT JOIN and RIGHT JOIN."
  },
  {
    id: 14,
    question: "What is the purpose of the GROUP BY clause in a SELECT statement?",
    options: [
      "To sort the result set.",
      "To filter the result set based on a condition.",
      "To group rows that have the same values into summary rows.",
      "To join multiple tables."
    ],
    correctAnswer: 2,
    explanation: "The GROUP BY statement groups rows that have the same values into summary rows. It is often used with aggregate functions (COUNT(), MAX(), MIN(), SUM(), AVG()) to perform calculations on each group."
  },
  {
    id: 15,
    question: "What is the difference between UNION and UNION ALL?",
    options: [
      "UNION and UNION ALL are identical.",
      "UNION removes duplicate rows, while UNION ALL includes all rows.",
      "UNION ALL is faster because it does not have to check for duplicates.",
      "Both b and c are correct."
    ],
    correctAnswer: 3,
    explanation: "UNION combines result sets and removes duplicate rows. UNION ALL also combines the result sets but includes all rows, including duplicates, making it generally faster as it skips the duplicate-checking step."
  },
  {
    id: 16,
    question: "What is a subquery in SQL?",
    options: [
      "A query that is embedded inside another query.",
      "A query that uses multiple tables.",
      "A query that uses aggregate functions.",
      "A query that is saved as a view."
    ],
    correctAnswer: 0,
    explanation: "A subquery, or inner query, is a query nested inside another SQL query, typically within a WHERE, FROM, or SELECT clause."
  },
  {
    id: 17,
    question: "Which of the following is NOT a type of database key?",
    options: [
      "Primary Key",
      "Foreign Key",
      "Super Key",
      "Simple Key"
    ],
    correctAnswer: 3,
    explanation: "While a key can be simple (composed of a single attribute), 'Simple Key' is not a standard classification of database keys like Primary, Foreign, Super, and Alternate keys."
  },
  {
    id: 18,
    question: "What does an index in a database do?",
    options: [
      "Enforces data integrity.",
      "Speeds up the performance of queries.",
      "Defines the structure of a table.",
      "Stores a backup of the database."
    ],
    correctAnswer: 1,
    explanation: "An index is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional writes and storage space."
  },
  {
    id: 19,
    question: "What is a clustered index?",
    options: [
      "An index that is not sorted.",
      "An index that determines the physical order of data in a table.",
      "An index that can only be created on a primary key.",
      "A table can have multiple clustered indexes."
    ],
    correctAnswer: 1,
    explanation: "A clustered index sorts and stores the data rows in the table or view based on their key values. Because the data is physically ordered, there can only be one clustered index per table."
  },
  {
    id: 20,
    question: "What is a non-clustered index?",
    options: [
      "An index that determines the physical order of data in a table.",
      "An index where the logical order of the index does not match the physical stored order of the rows on disk.",
      "A table can have only one non-clustered index.",
      "An index that is automatically created for every table."
    ],
    correctAnswer: 1,
    explanation: "A non-clustered index has a structure separate from the data rows. It contains pointers to the data rows. A table can have multiple non-clustered indexes."
  },
  {
    id: 21,
    question: "What is a transaction in DBMS?",
    options: [
      "A single operation on data.",
      "A logical unit of work that consists of one or more operations.",
      "A backup of the database.",
      "A user's session with the database."
    ],
    correctAnswer: 1,
    explanation: "A transaction is a sequence of operations performed as a single logical unit of work. All the operations must be completed successfully, or none of them are, to maintain database consistency."
  },
  {
    id: 22,
    question: "What is concurrency control in a DBMS?",
    options: [
      "The process of managing simultaneous operations on a database without them interfering with one another.",
      "The process of backing up the database.",
      "The process of creating new users.",
      "The process of defining the database schema."
    ],
    correctAnswer: 0,
    explanation: "Concurrency control ensures that correct results for concurrent operations are generated while getting those results as quickly as possible."
  },
  {
    id: 23,
    question: "What is a deadlock in a database?",
    options: [
      "A situation where a transaction is waiting for a resource that will never be released.",
      "A situation where two or more transactions are waiting for each other to release resources.",
      "A situation where the database server crashes.",
      "A situation where a query is very slow."
    ],
    correctAnswer: 1,
    explanation: "A deadlock is a condition where two or more transactions are blocked forever, each waiting for the other to release a lock."
  },
  {
    id: 24,
    question: "Which of the following is a way to handle deadlocks?",
    options: [
      "Deadlock prevention",
      "Deadlock detection and resolution",
      "Deadlock avoidance",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Deadlocks can be managed through prevention (designing the system to avoid them), detection and resolution (allowing them to occur and then resolving them), and avoidance (making runtime decisions to prevent them)."
  },
  {
    id: 25,
    question: "What are the different transaction isolation levels in a DBMS?",
    options: [
      "Read Uncommitted, Read Committed, Repeatable Read, Serializable.",
      "Read Only, Read Write, Read All.",
      "Level 1, Level 2, Level 3, Level 4.",
      "Low, Medium, High."
    ],
    correctAnswer: 0,
    explanation: "These are the four standard isolation levels defined by the SQL standard, which control the degree to which transactions are isolated from each other."
  },
  {
    id: 26,
    question: "What is a dirty read?",
    options: [
      "Reading data that has been modified by another transaction that has committed.",
      "Reading data that has been modified by another transaction that has not yet committed.",
      "Reading the same data twice and getting different results.",
      "Reading data that has been deleted by another transaction."
    ],
    correctAnswer: 1,
    explanation: "A dirty read occurs when a transaction reads data that has been written by another transaction that has not yet been committed. If the other transaction rolls back, the first transaction will have read data that never officially existed."
  },
  {
    id: 27,
    question: "What is a non-repeatable read?",
    options: [
      "A situation where a transaction reads the same row twice but gets different data.",
      "A situation where a transaction reads data that has been written by an uncommitted transaction.",
      "A situation where a transaction re-reads data and finds new rows that have been inserted by another transaction.",
      "A situation where a transaction cannot read a row because it has been locked."
    ],
    correctAnswer: 0,
    explanation: "A non-repeatable read occurs when, during the course of a transaction, a row is retrieved twice and the values within the row differ between reads."
  },
  {
    id: 28,
    question: "What is a phantom read?",
    options: [
      "A situation where a transaction reads the same row twice but gets different data.",
      "A situation where a transaction re-executes a query returning a set of rows and finds that additional rows have been inserted by another committed transaction.",
      "A situation where a transaction reads data that has been written by an uncommitted transaction.",
      "A situation where a transaction cannot find a row that it previously read."
    ],
    correctAnswer: 1,
    explanation: "A phantom read occurs when a transaction re-executes a query and finds that additional rows satisfying the condition have been inserted by another committed transaction."
  },
  {
    id: 29,
    question: "What is a locking protocol in a DBMS?",
    options: [
      "A set of rules to be followed by each transaction to ensure that conflicting operations are executed in a serializable manner.",
      "A mechanism to prevent unauthorized access to the database.",
      "A way to back up the database.",
      "A method for creating new tables."
    ],
    correctAnswer: 0,
    explanation: "Locking protocols are used in database management systems as a means of concurrency control. They ensure that transactions are serializable by enforcing rules about when a transaction can acquire or release locks on data."
  },
  {
    id: 30,
    question: "What is a two-phase locking (2PL) protocol?",
    options: [
      "A protocol that has two phases: a growing phase and a shrinking phase.",
      "A protocol where a transaction can acquire locks in the growing phase and release locks in the shrinking phase.",
      "Once a transaction releases a lock, it cannot acquire any new locks.",
      "All of the above."
    ],
    correctAnswer: 3,
    explanation: "The two-phase locking protocol is a concurrency control method that guarantees serializability. It has a 'growing' phase where a transaction acquires locks and a 'shrinking' phase where it only releases them."
  },
  {
    id: 31,
    question: "What is a relational data model?",
    options: [
      "A model where data is stored in a tree-like structure.",
      "A model where data is stored in tables called relations.",
      "A model where data is represented as a collection of objects.",
      "A model where data is stored in a graph-like structure."
    ],
    correctAnswer: 1,
    explanation: "The relational model, proposed by E.F. Codd, organizes data into tables of rows and columns, with a unique key for each row."
  },
  {
    id: 32,
    question: "What is an Entity-Relationship (E-R) model?",
    options: [
      "A model that describes data as entities, attributes, and relationships.",
      "A high-level conceptual data model.",
      "Used for the logical design of a database.",
      "All of the above."
    ],
    correctAnswer: 3,
    explanation: "The E-R model is a conceptual data model that views the real world as a set of entities, their attributes, and the relationships between them. It's a fundamental tool for designing a database schema."
  },
  {
    id: 33,
    question: "In an E-R diagram, what does a rectangle represent?",
    options: [
      "An entity set.",
      "An attribute.",
      "A relationship.",
      "A key."
    ],
    correctAnswer: 0,
    explanation: "In a standard E-R diagram, a rectangle represents an entity set, which is a collection of similar entities (e.g., a collection of all 'Student' entities)."
  },
  {
    id: 34,
    question: "What is the main difference between a relational (SQL) and a non-relational (NoSQL) database?",
    options: [
      "SQL databases are document-based, while NoSQL databases are table-based.",
      "SQL databases have a predefined schema, while NoSQL databases have dynamic schemas for unstructured data.",
      "SQL databases are horizontally scalable, while NoSQL databases are vertically scalable.",
      "SQL databases are better for unstructured data."
    ],
    correctAnswer: 1,
    explanation: "Relational (SQL) databases have a structured, predefined schema, whereas non-relational (NoSQL) databases are more flexible and can store unstructured or semi-structured data with a dynamic schema."
  },
  {
    id: 35,
    question: "When would you choose a NoSQL database over a SQL database?",
    options: [
      "For applications that require complex queries and multi-row transactions.",
      "When data is unstructured or has a rapidly changing schema.",
      "For legacy systems with a relational structure.",
      "When strict data consistency is the primary requirement."
    ],
    correctAnswer: 1,
    explanation: "NoSQL databases excel in handling large volumes of unstructured or semi-structured data and are more flexible with schema changes, making them ideal for agile development and evolving applications."
  },
  {
    id: 36,
    question: "What is denormalization?",
    options: [
      "The process of organizing data to minimize redundancy.",
      "The process of intentionally introducing redundancy into a table to improve query performance.",
      "The process of creating a database schema.",
      "The process of removing all indexes from a table."
    ],
    correctAnswer: 1,
    explanation: "Denormalization is the process of combining tables to reduce the number of joins required for a query, which can improve read performance at the expense of data redundancy and potential update anomalies."
  },
  {
    id: 37,
    question: "What is data warehousing?",
    options: [
      "The process of archiving old data.",
      "A system used for reporting and data analysis.",
      "The process of creating a backup of a database.",
      "A type of transactional database."
    ],
    correctAnswer: 1,
    explanation: "A data warehouse is a large, centralized repository of data that is aggregated from various sources and is used for reporting and data analysis to support business intelligence activities."
  },
  {
    id: 38,
    question: "What is the difference between OLTP and OLAP?",
    options: [
      "OLTP is used for data analysis, while OLAP is used for transaction processing.",
      "OLTP systems are designed for a large number of transactions, while OLAP systems are designed for complex queries.",
      "OLTP databases are typically denormalized, while OLAP databases are normalized.",
      "Both a and c are correct."
    ],
    correctAnswer: 1,
    explanation: "Online Transaction Processing (OLTP) systems handle day-to-day operations with many short transactions. Online Analytical Processing (OLAP) systems are for data analysis, involving fewer but more complex queries on large datasets."
  },
  {
    id: 39,
    question: "What is data mining?",
    options: [
      "The process of extracting data from a database.",
      "The process of discovering patterns in large data sets.",
      "The process of securing a database.",
      "The process of creating a database."
    ],
    correctAnswer: 1,
    explanation: "Data mining is the practice of automatically examining large pre-existing databases to generate new, previously unknown information and discover meaningful patterns and trends."
  },
  {
    id: 40,
    question: "What is database partitioning?",
    options: [
      "The process of dividing a database into smaller, more manageable parts.",
      "The process of creating a backup of a database.",
      "The process of encrypting a database.",
      "The process of granting user permissions."
    ],
    correctAnswer: 0,
    explanation: "Partitioning is the process of splitting a large table or index into smaller, more manageable pieces, which can improve performance, manageability, and availability."
  },
  {
    id: 41,
    question: "What is database sharding?",
    options: [
      "A type of database partitioning that separates very large databases into smaller parts called data shards.",
      "Sharding is a form of horizontal partitioning.",
      "It is a way to achieve horizontal scaling.",
      "All of the above."
    ],
    correctAnswer: 3,
    explanation: "Sharding is a specific type of horizontal partitioning where data is spread across multiple machines. Each machine has the same schema but contains a different subset of the data, enabling massive horizontal scaling."
  },
  {
    id: 42,
    question: "What is a stored procedure?",
    options: [
      "A set of SQL statements that can be stored in the database and reused.",
      "A virtual table based on an SQL query.",
      "A trigger that is executed automatically.",
      "A backup of the database."
    ],
    correctAnswer: 0,
    explanation: "A stored procedure is prepared SQL code that you can save, so the code can be reused over and over again. This can improve performance, security, and reusability."
  },
  {
    id: 43,
    question: "What is a database trigger?",
    options: [
      "A special type of stored procedure that automatically runs when an event occurs in the database server.",
      "A manual process to update data.",
      "A way to create a new user.",
      "A type of index."
    ],
    correctAnswer: 0,
    explanation: "Triggers are procedural code that is automatically executed in response to certain events (like INSERT, UPDATE, or DELETE) on a specified table."
  },
  {
    id: 44,
    question: "What is the CAP theorem?",
    options: [
      "A theorem that states a distributed database system can only have two of the following three guarantees: Consistency, Availability, and Partition tolerance.",
      "A theorem about database normalization.",
      "A theorem about SQL query optimization.",
      "A theorem about database security."
    ],
    correctAnswer: 0,
    explanation: "The CAP theorem states it is impossible for a distributed data store to simultaneously provide more than two out of three guarantees: Consistency, Availability, and Partition Tolerance."
  },
  {
    id: 45,
    question: "In the context of the CAP theorem, what is Consistency?",
    options: [
      "Every read receives the most recent write or an error.",
      "Every request receives a (non-error) response.",
      "The system continues to operate despite network failures.",
      "The database is always in a valid state."
    ],
    correctAnswer: 0,
    explanation: "Consistency in CAP theorem means that all clients see the same data at the same time, no matter which node they connect to. Any read request will return the most recent write."
  },
  {
    id: 46,
    question: "In the context of the CAP theorem, what is Availability?",
    options: [
      "Every read receives the most recent write or an error.",
      "Every request receives a (non-error) response – without the guarantee that it contains the most recent write.",
      "The system continues to operate despite network failures.",
      "The database is always accessible."
    ],
    correctAnswer: 1,
    explanation: "Availability means that the system is always responsive to requests, even if some nodes are down or it cannot guarantee that the data is the most up-to-date."
  },
  {
    id: 47,
    question: "In the context of the CAP theorem, what is Partition Tolerance?",
    options: [
      "Every read receives the most recent write or an error.",
      "Every request receives a (non-error) response.",
      "The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.",
      "The database can be split into multiple smaller databases."
    ],
    correctAnswer: 2,
    explanation: "Partition tolerance means the system continues to function even when communication between nodes is lost or delayed, creating a 'network partition'."
  },
  {
    id: 48,
    question: "What is a database cursor?",
    options: [
      "A control structure that enables traversal over the records in a database.",
      "A pointer to the current row in a result set.",
      "Used by programmers to process individual rows returned by a query.",
      "All of the above."
    ],
    correctAnswer: 3,
    explanation: "A cursor is a database object that allows an application to traverse the rows of a result set one by one, which is in contrast to the set-based operations of SQL."
  },
  {
    id: 49,
    question: "What is query optimization?",
    options: [
      "The process of writing faster application code.",
      "The process of choosing the most efficient way to execute a SQL statement.",
      "The process of adding more hardware to the database server.",
      "The process of denormalizing a database."
    ],
    correctAnswer: 1,
    explanation: "Query optimization is the process where the database system compares different strategies for executing a query and selects the one with the lowest estimated cost, significantly impacting performance."
  },
  {
    id: 50,
    question: "Which of the following is NOT a valid SQL constraint?",
    options: [
      "PRIMARY KEY",
      "UNIQUE",
      "CHECK",
      "DUPLICATE"
    ],
    correctAnswer: 3,
    explanation: "DUPLICATE is not a standard SQL constraint. PRIMARY KEY, UNIQUE, and CHECK are all valid constraints used to enforce rules on the data in a table."
  },

  {
    id: 51,
    question: "What is the purpose of the HAVING clause in SQL?",
    options: [
      "It is used to filter rows before any grouping takes place.",
      "It is used to filter groups after the GROUP BY clause has been applied.",
      "It is an alternative to the WHERE clause for filtering individual rows.",
      "It is used to sort the final result set."
    ],
    correctAnswer: 1,
    explanation: "The WHERE clause filters rows before they are grouped, while the HAVING clause is used to filter the results of aggregate functions based on the grouped data."
  },
  {
    id: 52,
    question: "Which SQL operator is used to search for a pattern in a column?",
    options: [
      "IN",
      "BETWEEN",
      "LIKE",
      "EXISTS"
    ],
    correctAnswer: 2,
    explanation: "The LIKE operator is used in a WHERE clause to search for a specified pattern in a column. It uses wildcard characters like % (for any sequence of characters) and _ (for a single character)."
  },
  {
    id: 53,
    question: "What is a Common Table Expression (CTE) in SQL?",
    options: [
      "A permanent table that stores the result of a query.",
      "A temporary named result set that you can reference within a SELECT, INSERT, UPDATE, or DELETE statement.",
      "Another name for a subquery.",
      "A type of database index."
    ],
    correctAnswer: 1,
    explanation: "A CTE, defined using the WITH clause, creates a temporary, named result set that exists only for the duration of a single query. This helps to break down complex queries and improve readability."
  },
  {
    id: 54,
    question: "What is the primary purpose of a window function in SQL?",
    options: [
      "To perform a calculation across a set of table rows that are somehow related to the current row.",
      "To create a graphical window for viewing query results.",
      "To filter results like a WHERE clause.",
      "To combine results from multiple tables like a JOIN."
    ],
    correctAnswer: 0,
    explanation: "Window functions (like ROW_NUMBER(), RANK()) operate on a set of rows (a 'window') and return a single value for each row from the underlying query. Unlike aggregate functions, they do not collapse the rows."
  },
  {
    id: 55,
    question: "What is the difference between ROW_NUMBER(), RANK(), and DENSE_RANK()?",
    options: [
      "They are all identical and can be used interchangeably.",
      "ROW_NUMBER() gives a unique rank to each row, while RANK() and DENSE_RANK() handle ties.",
      "RANK() leaves gaps in the ranking after a tie, while DENSE_RANK() does not.",
      "Both b and c are correct."
    ],
    correctAnswer: 3,
    explanation: "ROW_NUMBER() assigns a unique number. RANK() assigns the same rank for ties but leaves a gap. DENSE_RANK() also assigns the same rank for ties but does not leave a gap."
  },
  {
    id: 56,
    question: "The COALESCE function in SQL is used to:",
    options: [
      "Concatenate two strings.",
      "Return the first non-null value in a list of expressions.",
      "Convert a value from one data type to another.",
      "Calculate the average of a set of numbers."
    ],
    correctAnswer: 1,
    explanation: "COALESCE evaluates its arguments in order and returns the current value of the first expression that does not evaluate to NULL. It's a useful way to handle NULL values by providing a default."
  },
  {
    id: 57,
    question: "What does the CASE statement in SQL do?",
    options: [
      "Changes the data type of a column.",
      "Goes through conditions and returns a value when the first condition is met.",
      "Is used to start a transaction.",
      "Is a command to create a new database."
    ],
    correctAnswer: 1,
    explanation: "The CASE statement is SQL's way of handling if/then/else logic. It allows you to return different values based on specified conditions."
  },
  {
    id: 58,
    question: "What is a self-join?",
    options: [
      "A join that combines rows from two different tables.",
      "A join that links a table to itself.",
      "A join that returns all rows from the left table.",
      "An operation that removes duplicate rows from a table."
    ],
    correctAnswer: 1,
    explanation: "A self-join is a regular join, but the table is joined with itself. This is useful for querying hierarchical data or comparing rows within the same table."
  },
  {
    id: 59,
    question: "Which of the following commands would you use to change the data type of a column in a table?",
    options: [
      "MODIFY TABLE",
      "UPDATE TABLE",
      "ALTER TABLE",
      "CHANGE COLUMN"
    ],
    correctAnswer: 2,
    explanation: "The ALTER TABLE command is the standard DDL command used to add, delete, or modify columns in an existing table. The exact syntax varies between SQL dialects (e.g., ALTER COLUMN or MODIFY COLUMN)."
  },
  {
    id: 60,
    question: "What is a composite index?",
    options: [
      "An index created on a single column.",
      "An index created on two or more columns of a table.",
      "An index that stores the actual data rows.",
      "An index used exclusively for text searches."
    ],
    correctAnswer: 1,
    explanation: "A composite (or multi-column) index is an index on multiple columns. The order of columns in the index definition is important as it affects the index's efficiency."
  },
  {
    id: 61,
    question: "What is a 'covering' index?",
    options: [
      "An index that includes all the columns needed to satisfy a query, without having to access the table itself.",
      "An index that covers the entire disk space of a table.",
      "Another name for a primary key.",
      "An index that prevents any changes to the table."
    ],
    correctAnswer: 0,
    explanation: "A covering index can significantly improve query performance because all necessary data is retrieved directly from the index, avoiding the extra step of reading data from the table (a 'table lookup')."
  },
  {
    id: 62,
    question: "What is a query execution plan?",
    options: [
      "A log of all queries that have been executed.",
      "A sequence of steps used to access data in a SQL relational database.",
      "A plan for backing up the database.",
      "The SQL code written by a developer."
    ],
    correctAnswer: 1,
    explanation: "The database's query optimizer generates an execution plan, which is the most efficient sequence of operations it determines for retrieving the requested data. Analyzing these plans is crucial for performance tuning."
  },
  {
    id: 63,
    question: "In the context of database performance, what is a 'table scan'?",
    options: [
      "A fast and efficient way to retrieve specific rows.",
      "An operation where the database reads every row in a table to find the ones that match the query's criteria.",
      "The process of creating an index on a table.",
      "A security measure to check for vulnerabilities."
    ],
    correctAnswer: 1,
    explanation: "A full table scan is often inefficient for large tables, as it requires reading the entire table from disk. A properly defined index allows the database to perform a much faster 'index seek' instead."
  },
  {
    id: 64,
    question: "Which of the following can help improve database performance?",
    options: [
      "Adding appropriate indexes.",
      "Optimizing query structure.",
      "Denormalizing data where appropriate.",
      "All of the above."
    ],
    correctAnswer: 3,
    explanation: "Database performance tuning is a multifaceted issue that involves creating effective indexes, writing efficient queries, and designing the schema appropriately (which can include strategic denormalization)."
  },
  {
    id: 65,
    question: "What is the B-Tree data structure commonly used for in databases?",
    options: [
      "Storing unstructured data.",
      "Implementing database indexes.",
      "Managing user authentication.",
      "Processing transactions."
    ],
    correctAnswer: 1,
    explanation: "B-Trees are self-balancing tree data structures that maintain sorted data and allow for efficient searches, insertions, and deletions, making them ideal for implementing indexes in databases."
  },
  {
    id: 66,
    question: "What is cardinality in the context of database indexes?",
    options: [
      "The number of rows in a table.",
      "The number of indexes on a table.",
      "The uniqueness of data values contained in a column.",
      "The physical size of an index on disk."
    ],
    correctAnswer: 2,
    explanation: "High cardinality means a column has many unique values (e.g., a primary key). Low cardinality means a column has few unique values (e.g., a 'Status' column). Indexes are most effective on high-cardinality columns."
  },
  {
    id: 67,
    question: "Why might you avoid creating too many indexes on a table?",
    options: [
      "Indexes don't actually improve performance.",
      "Each index requires additional storage space and slows down data modification operations (INSERT, UPDATE, DELETE).",
      "There is a hard limit of one index per table in most database systems.",
      "Indexes can corrupt the data in a table."
    ],
    correctAnswer: 1,
    explanation: "While indexes speed up read operations (SELECT), they must be updated whenever data is modified. This adds overhead to write operations, creating a trade-off between read and write performance."
  },
  {
    id: 68,
    question: "What is a 'bottleneck' in database performance?",
    options: [
      "The fastest component of the database system.",
      "A component of the system that is limiting the overall performance.",
      "A security feature.",
      "The process of data normalization."
    ],
    correctAnswer: 1,
    explanation: "A bottleneck is a point of congestion in a system that restricts its throughput. In a database, common bottlenecks can be CPU, memory, I/O (disk speed), or network, often caused by inefficient queries."
  },
  {
    id: 69,
    question: "What are database statistics?",
    options: [
      "The number of users currently connected to the database.",
      "Metadata about the data stored in the database, such as the distribution of values in columns.",
      "A log of errors that have occurred.",
      "The total size of the database in gigabytes."
    ],
    correctAnswer: 1,
    explanation: "The query optimizer uses statistics (e.g., data distribution histograms) to make informed decisions about which execution plan to use. Keeping statistics up-to-date is crucial for optimal query performance."
  },
  {
    id: 70,
    question: "What is the difference between a Star Schema and a Snowflake Schema in data warehousing?",
    options: [
      "A Star Schema has one central fact table and multiple dimension tables; a Snowflake Schema normalizes these dimension tables.",
      "A Snowflake Schema has one central fact table; a Star Schema has multiple fact tables.",
      "Star Schemas are used for OLTP, while Snowflake Schemas are used for OLAP.",
      "There is no difference; the terms are interchangeable."
    ],
    correctAnswer: 0,
    explanation: "The Star Schema is simpler, with a central fact table directly connected to denormalized dimension tables. The Snowflake Schema is more complex, with normalized dimension tables creating a snowflake-like shape."
  },
  {
    id: 71,
    question: "What is a Data Dictionary or System Catalog?",
    options: [
      "A user-created table for storing application-specific terminology.",
      "A set of system tables and views that contain metadata about the database's structure.",
      "The main fact table in a data warehouse.",
      "A tool for spell-checking data entries."
    ],
    correctAnswer: 1,
    explanation: "The data dictionary contains the 'data about the data' (metadata). It holds information about tables, columns, data types, constraints, users, and other database objects."
  },
  {
    id: 72,
    question: "In the context of database storage engines for MySQL, what is a key difference between InnoDB and MyISAM?",
    options: [
      "MyISAM supports transactions, while InnoDB does not.",
      "InnoDB supports transactions and row-level locking, while MyISAM does not support transactions and uses table-level locking.",
      "InnoDB is faster for read-heavy applications, while MyISAM is faster for write-heavy applications.",
      "MyISAM is the newer, more advanced storage engine."
    ],
    correctAnswer: 1,
    explanation: "InnoDB's support for ACID transactions and row-level locking makes it the default and general-purpose choice. MyISAM's table-level locking can be faster for certain read-only workloads but suffers from contention with writes."
  },
  {
    id: 73,
    question: "What is a database schema?",
    options: [
      "The actual data stored in the database.",
      "A logical container for database objects such as tables, views, and stored procedures.",
      "A type of SQL query.",
      "A backup file of the database."
    ],
    correctAnswer: 1,
    explanation: "A schema defines the structure and organization of the database. It acts as a blueprint for the data and the relationships between different database objects."
  },
  {
    id: 74,
    question: "What is the role of a Database Administrator (DBA)?",
    options: [
      "To write application code that interacts with the database.",
      "To manage, secure, and maintain the database system to ensure its performance and availability.",
      "To design the user interface for database applications.",
      "To perform data analysis and create business intelligence reports."
    ],
    correctAnswer: 1,
    explanation: "The DBA is responsible for the overall health of the database environment, including tasks like backups, recovery, performance tuning, security management, and installation/upgrades."
  },
  {
    id: 75,
    question: "What is the principle of data independence?",
    options: [
      "The ability to modify the database schema without having to change the application programs.",
      "The idea that data should not depend on any specific user.",
      "A security feature that isolates data from unauthorized access.",
      "The concept of storing data independently from the operating system."
    ],
    correctAnswer: 0,
    explanation: "Data independence allows changes at one level of the database system (e.g., physical storage) without affecting higher levels (e.g., the application view of the data)."
  },
  {
    id: 76,
    question: "What is Database Replication?",
    options: [
      "The process of creating a database schema from a model.",
      "The process of frequently copying data from a database in one server to a database in another server.",
      "The process of running multiple queries at the same time.",
      "The process of deleting a database."
    ],
    correctAnswer: 1,
    explanation: "Replication is used to improve data availability, provide fault tolerance (high availability), and scale read operations by allowing clients to query secondary servers (replicas)."
  },
  {
    id: 77,
    question: "What does 'ETL' stand for in the context of data warehousing?",
    options: [
      "Execute, Test, Launch.",
      "Extract, Transform, Load.",
      "Estimate, Track, Limit.",
      "Entity, Type, Link."
    ],
    correctAnswer: 1,
    explanation: "ETL is a data integration process that involves extracting data from source systems, transforming it into a consistent format, and loading it into a target system, such as a data warehouse."
  },
  {
    id: 78,
    question: "What is a file-based system, and why is it considered inferior to a DBMS?",
    options: [
      "A system that stores data in individual, separate files; it's inferior due to high data redundancy, poor data integrity, and lack of concurrency control.",
      "A system that stores all data in a single, large file; it's inferior because it's slow.",
      "An older term for a DBMS.",
      "A system for managing operating system files, unrelated to databases."
    ],
    correctAnswer: 0,
    explanation: "Before DBMS, data was often stored in flat files managed by applications, which led to data duplication, inconsistency, difficulty in accessing data, and lack of security, all of which are solved by a DBMS."
  },
  {
    id: 79,
    question: "What is a Three-Tier Architecture in the context of database applications?",
    options: [
      "A model with three layers: Physical, Logical, and View.",
      "A client-server architecture with three logical tiers: Presentation, Application (Business Logic), and Data.",
      "A database with three backup copies.",
      "A network with three routers."
    ],
    correctAnswer: 1,
    explanation: "This architecture separates the user interface (Presentation), business logic (Application), and data storage (Data). This separation makes the system more scalable, flexible, and maintainable."
  },
  {
    id: 80,
    question: "Which of the following is NOT a primary type of NoSQL database?",
    options: [
      "Key-Value Store",
      "Document Database",
      "Graph Database",
      "Relational Database"
    ],
    correctAnswer: 3,
    explanation: "Relational databases (like MySQL, PostgreSQL) are the primary category of SQL databases. The other options are all major categories within the NoSQL ecosystem."
  },
  {
    id: 81,
    question: "In which scenario would a Key-Value store NoSQL database be the most appropriate choice?",
    options: [
      "Storing complex, interconnected data like social networks.",
      "Storing and querying semi-structured data like product catalogs.",
      "Storing session data for a web application or caching frequently accessed data.",
      "Running complex analytical queries on large datasets."
    ],
    correctAnswer: 2,
    explanation: "Key-value stores (like Redis, DynamoDB) are highly efficient for simple lookup operations based on a unique key, making them ideal for caching and session management."
  },
  {
    id: 82,
    question: "What is a 'document' in a document-oriented database like MongoDB?",
    options: [
      "A text file like a Microsoft Word document.",
      "A record that stores data in a structured format, such as JSON or BSON.",
      "A row in a table.",
      "A node in a graph."
    ],
    correctAnswer: 1,
    explanation: "In a document database, a document is the basic unit of data. It's a self-contained structure composed of key-value pairs, similar to a JSON object, which allows for flexible and nested data structures."
  },
  {
    id: 83,
    question: "For which of the following use cases would a Graph database like Neo4j be the best fit?",
    options: [
      "A simple user profile store.",
      "A financial transaction ledger.",
      "A recommendation engine or fraud detection system that relies on relationships between data points.",
      "A content management system for blog posts."
    ],
    correctAnswer: 2,
    explanation: "Graph databases are specifically designed to store and navigate relationships. They excel at managing highly connected data and querying the paths and connections between entities."
  },
  {
    id: 84,
    question: "What does the concept of 'Eventual Consistency' mean in distributed databases?",
    options: [
      "The database is always in a consistent state.",
      "If no new updates are made to a given data item, all accesses to that item will eventually return the last updated value.",
      "The database guarantees that all transactions will be immediately consistent across all nodes.",
      "The system will eventually become unavailable."
    ],
    correctAnswer: 1,
    explanation: "This is a consistency model used in many NoSQL databases that prioritizes availability. It accepts short-lived inconsistency across replicas but guarantees that they will sync up over time."
  },
  {
    id: 85,
    question: "What is the primary characteristic of a Column-Family NoSQL database (e.g., Apache Cassandra)?",
    options: [
      "It stores data in documents.",
      "It stores data in simple key-value pairs.",
      "It stores data by column families rather than by rows.",
      "It is optimized for ACID transactions."
    ],
    correctAnswer: 2,
    explanation: "This architecture is highly optimized for queries that aggregate data over many rows but only need a few columns. Storing data by columns allows for very fast reads of specific columns."
  },
  {
    id: 86,
    question: "How do most NoSQL databases achieve horizontal scalability?",
    options: [
      "By increasing the CPU and RAM of a single server (vertical scaling).",
      "By distributing the data and load across multiple servers using techniques like sharding.",
      "By using better query optimization algorithms.",
      "By normalizing the data to a higher normal form."
    ],
    correctAnswer: 1,
    explanation: "Horizontal scaling (scaling out) is a core design principle of most NoSQL systems. Sharding (partitioning) the data allows the database to grow by simply adding more commodity servers to the cluster."
  },
  {
    id: 87,
    question: "What does 'schema-less' or 'flexible schema' in NoSQL mean?",
    options: [
      "The database has no structure at all.",
      "The database does not enforce a rigid, predefined schema; individual records (documents) can have different structures.",
      "The schema can only be defined using a specific programming language.",
      "You cannot create indexes on the data."
    ],
    correctAnswer: 1,
    explanation: "This flexibility allows for easier evolution of applications, as you can add new fields to documents without having to run a migration on the entire database table."
  },
  {
    id: 88,
    question: "Which property from the CAP theorem do many NoSQL databases choose to relax in favor of the other two?",
    options: [
      "Availability",
      "Partition Tolerance",
      "Consistency",
      "Durability"
    ],
    correctAnswer: 2,
    explanation: "In a distributed system, network partitions (P) are a fact of life. This forces a trade-off between strong Consistency (C) and high Availability (A). Many NoSQL databases (AP systems) choose to maximize availability by relaxing strong consistency."
  },
  {
    id: 89,
    question: "Redis is often used as a cache. What type of NoSQL database is it?",
    options: [
      "Document Database",
      "Graph Database",
      "In-memory Key-Value Store",
      "Column-Family Database"
    ],
    correctAnswer: 2,
    explanation: "Redis primarily stores data in RAM, which makes it extremely fast. Its data model is based on keys pointing to various data structures, fitting the description of an advanced in-memory key-value store."
  },
  {
    id: 90,
    question: "What is SQL Injection?",
    options: [
      "A method for improving the speed of SQL queries.",
      "A code injection technique where malicious SQL statements are inserted into an entry field for execution.",
      "The process of installing a SQL database.",
      "A feature that automatically corrects errors in SQL syntax."
    ],
    correctAnswer: 1,
    explanation: "SQL Injection is a serious security vulnerability that can allow an attacker to bypass authentication, view unauthorized data, or even gain administrative control over a database server."
  },
  {
    id: 91,
    question: "How can SQL Injection attacks be prevented?",
    options: [
      "By using prepared statements (with parameterized queries).",
      "By validating and sanitizing user input.",
      "By enforcing the principle of least privilege for database accounts.",
      "All of the above."
    ],
    correctAnswer: 3,
    explanation: "A multi-layered defense is the best approach. Prepared statements are the primary technical control, with input validation and least privilege providing additional layers of security."
  },
  {
    id: 92,
    question: "Which SQL command is used to give a user permission to access a database object?",
    options: [
      "ALLOW",
      "COMMIT",
      "GRANT",
      "SECURE"
    ],
    correctAnswer: 2,
    explanation: "GRANT is the standard DCL (Data Control Language) command used to provide specific privileges (like SELECT, INSERT) on database objects to users or roles."
  },
  {
    id: 93,
    question: "Which SQL command is used to take away permissions from a user?",
    options: [
      "REMOVE",
      "REVOKE",
      "DENY",
      "TAKE"
    ],
    correctAnswer: 1,
    explanation: "REVOKE is the DCL command that is the inverse of GRANT. It is used to remove previously granted user privileges."
  },
  {
    id: 94,
    question: "What is the difference between authentication and authorization in database security?",
    options: [
      "They are the same thing.",
      "Authentication is verifying who a user is, while authorization is determining what they are allowed to do.",
      "Authorization is verifying who a user is, while authentication is determining what they are allowed to do.",
      "Authentication is for users, while authorization is for applications."
    ],
    correctAnswer: 1,
    explanation: "Authentication is proving identity (e.g., username and password). Authorization is checking the permissions associated with that identity to decide if access to a specific resource should be allowed."
  },
  {
    id: 95,
    question: "What is a 'cold' backup of a database?",
    options: [
      "A backup performed while the database is running and actively being used.",
      "A backup performed while the database is shut down and offline.",
      "A backup that is stored in a physically cold location.",
      "An incremental backup that only copies new data."
    ],
    correctAnswer: 1,
    explanation: "A cold backup ensures a perfectly consistent copy of the database because there is no activity. The main disadvantage is that it requires application downtime."
  },
  {
    id: 96,
    question: "What is a 'hot' backup of a database?",
    options: [
      "A backup performed while the database is shut down.",
      "A backup performed while the database is online and in use.",
      "A backup that has just been created.",
      "A backup stored on the same server as the database."
    ],
    correctAnswer: 1,
    explanation: "Hot backups are essential for systems that require high availability, as they avoid downtime. They are more complex as they must account for transactions that occur during the backup process."
  },
  {
    id: 97,
    question: "What is a differential backup?",
    options: [
      "A backup that copies all data from the database.",
      "A backup that copies only the data that has changed since the last backup of any type.",
      "A backup that copies only the data that has changed since the last full backup.",
      "A backup of the transaction log."
    ],
    correctAnswer: 2,
    explanation: "To restore from a differential backup, you only need the last full backup and the latest differential backup, making the process faster than restoring many incremental backups."
  },
  {
    id: 98,
    question: "What is the purpose of a transaction log?",
    options: [
      "To store user login information.",
      "To keep a record of all modifications to the database to ensure durability and support recovery.",
      "To log performance metrics of the database.",
      "To store the results of SELECT queries."
    ],
    correctAnswer: 1,
    explanation: "The transaction log is critical for ensuring the ACID properties. In the event of a crash, the database can use the log to redo committed transactions and roll back uncommitted ones."
  },
  {
    id: 99,
    question: "What is the Principle of Least Privilege in database security?",
    options: [
      "Giving all users administrative privileges.",
      "Granting each user and application only the minimum permissions necessary to perform their required tasks.",
      "The idea that the user with the fewest privileges is the most secure.",
      "A rule that states users should have at least two privileges."
    ],
    correctAnswer: 1,
    explanation: "This is a core security best practice. By limiting permissions, you reduce the potential damage that can be caused by a malicious actor, a compromised account, or an accidental error."
  },
  {
    id: 100,
    question: "A table is in Third Normal Form (3NF) if it is in 2NF and what other condition is met?",
    options: [
      "All attributes are dependent on the key.",
      "It has no multi-valued dependencies.",
      "It has no transitive dependencies.",
      "All determinants are candidate keys."
    ],
    correctAnswer: 2,
    explanation: "The rule for 3NF is that the table must be in 2NF, and all non-key attributes must be dependent only on the primary key, not on other non-key attributes. This eliminates transitive dependencies."
  },
  {
    id: 101,
    question: "What is a transitive dependency?",
    options: [
      "When a non-key attribute determines another non-key attribute.",
      "When a key attribute determines a non-key attribute.",
      "When a part of the primary key determines a non-key attribute.",
      "When an attribute determines a set of values."
    ],
    correctAnswer: 0,
    explanation: "A transitive dependency exists when there is an indirect relationship causing a functional dependency (e.g., A -> B and B -> C). 3NF aims to remove this by ensuring all non-key attributes depend only on the primary key."
  },
  {
    id: 102,
    question: "What is the definition of Boyce-Codd Normal Form (BCNF)?",
    options: [
      "The table must be in 3NF and have no multi-valued dependencies.",
      "For any non-trivial functional dependency X -> Y, X must be a superkey.",
      "All partial dependencies have been removed.",
      "The table has no transitive dependencies."
    ],
    correctAnswer: 1,
    explanation: "BCNF is a stricter version of 3NF. It requires that for every functional dependency, the determinant (the left side of the dependency) must be a candidate key or a superkey."
  },
  {
    id: 103,
    question: "Why is BCNF considered stronger than 3NF?",
    options: [
      "Every table in BCNF is also in 3NF, but not every table in 3NF is in BCNF.",
      "BCNF allows for more data redundancy.",
      "BCNF is easier to achieve than 3NF.",
      "3NF handles more anomalies than BCNF."
    ],
    correctAnswer: 0,
    explanation: "BCNF has stricter rules than 3NF. It addresses certain rare anomalies, especially in tables with multiple, overlapping candidate keys, which 3NF might not resolve."
  },
  {
    id: 104,
    question: "Fourth Normal Form (4NF) is designed to eliminate what type of dependency?",
    options: [
      "Transitive dependency",
      "Partial dependency",
      "Join dependency",
      "Multi-valued dependency"
    ],
    correctAnswer: 3,
    explanation: "4NF addresses redundancy where the presence of one relationship between two independent attributes is represented multiple times. A table is in 4NF if it is in BCNF and has no multi-valued dependencies."
  },
  {
    id: 105,
    question: "Fifth Normal Form (5NF) and Project-Join Normal Form (PJ/NF) are designed to reduce redundancy related to what?",
    options: [
      "Multi-valued dependencies",
      "Transitive dependencies",
      "Join dependencies",
      "Partial dependencies"
    ],
    correctAnswer: 2,
    explanation: "5NF is the highest level of normalization and deals with join dependencies. A table is in 5NF if it is in 4NF and every join dependency is implied by the candidate keys. This form is rarely needed in practice."
  },
  {
    id: 106,
    question: "What is a Shared Lock (S-Lock)?",
    options: [
      "A lock that prevents any other transaction from accessing the data item.",
      "A lock that allows multiple transactions to read the same data item concurrently.",
      "A lock that is used exclusively for write operations.",
      "A lock that is automatically promoted to an exclusive lock."
    ],
    correctAnswer: 1,
    explanation: "A Shared Lock (or Read Lock) is non-exclusive. If a transaction holds an S-lock, other transactions can also acquire an S-lock on the same item, but no transaction can acquire an Exclusive Lock."
  },
  {
    id: 107,
    question: "What is an Exclusive Lock (X-Lock)?",
    options: [
      "A lock that allows multiple transactions to read and write to the same data item.",
      "A lock that allows only one transaction to read a data item.",
      "A lock that, once held on a data item, prevents any other transaction from acquiring any lock (shared or exclusive) on it.",
      "A lock that can be shared among multiple write operations."
    ],
    correctAnswer: 2,
    explanation: "An Exclusive Lock (or Write Lock) is required for modifying data. It ensures that no other transaction can read or write the data while the lock is held, preventing dirty reads and lost updates."
  },
  {
    id: 108,
    question: "What is the primary goal of serializability in concurrency control?",
    options: [
      "To ensure that transactions execute in the fastest possible way.",
      "To allow as many transactions as possible to run concurrently.",
      "To ensure the outcome of concurrent transactions is the same as if they were executed in some serial order.",
      "To ensure every transaction can read the latest committed data."
    ],
    correctAnswer: 2,
    explanation: "Serializability is the 'I' (Isolation) in ACID. It is the highest level of isolation and guarantees that even though transactions are interleaved, the final state of the database is consistent and correct."
  },
  {
    id: 109,
    question: "What is Multiversion Concurrency Control (MVCC)?",
    options: [
      "A protocol where transactions must acquire locks before accessing data.",
      "A protocol where the database maintains multiple versions of a data item to allow readers to access old data while writers create new data.",
      "A protocol that assumes conflicts are rare and only checks for them at commit time.",
      "A protocol that uses timestamps to order transactions."
    ],
    correctAnswer: 1,
    explanation: "MVCC is a popular concurrency method where readers don't block writers and writers don't block readers. Each transaction sees a consistent snapshot of the database, improving concurrency."
  },
  {
    id: 110,
    question: "What is the fundamental idea behind Optimistic Concurrency Control?",
    options: [
      "Conflicts are frequent, so lock everything before access.",
      "Conflicts are rare, so allow transactions to proceed without locking and check for conflicts only at commit time.",
      "Use timestamps to determine the order of transactions.",
      "Use multiple versions of data to avoid conflicts."
    ],
    correctAnswer: 1,
    explanation: "Optimistic protocols operate in read, validate, and write phases. The system checks for conflicts during the validate phase. If a conflict is found, the transaction is rolled back. This works well in low-contention environments."
  },
  {
    id: 111,
    question: "Pessimistic Concurrency Control protocols, like Two-Phase Locking (2PL), operate on which assumption?",
    options: [
      "Conflicts are rare.",
      "Conflicts are frequent, so it is better to prevent them by acquiring locks before accessing data.",
      "Deadlocks will never occur.",
      "The system has infinite memory for creating data versions."
    ],
    correctAnswer: 1,
    explanation: "Pessimistic protocols are 'pessimistic' in that they assume a conflict is likely to happen. Therefore, they enforce strict rules, like locking, to prevent conflicts from occurring in the first place."
  },
  {
    id: 112,
    question: "What is a 'phantom read' anomaly, and which isolation level is required to prevent it?",
    options: [
      "Re-reading a row yields different values; prevented by Repeatable Read.",
      "Reading uncommitted data; prevented by Read Committed.",
      "A query executed twice returns a different set of rows; prevented by Serializable.",
      "A transaction's update is overwritten; prevented by any locking protocol."
    ],
    correctAnswer: 2,
    explanation: "A phantom read occurs when a transaction's WHERE clause is satisfied by a different set of rows upon re-execution. Only the highest isolation level, Serializable, can prevent this."
  },
  {
    id: 113,
    question: "What is the primary purpose of a 'checkpoint' in a database recovery system?",
    options: [
      "To mark the end of a transaction.",
      "To periodically write all dirty buffer pages to disk and record this point in the log.",
      "To validate user credentials.",
      "To create a full backup of the database."
    ],
    correctAnswer: 1,
    explanation: "Checkpointing limits the amount of log that needs to be scanned and replayed during recovery after a crash. The recovery system only needs to process log records created since the last successful checkpoint."
  },
  {
    id: 114,
    question: "What does the 'Write-Ahead Logging' (WAL) protocol mandate?",
    options: [
      "All log records for a transaction must be written to stable storage before the transaction is allowed to commit.",
      "All data page modifications for a transaction must be written to stable storage before the transaction commits.",
      "Log records must be written after the data pages are written.",
      "The entire log file must be written before any database modifications."
    ],
    correctAnswer: 0,
    explanation: "WAL is fundamental to the 'Durability' property of ACID. It ensures that if a crash occurs after a transaction commits but before its data changes are written to disk, the system can use the log to redo the changes."
  },
  {
    id: 115,
    question: "What is the role of the Buffer Manager in a DBMS?",
    options: [
      "It manages the execution of SQL queries.",
      "It manages the transfer of data pages between main memory (the buffer pool) and secondary storage (disk).",
      "It manages the transaction log.",
      "It parses SQL statements into an internal representation."
    ],
    correctAnswer: 1,
    explanation: "The buffer manager is a critical performance component that maintains a cache of disk pages in memory (the buffer pool) and implements a page replacement policy (like LRU) to decide which pages to evict when the pool is full."
  },
  {
    id: 116,
    question: "What is a 'dirty page' in the context of a database buffer pool?",
    options: [
      "A page that has never been used.",
      "A page in memory that has been modified but has not yet been written back to disk.",
      "A page that contains corrupted data.",
      "A page that is currently being read from disk."
    ],
    correctAnswer: 1,
    explanation: "When a transaction modifies a page in the buffer pool, it is marked as 'dirty.' The buffer manager ensures that these dirty pages are eventually written (flushed) to disk to make the changes permanent."
  },
  {
    id: 117,
    question: "What is the primary advantage of column-oriented storage over row-oriented storage for analytical queries?",
    options: [
      "It is faster for transactional updates.",
      "It significantly reduces the I/O needed when a query only accesses a few columns.",
      "It is simpler to implement.",
      "It uses less storage space for all types of data."
    ],
    correctAnswer: 1,
    explanation: "Analytical queries often aggregate data from a small subset of columns over many rows. A columnar store can read just the required column data, dramatically reducing I/O compared to a row store."
  },
  {
    id: 118,
    question: "What is a materialized view?",
    options: [
      "A virtual table defined by a query that is run each time it is accessed.",
      "A database object that stores the pre-computed result of a query.",
      "Another name for a temporary table.",
      "A view that can be updated directly."
    ],
    correctAnswer: 1,
    explanation: "Unlike a standard view, a materialized view physically stores its result set. This can drastically improve performance for complex queries, but the data must be periodically refreshed from the base tables."
  },
  {
    id: 119,
    question: "What is a correlated subquery?",
    options: [
      "A subquery that is executed only once for the entire parent query.",
      "A subquery that depends on the outer query for its values and is executed repeatedly for each row of the outer query.",
      "A subquery that uses the UNION operator.",
      "Another name for a Common Table Expression (CTE)."
    ],
    correctAnswer: 1,
    explanation: "This dependency on the outer query often makes correlated subqueries less performant than non-correlated subqueries or joins, as they cannot be evaluated independently."
  },
  {
    id: 120,
    question: "How does the SQL EXCEPT (or MINUS) operator work?",
    options: [
      "It combines the results of two queries, including duplicates.",
      "It returns all rows from the first query that are not present in the second query's result set.",
      "It returns all rows that are common to the result sets of both queries.",
      "It performs a Cartesian product of the two result sets."
    ],
    correctAnswer: 1,
    explanation: "EXCEPT is a set operator. It takes the distinct rows of the first SELECT statement and returns only the rows that do not appear in the second SELECT statement's result."
  },
  {
    id: 121,
    question: "What is the primary use case for a recursive Common Table Expression (CTE) in SQL?",
    options: [
      "Performing simple aggregations.",
      "Joining two tables on a primary key.",
      "Querying hierarchical data, such as an organizational chart or a bill of materials.",
      "Filtering results based on a simple condition."
    ],
    correctAnswer: 2,
    explanation: "A recursive CTE is one that references itself. It consists of an anchor member (initial query) and a recursive member, allowing it to traverse tree-like or graph-like structures within a table."
  },
  {
    id: 122,
    question: "How does SQL's three-valued logic handle the expression NULL = NULL?",
    options: [
      "It evaluates to TRUE.",
      "It evaluates to FALSE.",
      "It evaluates to UNKNOWN.",
      "It results in a syntax error."
    ],
    correctAnswer: 2,
    explanation: "In SQL, NULL represents a missing or unknown value. Comparing one unknown value to another results in an unknown outcome. To check for NULL, you must use the 'IS NULL' or 'IS NOT NULL' operator."
  },
  {
    id: 123,
    question: "What is a 'NewSQL' database?",
    options: [
      "Another name for a NoSQL database.",
      "A relational database designed to be run only in the cloud.",
      "A class of modern relational DBMS that provides the scalability of NoSQL systems while retaining ACID guarantees.",
      "A database that uses a new query language instead of SQL."
    ],
    correctAnswer: 2,
    explanation: "NewSQL databases (like CockroachDB, TiDB) are architected to scale out horizontally like NoSQL databases but still provide standard SQL interfaces and strong transactional consistency (ACID)."
  },
  {
    id: 124,
    question: "What is 'Polyglot Persistence'?",
    options: [
      "The practice of using only one type of database for all of an application's needs.",
      "The concept of using multiple different database technologies to handle different data storage needs within a single application.",
      "A database that can understand multiple query languages.",
      "A security model for databases."
    ],
    correctAnswer: 1,
    explanation: "Polyglot Persistence is the idea of using different data storage technologies to handle different data storage needs, choosing the best tool for each specific job within a microservices architecture."
  },
  {
    id: 125,
    question: "What is the primary difference between a Data Lake and a Data Warehouse?",
    options: [
      "A Data Warehouse stores raw data, while a Data Lake stores structured data.",
      "A Data Lake stores raw, unprocessed data, while a Data Warehouse stores structured, filtered data.",
      "Data Lakes are only for small amounts of data.",
      "Data Warehouses are older and no longer used."
    ],
    correctAnswer: 1,
    explanation: "A Data Lake uses a 'schema-on-read' approach for raw data. A Data Warehouse uses a 'schema-on-write' approach where data is cleaned, transformed, and structured (via ETL) before being loaded."
  },
  {
    id: 126,
    question: "What is Change Data Capture (CDC)?",
    options: [
      "A method for backing up a database.",
      "The process of identifying and capturing changes made to data in a database and delivering those changes in real-time to a downstream system.",
      "A user interface for changing data.",
      "A security log that captures failed login attempts."
    ],
    correctAnswer: 1,
    explanation: "CDC is a powerful technique for data integration. Instead of querying for changes, CDC systems often read the transaction log to stream changes as they happen, enabling real-time analytics and data synchronization."
  },
  {
    id: 127,
    question: "What is a serverless database?",
    options: [
      "A database that runs entirely on the client's machine.",
      "A database that has no security or access controls.",
      "A cloud-native database that abstracts the underlying server infrastructure and automatically scales based on demand.",
      "A file-based database system like SQLite."
    ],
    correctAnswer: 2,
    explanation: "Serverless databases (like Amazon Aurora Serverless) eliminate the need for developers to provision, manage, or scale database clusters. The cloud provider handles all backend administration."
  },
  {
    id: 128,
    question: "What is the primary use case for a Vector Database?",
    options: [
      "Storing traditional relational data.",
      "Managing graph or network data.",
      "Storing and searching high-dimensional vector embeddings, typically for AI/ML applications.",
      "Caching key-value data."
    ],
    correctAnswer: 2,
    explanation: "Vector databases (like Pinecone) are specialized to efficiently find the 'nearest neighbors' to a given vector in a massive dataset, which is the core operation behind image search and semantic text search."
  },
  {
    id: 129,
    question: "What is HTAP (Hybrid Transactional/Analytical Processing)?",
    options: [
      "An architecture that uses separate databases for transactions (OLTP) and analytics (OLAP).",
      "A single database system designed to efficiently handle both transactional and analytical workloads.",
      "A method for transferring data from an OLTP database to an OLAP database.",
      "A NoSQL database that can handle transactions."
    ],
    correctAnswer: 1,
    explanation: "HTAP databases aim to eliminate the need for separate operational and analytical systems and the complex ETL pipelines between them, providing real-time analytics on live transactional data."
  },
  {
    id: 130,
    question: "What is 'sharding' in a database context?",
    options: [
      "Creating an index to speed up queries.",
      "A type of data replication for high availability.",
      "The process of horizontally partitioning a database into smaller pieces called shards, often stored on separate servers.",
      "Encrypting database contents."
    ],
    correctAnswer: 2,
    explanation: "Sharding is the principal method for achieving horizontal scalability (scaling out). By distributing the data and query load across multiple machines, a sharded database can handle massive volumes of data and traffic."
  },
  {
    id: 131,
    question: "What is a 'consistent hash ring' often used for in distributed databases?",
    options: [
      "Encrypting passwords.",
      "To determine which node a piece of data should be stored on, minimizing data movement when nodes are added or removed.",
      "To ensure ACID compliance.",
      "To manage transaction logs."
    ],
    correctAnswer: 1,
    explanation: "Consistent hashing is a crucial algorithm for sharding in systems like Cassandra and DynamoDB. It ensures that adding or removing a server only requires a small fraction of the keys to be relocated."
  },
  {
    id: 132,
    question: "What is a full-text search engine (like Elasticsearch) better at than a traditional relational database?",
    options: [
      "Enforcing ACID transactions.",
      "Performing complex joins across many tables.",
      "Quickly finding relevant documents based on keyword searches, relevance ranking, and handling linguistic features.",
      "Storing data in a normalized form."
    ],
    correctAnswer: 2,
    explanation: "Relational databases use LIKE for basic pattern matching, which is slow. Full-text search engines use an inverted index and analysis algorithms to provide fast, ranked, and relevant search results."
  },
  {
    id: 133,
    question: "You need to store user profile data with a flexible structure where different users may have different attributes. Which database type is a natural fit?",
    options: [
      "Relational Database (e.g., MySQL)",
      "Document Database (e.g., MongoDB)",
      "Key-Value Store (e.g., Redis)",
      "Graph Database (e.g., Neo4j)"
    ],
    correctAnswer: 1,
    explanation: "Document databases are ideal for this scenario because of their flexible schema. Each user profile can be a self-contained document (e.g., a JSON object), and the structure can vary without requiring schema migrations."
  },
  {
    id: 134,
    question: "A query is running slowly. The execution plan shows a 'Full Table Scan' on a large table with a selective WHERE clause. What is the most likely first step to optimize this?",
    options: [
      "Add more RAM to the server.",
      "Denormalize the table.",
      "Create an index on the column(s) used in the WHERE clause.",
      "Rewrite the query as a stored procedure."
    ],
    correctAnswer: 2,
    explanation: "A full table scan indicates the database is reading every row. An index provides a direct lookup path, allowing the database to perform a much faster 'Index Seek' instead."
  },
  {
    id: 135,
    question: "What is the main drawback of adding many indexes to a table that has frequent INSERT, UPDATE, and DELETE operations?",
    options: [
      "It slows down SELECT queries.",
      "It significantly increases the storage cost of the database.",
      "It slows down write operations because each index must also be updated.",
      "It violates the principles of normalization."
    ],
    correctAnswer: 2,
    explanation: "This is the fundamental trade-off of indexing. Indexes speed up reads but create overhead for writes. In a write-heavy system, over-indexing can become a performance bottleneck."
  },
  {
    id: 136,
    question: "In SQL, what is the key difference between a LEFT JOIN and an INNER JOIN?",
    options: [
      "INNER JOIN is faster than LEFT JOIN.",
      "LEFT JOIN returns all rows from the left table, even if there are no matches in the right table; INNER JOIN only returns matching rows.",
      "LEFT JOIN returns all rows from the right table, while INNER JOIN returns all rows from the left.",
      "There is no functional difference, only a syntax difference."
    ],
    correctAnswer: 1,
    explanation: "An INNER JOIN acts as a filter, returning only the intersection of the two tables. A LEFT OUTER JOIN preserves all rows from the 'left' table, filling in columns from the right table with NULL where no match is found."
  },
  {
    id: 137,
    question: "Your application needs to implement a 'who follows whom' social graph. Which database model is specifically designed for this type of data?",
    options: [
      "Relational",
      "Document",
      "Column-Family",
      "Graph"
    ],
    correctAnswer: 3,
    explanation: "Graph databases (like Neo4j) store entities as nodes and relationships as edges. They are optimized for traversing these relationships, making queries like 'find all friends of my friends' extremely fast."
  },
  {
    id: 138,
    question: "A developer writes SELECT * FROM users WHERE status = NULL;. Why will this query likely not return the intended results?",
    options: [
      "The * selector is inefficient.",
      "The status column does not exist.",
      "Comparisons with NULL using standard operators (like =) evaluate to UNKNOWN, not TRUE.",
      "The table is locked by another transaction."
    ],
    correctAnswer: 2,
    explanation: "As per SQL's three-valued logic, this comparison will not select any rows. The correct way to check for NULL values is to use the 'IS NULL' predicate: WHERE status IS NULL."
  },
  {
    id: 139,
    question: "What is a major risk of running complex, long-running analytical queries directly on your primary OLTP database?",
    options: [
      "The analytical queries will not have access to the latest data.",
      "It can lock resources and consume CPU/IO, severely degrading performance for the primary application's workload.",
      "The results of the analytical queries will be inaccurate.",
      "It is a major security vulnerability."
    ],
    correctAnswer: 1,
    explanation: "OLTP databases are optimized for fast, short transactions. Large analytical queries can lock resources for long periods, blocking the short transactions that the application relies on to be responsive."
  },
  {
    id: 140,
    question: "What does the TRUNCATE TABLE command do?",
    options: [
      "Deletes a table permanently.",
      "Deletes all rows from a table, an operation that cannot typically be rolled back.",
      "Deletes all rows from a table one by one, firing delete triggers for each row.",
      "Removes all indexes from a table."
    ],
    correctAnswer: 1,
    explanation: "TRUNCATE is a DDL command that is much faster than DELETE for clearing a table because it deallocates data pages without scanning each row. It's generally not transactional."
  },
  {
    id: 141,
    question: "You need to store simple key-value pairs for caching web session data, where lookup speed is the top priority. What is the most appropriate type of database?",
    options: [
      "Relational Database",
      "Graph Database",
      "In-memory Key-Value Store",
      "Document Database"
    ],
    correctAnswer: 2,
    explanation: "In-memory databases like Redis or Memcached are designed for this exact purpose. By storing data in RAM, they provide extremely low-latency read and write operations, perfect for caching."
  },
  {
    id: 142,
    question: "What is the purpose of the ON DELETE CASCADE constraint on a foreign key?",
    options: [
      "It prevents the deletion of a row in the parent table if corresponding rows exist in the child table.",
      "When a row in the parent table is deleted, it automatically deletes all corresponding rows in the child table.",
      "It automatically sets the foreign key values in the child table to NULL when a parent row is deleted.",
      "It sends a cascade of notifications to the application when a row is deleted."
    ],
    correctAnswer: 1,
    explanation: "This is a powerful feature for maintaining referential integrity. It creates a cascading effect, useful for things like deleting an order and automatically deleting all of its associated line items."
  },
  {
    id: 143,
    question: "What is the primary purpose of using database views for security?",
    options: [
      "To encrypt the data in the underlying tables.",
      "To speed up queries for authorized users.",
      "To restrict user access to a specific subset of rows and columns from a table.",
      "To create a physical copy of the data for secure analysis."
    ],
    correctAnswer: 2,
    explanation: "Views act as a layer of abstraction. By granting users access to a view instead of the base table, you can control exactly what data they see, such as hiding columns with sensitive information."
  },
  {
    id: 144,
    question: "What is Transparent Data Encryption (TDE)?",
    options: [
      "A method that encrypts data before it is sent from the application to the database.",
      "A process that encrypts the database's physical data and log files on disk in real-time.",
      "An SQL function used to manually encrypt and decrypt values in a column.",
      "A security protocol for network connections to the database."
    ],
    correctAnswer: 1,
    explanation: "TDE protects data 'at rest.' It encrypts the database files, preventing unauthorized access if the physical media (disks or backups) are stolen. It is 'transparent' because it's handled automatically by the DBMS."
  },
  {
    id: 145,
    question: "What is Role-Based Access Control (RBAC) in a database?",
    options: [
      "A model where every user is granted permissions individually.",
      "A model where permissions are granted to roles, and users are then assigned to those roles.",
      "A model where access is determined by the user's IP address.",
      "A model where every user has the same level of access."
    ],
    correctAnswer: 1,
    explanation: "RBAC simplifies permission management. Instead of granting many permissions to many users individually, you grant permissions to a role and then assign users to that role."
  },
  {
    id: 146,
    question: "What is the purpose of database auditing?",
    options: [
      "To improve the performance of queries.",
      "To track and log specific events that occur on a database server, such as logins or data modifications.",
      "To prevent deadlocks.",
      "To enforce data normalization rules."
    ],
    correctAnswer: 1,
    explanation: "Auditing creates a record of database activity. This is crucial for security (detecting suspicious activity), compliance (meeting regulatory requirements), and troubleshooting (determining who changed what and when)."
  },
  {
    id: 147,
    question: "In a distributed system, what is the main drawback of the Two-Phase Commit (2PC) protocol?",
    options: [
      "It does not guarantee consistency.",
      "It is a blocking protocol; if the coordinator fails, participating nodes can remain blocked and unable to proceed.",
      "It only works with two nodes.",
      "It is very fast but can lose data."
    ],
    correctAnswer: 1,
    explanation: "2PC's greatest weakness is its single point of failure (the coordinator). If the coordinator crashes mid-protocol, participants don't know the final outcome and must wait, holding locks and resources."
  },
  {
    id: 148,
    question: "An AP system (according to the CAP theorem) like Apache Cassandra prioritizes which two guarantees during a network partition?",
    options: [
      "Consistency and Partition Tolerance",
      "Availability and Consistency",
      "Availability and Partition Tolerance",
      "Atomicity and Durability"
    ],
    correctAnswer: 2,
    explanation: "An AP system will remain available for reads and writes even if some nodes cannot communicate (it tolerates the partition). The trade-off is that it sacrifices strong consistency for eventual consistency."
  },
  {
    id: 149,
    question: "What is a 'split-brain' scenario in a distributed database cluster?",
    options: [
      "When the database CPU is overloaded.",
      "A situation where, due to a network partition, two or more subsets of nodes believe they are the only active primary partition, leading to data divergence.",
      "When a query is split between two different execution plans.",
      "A security breach where the database is split into two halves."
    ],
    correctAnswer: 1,
    explanation: "This is a dangerous state where both partitions may accept writes independently. When the network connection is restored, the cluster has two conflicting versions of the truth. Mechanisms like quorums are used to prevent this."
  },
  {
    id: 150,
    question: "What is a 'quorum' in the context of a distributed database?",
    options: [
      "The minimum number of servers required to run the database.",
      "The maximum number of concurrent connections allowed.",
      "The minimum number of nodes that must participate in an operation for it to be considered successful.",
      "A type of query language."
    ],
    correctAnswer: 2,
    explanation: "Quorums are used to ensure consistency. For example, in a 5-node cluster, a write quorum of 3 ensures an operation is acknowledged only after replicating to at least 3 nodes, preventing data loss and split-brain."
  },
  {
    id: 151,
    question: "In a query execution plan, what is the key difference between an 'Index Seek' and an 'Index Scan'?",
    options: [
      "A Seek is faster than a Scan.",
      "A Seek uses the B-tree structure to directly navigate to the desired rows, while a Scan reads all the leaf pages of the index.",
      "A Seek can only be used on primary keys.",
      "A Scan is always better for performance."
    ],
    correctAnswer: 1,
    explanation: "An Index Seek is highly efficient for selective queries as it directly locates the data. An Index Scan reads the entire index, which is less efficient but still better than a full table scan if the index is smaller than the table."
  },
  {
    id: 152,
    question: "Why might a query optimizer choose NOT to use an available index for a query?",
    options: [
      "The query is too complex.",
      "The index is on a different table.",
      "The optimizer estimates that a full table scan would be cheaper (e.g., if the query returns a very large percentage of the table's rows).",
      "The index is disabled by default."
    ],
    correctAnswer: 2,
    explanation: "If a query is not very selective (returns many rows), it can be faster for the database to just read the table sequentially (table scan) rather than performing thousands of individual index lookups."
  },
  {
    id: 153,
    question: "What is a function-based index?",
    options: [
      "An index that is only used inside a function.",
      "An index that is built on the result of a function or expression involving one or more columns.",
      "An index that automatically calculates aggregate functions.",
      "An index that is stored in a separate file."
    ],
    correctAnswer: 1,
    explanation: "This is useful when queries frequently filter on a function applied to a column. For example, an index on LOWER(LastName) would allow a fast seek for a query like WHERE LOWER(LastName) = 'smith'."
  },
  {
    id: 154,
    question: "How does indexing handle a LIKE clause with a leading wildcard, such as LIKE '%smith'?",
    options: [
      "It uses the index efficiently with an Index Seek.",
      "It can typically not use a standard B-tree index to perform a seek.",
      "It uses the index more efficiently than a trailing wildcard ('smith%').",
      "It requires a special type of LIKE index."
    ],
    correctAnswer: 1,
    explanation: "A B-tree index is sorted alphabetically. A trailing wildcard ('smith%') is efficient because the database can seek to 'smith'. A leading wildcard ('%smith') is inefficient because the starting point is unknown, often forcing a full index or table scan."
  },
  {
    id: 155,
    question: "What is the primary purpose of setting a 'Fill Factor' when creating an index?",
    options: [
      "To specify the maximum size of the index.",
      "To leave a percentage of free space on index pages to accommodate future growth without page splits.",
      "To fill the index pages to 100% capacity for better read performance.",
      "To determine how many columns can be included in the index."
    ],
    correctAnswer: 1,
    explanation: "A lower fill factor leaves empty space on index pages, reducing the frequency of 'page splits' (an expensive operation) when new data is inserted, at the cost of a slightly larger index size."
  },
  {
    id: 156,
    question: "In SQL, what is the difference between COUNT(*) and COUNT(column_name)?",
    options: [
      "They are always identical.",
      "COUNT(*) counts all rows, while COUNT(column_name) counts only the non-null values in that specific column.",
      "COUNT(column_name) is always faster than COUNT(*).",
      "COUNT(*) is deprecated and should not be used."
    ],
    correctAnswer: 1,
    explanation: "This is a crucial distinction. COUNT(*) is the standard way to get the total row count. COUNT(column_name) is used when you need to count the rows where a particular attribute has a value (is not NULL)."
  },
  {
    id: 157,
    question: "How can you delete duplicate rows from a table while keeping only one instance of each?",
    options: [
      "Using a DELETE statement with a GROUP BY clause.",
      "It is not possible with a single SQL statement.",
      "Using a CTE with a window function like ROW_NUMBER() to identify and then delete the duplicates.",
      "Using the TRUNCATE command."
    ],
    correctAnswer: 2,
    explanation: "A common pattern is to use ROW_NUMBER() partitioned by the duplicate columns. This assigns a sequence number to each group of duplicates, allowing you to DELETE all rows where the number is greater than 1."
  },
  {
    id: 158,
    question: "What will be the result of performing an INNER JOIN on two tables using a join column that contains NULL values?",
    options: [
      "The NULL values will be treated as equal, and rows with NULL will be joined together.",
      "It will result in a Cartesian product.",
      "Rows where the join column is NULL in either table will be excluded from the result set.",
      "It will produce a syntax error."
    ],
    correctAnswer: 2,
    explanation: "The join condition tableA.id = tableB.id evaluates to UNKNOWN, not TRUE, when one of the values is NULL. Therefore, these rows do not satisfy the INNER JOIN criteria and are omitted from the result."
  },
  {
    id: 159,
    question: "What is the primary use case of the SQL MERGE (or UPSERT) statement?",
    options: [
      "To combine the schemas of two different tables.",
      "To conditionally perform an INSERT, UPDATE, or DELETE in a single atomic statement based on a join.",
      "To merge two database files into one.",
      "To calculate the merge-join of two tables."
    ],
    correctAnswer: 1,
    explanation: "The MERGE statement is extremely useful for synchronizing data. It checks if a row from a source exists in the target. If it does, it can UPDATE; if not, it can INSERT, avoiding the need for multiple separate statements."
  },
  {
    id: 160,
    question: "A critical DELETE statement was accidentally run on a production table without a WHERE clause. The database is in full recovery mode. What is the most appropriate recovery strategy?",
    options: [
      "Immediately shut down the server to prevent further damage.",
      "Hope that the transaction can be rolled back if it hasn't been committed.",
      "Perform a point-in-time recovery (PITR) by restoring the last full backup and applying transaction logs up to the moment just before the faulty DELETE.",
      "Manually re-insert the data from a development machine."
    ],
    correctAnswer: 2,
    explanation: "This is the primary purpose of maintaining full backups and transaction logs. PITR allows a DBA to restore the database to a consistent state at any specific moment, effectively 'rewinding' the database to undo catastrophic errors."
  },
  {
    id: 161,
    question: "A query that was performing well yesterday is suddenly very slow today. The query and table schema have not changed. What is a likely cause?",
    options: [
      "The network connection is slower.",
      "The database statistics have become outdated, causing the query optimizer to choose a poor execution plan.",
      "The server has run out of disk space.",
      "A user has locked the entire database."
    ],
    correctAnswer: 1,
    explanation: "This is a classic issue. If data distribution has changed significantly, the optimizer's statistics may no longer be accurate, causing it to switch from an efficient Index Seek to an inefficient Table Scan. Running UPDATE STATISTICS often resolves the issue."
  },
  {
    id: 162,
    question: "Your application is extremely read-heavy. What is a common architectural pattern for scaling the database to handle the increased read traffic?",
    options: [
      "Sharding the database.",
      "Increasing the CPU and RAM of the primary database server (vertical scaling).",
      "Implementing a read-replica (or follower) architecture.",
      "Adding more indexes to every table."
    ],
    correctAnswer: 2,
    explanation: "This pattern involves creating copies (replicas) of the primary database. Writes go to the primary, and reads are directed to the replicas, distributing the load and freeing up the primary server to handle writes efficiently."
  },
  {
    id: 163,
    question: "You need to design a database schema for a multi-tenant application where some clients demand complete physical isolation. What is the strongest isolation strategy?",
    options: [
      "A single shared database with a tenant_id column in every table.",
      "A single database with a separate schema for each tenant.",
      "A completely separate database instance for each tenant.",
      "A single table with a JSON column to hold all tenant data."
    ],
    correctAnswer: 2,
    explanation: "While using a tenant_id column is common, a separate database instance provides the highest level of security and physical isolation, preventing any possibility of data leakage between tenants at the database level."
  },
  {
    id: 164,
    question: "A nightly data import job is taking too long. Which strategy is most likely to provide a significant speed-up for a large bulk insert?",
    options: [
      "Wrapping every single INSERT statement in its own transaction.",
      "Disabling indexes and foreign key constraints before the import and re-enabling them after.",
      "Running the import through the application layer instead of directly on the database.",
      "Increasing the network bandwidth between the application and the database."
    ],
    correctAnswer: 1,
    explanation: "For every row inserted, the database has to update all its indexes and check constraints, creating massive overhead. Disabling them allows the data to be loaded much more quickly, after which the indexes can be rebuilt efficiently."
  },
  {
    id: 165,
    question: "What is the primary difference between DROP TABLE and TRUNCATE TABLE?",
    options: [
      "TRUNCATE deletes the table structure, while DROP only deletes the data.",
      "DROP removes the entire table object (data and schema), while TRUNCATE only removes all data rows.",
      "TRUNCATE can be rolled back, but DROP cannot.",
      "DROP is faster than TRUNCATE."
    ],
    correctAnswer: 1,
    explanation: "TRUNCATE is a 'delete all rows' command that leaves the table structure intact. DROP is a more destructive command that completely removes the table and all its associated objects (indexes, constraints) from the database."
  },
  {
    id: 166,
    question: "In a query plan, what does a 'Bookmark Lookup' (or 'Key Lookup') operation signify?",
    options: [
      "The query is using a bookmark to return to a previous step in the plan.",
      "The query used a non-clustered index, but then had to perform an additional lookup into the main table to retrieve columns not present in the index.",
      "The query optimizer has bookmarked this query for future analysis.",
      "The data was found in the database's in-memory cache."
    ],
    correctAnswer: 1,
    explanation: "This is a common performance bottleneck. The index seek is fast, but the subsequent lookups into the main table can be slow if they happen many times. This can often be resolved by creating a 'covering index'."
  },
  {
    id: 167,
    question: "What is the fundamental difference between the WHERE clause and the ON clause in a LEFT JOIN?",
    options: [
      "There is no difference; they are interchangeable.",
      "The ON clause specifies how tables are joined, while the WHERE clause filters rows after the join.",
      "The WHERE clause can only be used with INNER JOINs.",
      "The ON clause is for joining and the WHERE is for filtering, and the order of operations matters."
    ],
    correctAnswer: 3,
    explanation: "This is a critical distinction. For an OUTER JOIN, conditions in the ON clause are applied *before* the join, determining matches. Conditions in the WHERE clause are applied *after* the join, filtering the final result set. Placing a filter on the right table in the WHERE clause can effectively turn a LEFT JOIN into an INNER JOIN."
  },
  {
    id: 168,
    question: "What is the purpose of the PIVOT operator in SQL?",
    options: [
      "To rotate the server logs.",
      "To transform rows into columns, turning unique values from one column into multiple new columns.",
      "To transform columns into rows.",
      "To create a pivot table chart from the data."
    ],
    correctAnswer: 1,
    explanation: "PIVOT is used to create cross-tabular reports. For example, it can take sales data with a 'Month' column and create a report where each month ('Jan', 'Feb', 'Mar') becomes its own column."
  },
  {
    id: 169,
    question: "What is a 'SARGable' query predicate?",
    options: [
      "A predicate that is too complex for the optimizer to understand.",
      "A predicate that refers to a specific user-defined argument.",
      "A predicate in a WHERE clause that is written to allow the database engine to use an index.",
      "A predicate that is guaranteed to return only a single row."
    ],
    correctAnswer: 2,
    explanation: "SARGable stands for 'Search ARGument-able.' A non-SARGable predicate like 'WHERE YEAR(OrderDate) = 2023' prevents index use on OrderDate. The SARGable equivalent is 'WHERE OrderDate >= '2023-01-01' AND OrderDate < '2024-01-01'."
  },
  {
    id: 170,
    question: "What is the primary drawback of using SQL cursors for data processing?",
    options: [
      "They are not supported by all database systems.",
      "They generally have poor performance due to their row-by-row processing nature.",
      "They can only be used with SELECT statements.",
      "They consume a large amount of disk space."
    ],
    correctAnswer: 1,
    explanation: "SQL is designed for highly optimized set-based operations. Cursors force the engine into an iterative, row-by-row loop ('RBAR' - Row By Agonizing Row), which incurs significant overhead for each row and is almost always slower than a single, equivalent set-based statement."
  },
  {
    id: 171,
    question: "A banking transaction withdraws money from one account and deposits it into another. If the system crashes after the withdrawal but before the deposit, which ACID property ensures the withdrawal is undone?",
    options: [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    correctAnswer: 0,
    explanation: "Atomicity ensures that a transaction is an 'all or nothing' operation. Since the entire transaction did not complete successfully, the database will roll back the partial change (the withdrawal), ensuring the database returns to its original state."
  },
  {
    id: 172,
    question: "A report needs a consistent view of data as it existed when the report began. Other users are modifying the same data. Which transaction isolation level is the minimum required to prevent the report from seeing these mid-transaction changes?",
    options: [
      "Read Uncommitted",
      "Read Committed",
      "Repeatable Read",
      "Serializable"
    ],
    correctAnswer: 2,
    explanation: "Read Committed is not sufficient, as it could lead to non-repeatable reads (reading the same row twice and getting different data). Repeatable Read solves this by ensuring that any data read during the transaction will not change if it is read again."
  },
  {
    id: 173,
    question: "In a system using MVCC (Multiversion Concurrency Control), what happens when a long-running read transaction is active while another transaction updates and commits a change to a row?",
    options: [
      "The read transaction is blocked until the update transaction finishes.",
      "The read transaction immediately sees the newly committed data.",
      "The read transaction continues to see the older version of the data as it existed when the read transaction began.",
      "The read transaction is automatically aborted."
    ],
    correctAnswer: 2,
    explanation: "This is the core benefit of MVCC. The database maintains the old version of the row for the long-running transaction to read, while new transactions can work with the newly committed version. This prevents readers from blocking writers."
  },
  {
    id: 174,
    question: "What is the 'lost update' anomaly?",
    options: [
      "When a transaction reads data that was written by another uncommitted transaction.",
      "When two transactions both read the same data, then both perform a modification and write it back, with the second write overwriting the first.",
      "When a transaction reads the same row twice and gets different values.",
      "When a query returns a different number of rows upon re-execution."
    ],
    correctAnswer: 1,
    explanation: "This classic concurrency problem occurs when access is not properly controlled. For example, two users retrieve a product quantity of 10. User A updates it to 9, and User B updates it to 11. If User B's write happens last, User A's update is 'lost'."
  },
  {
    id: 175,
    question: "What is the fundamental trade-off presented by the CAP theorem?",
    options: [
      "Between Normalization and Performance.",
      "Between Security and Usability.",
      "In a distributed system facing a network partition, you must choose between maintaining Consistency or Availability.",
      "Between Memory usage and CPU usage."
    ],
    correctAnswer: 2,
    explanation: "The theorem states a distributed system can only provide two of the three guarantees: Consistency (C), Availability (A), and Partition Tolerance (P). Since network partitions (P) are a reality, the real-world choice is between Consistency and Availability."
  },
  {
    id: 176,
    question: "What is the primary benefit of using a connection pool in an application?",
    options: [
      "It increases the number of users who can connect to the database simultaneously.",
      "It reduces the latency and resource overhead of establishing and tearing down database connections for each request.",
      "It encrypts the connection between the application and the database.",
      "It automatically balances the query load across multiple database servers."
    ],
    correctAnswer: 1,
    explanation: "Establishing a database connection is an expensive operation. A connection pool pre-establishes a set of connections and keeps them open. The application borrows a connection from the pool and returns it, which is much faster than creating a new one every time."
  },
  {
    id: 177,
    question: "When would you choose a Document Database over a Relational Database?",
    options: [
      "When your data has a rigid, well-defined structure that rarely changes.",
      "When your application requires complex multi-row ACID transactions as its primary function.",
      "When your data is semi-structured or hierarchical, and the schema needs to evolve rapidly without downtime.",
      "When your primary need is to run complex analytical queries with many joins."
    ],
    correctAnswer: 2,
    explanation: "Document databases excel with flexible schemas (e.g., product catalogs where attributes differ). Their ability to store related data in a single document can also simplify queries for certain use cases."
  },
  {
    id: 178,
    question: "What is a potential major drawback of using an Object-Relational Mapper (ORM)?",
    options: [
      "It forces developers to write more SQL code.",
      "It can generate inefficient SQL queries, abstracting away the underlying database performance characteristics.",
      "It only works with NoSQL databases.",
      "It is less secure than writing raw SQL."
    ],
    correctAnswer: 1,
    explanation: "While ORMs improve developer productivity, this abstraction can be leaky. For complex scenarios, the SQL generated by the ORM might be suboptimal (e.g., the N+1 query problem), requiring manual tuning."
  },
  {
    id: 179,
    question: "In a microservices architecture, what is the recommended approach for database management?",
    options: [
      "A single, monolithic database shared by all microservices.",
      "Each microservice should own and manage its own private database.",
      "All microservices should connect to a central data warehouse.",
      "Microservices should be stateless and not use a database."
    ],
    correctAnswer: 1,
    explanation: "This principle is called 'database per service.' It ensures that microservices are loosely coupled. If services share a database, a schema change required by one service could break another, violating their independence."
  },
  {
    id: 180,
    question: "What does the acronym BASE, often associated with NoSQL databases, stand for?",
    options: [
      "Balanced, Atomic, Secure, Efficient.",
      "Before All, Save Everything.",
      "Basically Available, Soft state, Eventually consistent.",
      "Binary, Accessible, Structured, Encoded."
    ],
    correctAnswer: 2,
    explanation: "BASE is an alternative to the ACID guarantees. It describes a system that prioritizes availability (Basically Available) and accepts that data will cohere over time (Eventually consistent) rather than being strictly consistent after every write."
  },
  {
    id: 181,
    question: "You need to store geospatial data and perform queries like 'find all restaurants within 2 miles of a given point.' What feature should you look for in a database?",
    options: [
      "Support for XML data types.",
      "Built-in support for spatial data types and functions (e.g., PostGIS for PostgreSQL).",
      "A high-performance transaction log.",
      "Column-level encryption."
    ],
    correctAnswer: 1,
    explanation: "Specialized spatial extensions provide the necessary data types (e.g., Point, Polygon) and, more importantly, spatial indexes (like R-trees) that can execute proximity and containment queries efficiently."
  },
  {
    id: 182,
    question: "What is the 'N+1 query problem'?",
    options: [
      "A problem where a query returns one more row than expected.",
      "A performance issue where an application makes N additional database queries to fetch related data for a list of N items, instead of fetching it all in one query.",
      "A security flaw where an attacker can execute N+1 malicious queries.",
      "A situation where adding one more index to a table (N+1) slows down performance."
    ],
    correctAnswer: 1,
    explanation: "This is a common inefficiency where an app queries for a list (1 query), then loops through the list, making a separate database call for each item (N queries). The efficient solution is a single join or a second query that fetches all related data at once."
  },
  {
    id: 183,
    question: "Why might a developer intentionally use a 'query hint'?",
    options: [
      "To add a comment to the query explaining its purpose.",
      "To suggest a specific execution plan to the query optimizer, overriding its default decision.",
      "To mark a query as high-priority.",
      "To tell the database to cache the query results."
    ],
    correctAnswer: 1,
    explanation: "This is an advanced technique used when a developer knows something about the data that the optimizer's statistics don't reflect. It can force the use of a specific index or join algorithm but should be used with caution."
  },
  {
    id: 184,
    question: "What is the purpose of the EXPLAIN (or EXPLAIN PLAN) command?",
    options: [
      "To execute a query and return its results with detailed comments.",
      "To ask the query optimizer to show the execution plan it would choose for a given query, without actually executing it.",
      "To get a plain-English explanation of the SQL syntax.",
      "To back up the query text to a file."
    ],
    correctAnswer: 1,
    explanation: "Analyzing the output of EXPLAIN is the most important activity in performance tuning. It reveals how the database intends to access the data, including table scans, index usage, and join order."
  },
  {
    id: 185,
    question: "In a table with no clustered index (a 'heap'), where is a new row physically inserted?",
    options: [
      "Always at the physical end of the data file.",
      "In alphabetical order based on the primary key.",
      "Into the first data page with enough free space to hold the row.",
      "The location is completely random."
    ],
    correctAnswer: 2,
    explanation: "The database maintains a Page Free Space (PFS) map for heap tables to track pages with available room. It consults the PFS to quickly find a suitable page. If no page has space, it allocates a new one."
  },
  {
    id: 186,
    question: "Why is it a bad practice to use SELECT * in production application code?",
    options: [
      "It is not valid SQL syntax.",
      "It can create a security risk by exposing all columns.",
      "It creates a tight coupling between the application and the database schema; adding a new column can break the application.",
      "Both b and c are correct."
    ],
    correctAnswer: 3,
    explanation: "Explicitly listing columns is a best practice. SELECT * is brittle because a schema change can cause application errors. It's also inefficient as it may retrieve large, unnecessary columns, and can inadvertently expose newly added sensitive data."
  },
  {
    id: 187,
    question: "You need to run a computationally expensive update on millions of rows in a critical production table. What is a good strategy to minimize the impact on performance and locking?",
    options: [
      "Run the entire update in one massive transaction during peak business hours.",
      "Perform the update in smaller, manageable batches within a loop, with short pauses between batches.",
      "Use a cursor to update the table row by agonizing row.",
      "Drop all indexes on the table before running the update."
    ],
    correctAnswer: 1,
    explanation: "A single massive update will create a very long-running transaction, hold locks for an extended period, and generate a huge amount of transaction log. Batching the work breaks it into many smaller, quicker transactions, which minimizes locking and log impact."
  },
  {
    id: 188,
    question: "What is database 'contention'?",
    options: [
      "The process of competing for the DBA's attention.",
      "A situation where two or more processes are competing for access to the same resource in a way that slows down the system.",
      "The physical size of the database on disk.",
      "The number of tables in a database."
    ],
    correctAnswer: 1,
    explanation: "Contention is a general term for performance bottlenecks caused by competition for resources. This could be lock contention (waiting for a lock), I/O contention (multiple queries trying to read from a slow disk), or CPU contention."
  },
  {
    id: 189,
    question: "What is the purpose of a CHECK constraint?",
    options: [
      "To ensure that a value in a column is unique.",
      "To check if a table exists before creating it.",
      "To define a rule that limits the values that can be entered into one or more columns in a table.",
      "To establish a link between two tables."
    ],
    correctAnswer: 2,
    explanation: "A CHECK constraint is used to enforce domain integrity. For example, you could add a CHECK constraint to a Salary column to ensure the value is always greater than zero (Salary > 0)."
  },
  {
    id: 190,
    question: "What does the UNION operator do, and how does it differ from UNION ALL?",
    options: [
      "UNION combines two result sets and removes duplicate rows; UNION ALL combines them but keeps all rows, including duplicates.",
      "UNION requires the tables to have the same name; UNION ALL does not.",
      "UNION is for joining tables; UNION ALL is for appending rows.",
      "They are identical."
    ],
    correctAnswer: 0,
    explanation: "This is a key distinction. Because UNION has to perform an extra step to identify and remove duplicates, UNION ALL is significantly more performant and should be used when you know the result sets are already distinct or when duplicates are acceptable."
  },
  {
    id: 191,
    question: "Which of the following commands is used to remove a user's access rights to a database object?",
    options: [
      "DELETE",
      "DROP",
      "REVOKE",
      "REMOVE"
    ],
    correctAnswer: 2,
    explanation: "The REVOKE command is a Data Control Language (DCL) command used to take away permissions that were previously granted to a user with the GRANT command."
  },
  {
    id: 192,
    question: "What is a 'self-join' primarily used for?",
    options: [
      "Joining a table to a copy of itself to improve performance.",
      "Querying hierarchical data or comparing rows within the same table.",
      "A syntax error that occurs when a table name is repeated in a query.",
      "To create a backup of a single table."
    ],
    correctAnswer: 1,
    explanation: "A self-join links a table to itself. A classic example is querying an 'Employees' table to find each employee and their corresponding manager, where both are stored in the same table."
  },
  {
    id: 193,
    question: "What is the highest normal form of a relation R(A, B, C) with functional dependencies {A -> B, B -> C}?",
    options: [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    correctAnswer: 1,
    explanation: "The candidate key is A. There are no partial dependencies. However, there is a transitive dependency: A -> B and B -> C, so C is transitively dependent on the key A. This violates 3NF, so the highest normal form is 2NF."
  },
  {
    id: 194,
    question: "Which type of lock allows multiple transactions to read the same data item concurrently?",
    options: [
      "Exclusive Lock (X-Lock)",
      "Deadlock",
      "Update Lock",
      "Shared Lock (S-Lock)"
    ],
    correctAnswer: 3,
    explanation: "A Shared Lock (or Read Lock) is non-exclusive. If a transaction holds an S-lock on an item, other transactions can also acquire an S-lock on the same item, but no transaction can acquire an Exclusive (write) Lock."
  },
  {
    id: 195,
    question: "What is a key benefit of a column-oriented database for analytics?",
    options: [
      "They are better at handling high-frequency transactions.",
      "They offer stronger ACID guarantees than row-oriented databases.",
      "They are highly efficient at aggregating data from a small number of columns across millions of rows.",
      "They simplify the process of data normalization."
    ],
    correctAnswer: 2,
    explanation: "Columnar databases store data by columns instead of rows. For a query like 'SUM(Sales)', the database only needs to read the 'Sales' column data, drastically reducing I/O compared to a row-store that would have to read every entire row."
  },
  {
    id: 196,
    question: "What is the function of the COALESCE function in SQL?",
    options: [
      "To combine two result sets.",
      "To return the first non-NULL value from a list of arguments.",
      "To convert a value's data type.",
      "To calculate the total number of rows in a query."
    ],
    correctAnswer: 1,
    explanation: "COALESCE evaluates arguments in order and returns the first one that is not NULL. It is a very common and convenient way to substitute a default value for NULLs, for example, COALESCE(PhoneNumber, 'N/A')."
  },
  {
    id: 197,
    question: "What does it mean if a database is in a 'consistent' state, according to the ACID properties?",
    options: [
      "The database is always available for read and write operations.",
      "Any transaction will bring the database from one valid state to another.",
      "All reads will receive the most recently written data.",
      "Multiple transactions can run at the same time without interfering with each other."
    ],
    correctAnswer: 1,
    explanation: "Consistency ensures that a transaction can only bring the database from one valid state to another, preserving all predefined rules, such as constraints, cascades, and triggers. Any transaction that would violate these rules is rolled back."
  },
  {
    id: 198,
    question: "Which clause is used to filter the results of a query *after* the grouping has been performed by a GROUP BY clause?",
    options: [
      "WHERE",
      "ON",
      "HAVING",
      "FILTER"
    ],
    correctAnswer: 2,
    explanation: "The WHERE clause filters rows before they are grouped. The HAVING clause is specifically designed to filter the aggregated results of a GROUP BY clause based on a condition applied to the aggregate function (e.g., HAVING COUNT(*) > 10)."
  },
  {
    id: 199,
    question: "Which of the following is NOT a characteristic of a primary key?",
    options: [
      "It must contain unique values.",
      "It cannot contain NULL values.",
      "It can be referenced by a foreign key in another table.",
      "A table can have multiple primary keys."
    ],
    correctAnswer: 3,
    explanation: "A fundamental rule of relational database design is that a table can have one and only one primary key. This key is used to uniquely identify each row in the table."
  },
  {
    id: 200,
    question: "What is the main purpose of normalization?",
    options: [
      "To maximize data redundancy to ensure data is never lost.",
      "To minimize data redundancy and improve data integrity.",
      "To make database queries run faster by creating one large table.",
      "To create a standardized set of table names."
    ],
    correctAnswer: 1,
    explanation: "Normalization is the process of organizing the columns and tables in a relational database to minimize data redundancy. Reducing redundancy helps to eliminate undesirable characteristics like insertion, update, and deletion anomalies, thus improving data integrity."
  }

];