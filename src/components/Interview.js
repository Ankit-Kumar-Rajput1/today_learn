// src/FullStack.js
import React from 'react';

const Interview = () => {
  return (
    <div className="html-container">
      <h1>Full Stack Development - Basic Interview Questions</h1>

      {/* Frontend Section */}
      <section>
        <h2>Frontend Development</h2>
        <ol>
          <li><strong>Q: What is the role of a frontend developer?</strong><br />A: To build the user interface and user experience of a web application using HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.</li>
          <li><strong>Q: What is a virtual DOM?</strong><br />A: It's a lightweight representation of the real DOM used by libraries like React to optimize updates.</li>
          <li><strong>Q: What is state and props in React?</strong><br />A: State is internal and mutable; props are external and passed from parent components.</li>
        </ol>
      </section>

      {/* Backend Section */}
      <section>
        <h2>Backend Development</h2>
        <ol>
          <li><strong>Q: What is the backend in web development?</strong><br />A: It's the server-side of an application that handles database operations, business logic, and APIs.</li>
          <li><strong>Q: What is Express.js?</strong><br />A: A minimal and flexible Node.js web application framework that provides robust features for web and mobile apps.</li>
          <li><strong>Q: What is RESTful API?</strong><br />A: REST (Representational State Transfer) is an architectural style for designing networked applications using standard HTTP methods.</li>
        </ol>
      </section>

      {/* Database Section */}
      <section>
        <h2>Database</h2>
        <ol>
          <li><strong>Q: What is the difference between SQL and NoSQL?</strong><br />A: SQL databases are structured and use tables; NoSQL databases are flexible, using document, key-value, or graph models.</li>
          <li><strong>Q: What is MongoDB?</strong><br />A: A popular NoSQL database that stores data in flexible, JSON-like documents.</li>
          <li><strong>Q: What is indexing in a database?</strong><br />A: A technique used to speed up data retrieval by creating data structures that improve search efficiency.</li>
        </ol>
      </section>

      {/* DevOps & Tools */}
      <section>
        <h2>DevOps & Tools</h2>
        <ol>
          <li><strong>Q: What is Git?</strong><br />A: A distributed version control system used to track changes in code and collaborate with teams.</li>
          <li><strong>Q: What is CI/CD?</strong><br />A: Continuous Integration and Continuous Deployment are practices to automate code testing and delivery pipelines.</li>
          <li><strong>Q: What is Docker?</strong><br />A: A tool used to package applications into containers for consistent environments across development and production.</li>
        </ol>
      </section>

      {/* Networking & Deployment */}
      <section>
        <h2>Networking & Deployment</h2>
        <ol>
          <li><strong>Q: What is the purpose of a load balancer?</strong><br />A: To distribute incoming network traffic across multiple servers for improved reliability and performance.</li>
          <li><strong>Q: What is HTTPS and why is it important?</strong><br />A: HTTPS secures data transfer over the web using encryption (SSL/TLS), protecting users' information.</li>
          <li><strong>Q: What is a CDN?</strong><br />A: A Content Delivery Network delivers content to users based on their geographic location, reducing latency.</li>
        </ol>
      </section>

      {/* Soft Skills */}
      <section>
        <h2>Soft Skills & Problem Solving</h2>
        <ol>
          <li><strong>Q: How do you debug a web application?</strong><br />A: Use browser dev tools, logging, error messages, and step-by-step testing to identify issues.</li>
          <li><strong>Q: How do you stay updated with web technologies?</strong><br />A: By reading documentation, following blogs, watching tutorials, and contributing to open-source projects.</li>
          <li><strong>Q: What do you do when you face an unfamiliar problem?</strong><br />A: Break it down, research it, experiment with solutions, and ask for help if needed.</li>
        </ol>
      </section>

      {/* Conclusion */}
      <section>
        <h2>Conclusion</h2>
        <p>
          A Full Stack Developer must understand both frontend and backend technologies, be familiar with databases and deployment tools, and continuously adapt to new trends in the development ecosystem. These basic questions can help prepare for job interviews in the field.
        </p>
      </section>
    </div>
  );
};

export default Interview;
