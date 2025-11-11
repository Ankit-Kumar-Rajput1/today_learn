import React from 'react';
// import './JSReact.css';

const SqlMysql = () => {
  return (
    <div className="html-container">
      <h1>SQL and MySQL</h1>

      <section>
        <h2>What is SQL?</h2>
        <p>
          SQL (Structured Query Language) is a standard programming language used to manage and manipulate relational databases. It allows users to perform tasks such as querying data, updating records, inserting and deleting rows, and managing database structures.
        </p>
      </section>

      <section>
        <h2>SQL Key Features</h2>
        <ul>
          <li>Used for accessing and manipulating databases</li>
          <li>Supports CRUD operations (Create, Read, Update, Delete)</li>
          <li>Allows defining and managing schema (DDL)</li>
          <li>Supports data control via permissions and access rights (DCL)</li>
          <li>Supports transaction control (TCL)</li>
        </ul>
      </section>

      <section>
        <h2>SQL Basic Syntax Example</h2>
        <pre>{`-- Creating a table
CREATE TABLE Students (
  ID INT PRIMARY KEY,
  Name VARCHAR(50),
  Age INT
);

-- Inserting data
INSERT INTO Students (ID, Name, Age)
VALUES (1, 'Alice', 22);

-- Querying data
SELECT * FROM Students;

-- Updating data
UPDATE Students SET Age = 23 WHERE ID = 1;

-- Deleting data
DELETE FROM Students WHERE ID = 1;`}</pre>
      </section>

      <section>
        <h2>What is MySQL?</h2>
        <p>
          MySQL is an open-source relational database management system (RDBMS) that uses SQL to manage data. It is widely used in web applications and supports multi-user access to databases. MySQL is known for its performance, reliability, and ease of use.
        </p>
      </section>

      <section>
        <h2>MySQL Key Features</h2>
        <ul>
          <li>Open-source and free to use</li>
          <li>High performance and scalability</li>
          <li>Secure with access control and user management</li>
          <li>Cross-platform and supported by many languages (PHP, Java, Python, etc.)</li>
          <li>Supports large databases and multiple storage engines</li>
        </ul>
      </section>

      <section>
        <h2>Common SQL Commands</h2>
        <ul>
          <li><strong>DDL (Data Definition Language):</strong> CREATE, DROP, ALTER</li>
          <li><strong>DML (Data Manipulation Language):</strong> SELECT, INSERT, UPDATE, DELETE</li>
          <li><strong>DCL (Data Control Language):</strong> GRANT, REVOKE</li>
          <li><strong>TCL (Transaction Control Language):</strong> COMMIT, ROLLBACK, SAVEPOINT</li>
        </ul>
      </section>

      <section>
        <h2>SQL & MySQL Interview Questions</h2>
        <ol>
          <li><strong>Q: What is SQL?</strong><br />A: SQL is a standard language used to communicate with relational databases for data retrieval and manipulation.</li>
          <li><strong>Q: What is the difference between SQL and MySQL?</strong><br />A: SQL is a language; MySQL is an RDBMS that implements SQL.</li>
          <li><strong>Q: What are joins in SQL?</strong><br />A: Joins combine rows from two or more tables based on a related column (e.g., INNER JOIN, LEFT JOIN).</li>
          <li><strong>Q: What is normalization?</strong><br />A: A process of organizing data to reduce redundancy and improve data integrity.</li>
          <li><strong>Q: What are indexes in SQL?</strong><br />A: Indexes improve the speed of data retrieval by allowing faster searches.</li>
          <li><strong>Q: What is a primary key?</strong><br />A: A unique identifier for a record in a table; it cannot be null and must be unique.</li>
          <li><strong>Q: What is a foreign key?</strong><br />A: A key used to link two tables together, establishing a relationship between them.</li>
          <li><strong>Q: What are ACID properties?</strong><br />A: Atomicity, Consistency, Isolation, Durability – essential properties of a reliable transaction.</li>
        </ol>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          SQL is the foundation of relational database operations, and MySQL is a powerful system that implements SQL. Understanding both is essential for backend development, data analysis, and building data-driven applications.
        </p>
      </section>
    </div>
  );
};

export default SqlMysql;
