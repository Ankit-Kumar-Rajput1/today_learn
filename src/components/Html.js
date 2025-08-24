// src/HTML.js
import React from 'react';
//import './HTML.css';

const Html = () => {
  return (
    <div className="html-container">
      <h1>HTML (HyperText Markup Language)</h1>

      {/* HTML Section */}
      <section>
        <h2>What is HTML?</h2>
        <p>
          HTML stands for <strong>HyperText Markup Language</strong>. It is used to create the structure of web pages using tags like headings, paragraphs, links, etc.
        </p>
      </section>

      <section>
        <h2>Basic Structure of an HTML Document</h2>
        <pre>
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`}
        </pre>
      </section>

      <section>
        <h2>Common HTML Tags</h2>
        <ul>
          <li><code>&lt;h1&gt; to &lt;h6&gt;</code> - Headings</li>
          <li><code>&lt;p&gt;</code> - Paragraph</li>
          <li><code>&lt;a&gt;</code> - Link</li>
          <li><code>&lt;img&gt;</code> - Image</li>
          <li><code>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</code> - Lists</li>
          <li><code>&lt;table&gt;</code> - Table</li>
          <li><code>&lt;form&gt;</code> - Form</li>
        </ul>
      </section>

      <section>
        <h2>HTML Example: Form</h2>
        <pre>
{`<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  <br />
  <input type="submit" value="Submit" />
</form>`}
        </pre>
      </section>

      <section>
        <h2>HTML Interview Questions and Answers</h2>
        <ol>
          <li><strong>Q: What is HTML?</strong><br />A: It creates the structure of a web page.</li>
          <li><strong>Q: What are semantic tags?</strong><br />A: Tags that describe content meaningfully like &lt;header&gt;, &lt;article&gt;.</li>
          <li><strong>Q: Difference between &lt;div&gt; and &lt;span&gt;?</strong><br />A: div is block-level, span is inline.</li>
          <li><strong>Q: What is alt in images?</strong><br />A: Text shown when image can’t load; improves accessibility.</li>
          <li><strong>Q: Difference between HTML and HTML5?</strong><br />A: HTML5 supports multimedia, canvas, new semantic elements.</li>
        </ol>
      </section>

      <hr />

      {/* CSS Section */}
      <h1>CSS (Cascading Style Sheets)</h1>

      <section>
        <h2>What is CSS?</h2>
        <p>
          CSS stands for <strong>Cascading Style Sheets</strong>. It is used to style HTML elements (like colors, fonts, spacing, layout).
        </p>
      </section>

      <section>
        <h2>Types of CSS</h2>
        <ul>
          <li><strong>Inline CSS</strong> - Inside HTML tags using <code>style=""</code></li>
          <li><strong>Internal CSS</strong> - Inside &lt;style&gt; in the &lt;head&gt; section</li>
          <li><strong>External CSS</strong> - Linked via an external `.css` file</li>
        </ul>
      </section>

      <section>
        <h2>CSS Syntax Example</h2>
        <pre>
{`p {
  color: blue;
  font-size: 16px;
}`}
        </pre>
      </section>

      <section>
        <h2>Common CSS Selectors</h2>
        <ul>
          <li><code>element</code> (e.g., <code>p</code>, <code>h1</code>)</li>
          <li><code>.class</code> – Targets class (e.g., <code>.box</code>)</li>
          <li><code>#id</code> – Targets ID (e.g., <code>#header</code>)</li>
          <li><code>*</code> – Universal selector</li>
          <li><code>element, element</code> – Group selector</li>
        </ul>
      </section>

      <section>
        <h2>CSS Interview Questions and Answers</h2>
        <ol>
          <li><strong>Q: What is CSS?</strong><br />A: It is used to design and style web pages.</li>
          <li><strong>Q: Types of CSS?</strong><br />A: Inline, Internal, External.</li>
          <li><strong>Q: What is specificity?</strong><br />A: It defines which CSS rule is applied when multiple rules match.</li>
          <li><strong>Q: Difference between class and id?</strong><br />A: ID is unique, class can be used multiple times.</li>
          <li><strong>Q: What is a pseudo-class?</strong><br />A: It styles elements in a special state (e.g., <code>:hover</code>, <code>:focus</code>).</li>
        </ol>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          HTML gives structure, while CSS gives style. Both are essential for building beautiful and functional web pages.
        </p>
      </section>
    </div>
  );
};

export default Html;
