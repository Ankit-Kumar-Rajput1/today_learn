import React from 'react';
// import './JSReact.css';

const NExpress = () => {
  return (
    <div className="container">
      <h1>Node.js</h1>

      <section>
        <h2>What is Node.js?</h2>
        <p>
          Node.js is a runtime environment that allows you to run JavaScript on the server. It is built on Chrome's V8 engine and is known for its non-blocking, event-driven architecture.
        </p>
      </section>

      <section>
        <h2>Node.js Features</h2>
        <ul>
          <li>Asynchronous and Event Driven</li>
          <li>Very Fast (Powered by V8 Engine)</li>
          <li>Single Threaded but Highly Scalable</li>
          <li>No Buffering</li>
          <li>Open Source and Cross-Platform</li>
        </ul>
      </section>

      <section>
        <h2>Node.js Example</h2>
        <pre>{`// Hello World in Node.js
const http = require('http');

http.createServer((req, res) => {
  res.write('Hello, Node.js!');
  res.end();
}).listen(3000);`}</pre>
      </section>

      <section>
        <h2>Node.js Interview Questions</h2>
        <ol>
          <li><strong>Q: What is Node.js?</strong><br />A: A runtime to execute JavaScript code outside the browser, mainly used for backend.</li>
          <li><strong>Q: What is the use of npm?</strong><br />A: npm is the package manager for Node.js, used to install libraries.</li>
          <li><strong>Q: What is the event loop in Node.js?</strong><br />A: It handles asynchronous operations in a non-blocking way.</li>
          <li><strong>Q: What is a callback function?</strong><br />A: A function passed into another function as an argument, to be executed later.</li>
          <li><strong>Q: How do you handle exceptions in Node.js?</strong><br />A: Using try-catch or by handling errors in callbacks and promises.</li>
        </ol>
      </section>

      <hr />

      <h1>Express.js</h1>

      <section>
        <h2>What is Express.js?</h2>
        <p>
          Express.js is a lightweight web framework for Node.js used to build web applications and APIs. It simplifies routing, middleware, and HTTP handling.
        </p>
      </section>

      <section>
        <h2>Express.js Example</h2>
        <pre>{`// Basic Express Server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});`}</pre>
      </section>

      <section>
        <h2>Express.js Interview Questions</h2>
        <ol>
          <li><strong>Q: What is Express.js?</strong><br />A: A web framework for Node.js that simplifies HTTP server creation.</li>
          <li><strong>Q: What is middleware in Express?</strong><br />A: Functions that execute during request processing and have access to req/res.</li>
          <li><strong>Q: What is the difference between app.use() and app.get()?</strong><br />A: app.use() is for middleware, app.get() is for GET route handling.</li>
          <li><strong>Q: How to send JSON in response?</strong><br />A: Use <code>res.json(&#123; key: "value" &#125;)</code> to send JSON data.</li>
          <li><strong>Q: How do you handle 404 errors?</strong><br />A: Use a middleware at the end: <code>app.use((req, res) =&gt; res.status(404).send("Not Found"));</code></li>
        </ol>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Node.js and Express.js together provide a powerful stack to build scalable and fast server-side applications using JavaScript.
        </p>
      </section>
    </div>
  );
};

export default NExpress;
