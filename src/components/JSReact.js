import React from 'react';
//import './JSReact.css';

const JSReact = () => {
  return (
    <div className="html-container">
      <h1>JavaScript (JS)</h1>

      <section>
        <h2>What is JavaScript?</h2>
        <p>
          JavaScript is a scripting language used to make web pages interactive. It runs in the browser and can update content, control multimedia, and more.
        </p>
      </section>

      <section>
        <h2>JavaScript Example</h2>
        <pre>{`<script>
  alert('Hello, JavaScript!');
</script>`}</pre>
      </section>

      <section>
        <h2>JavaScript Interview Questions</h2>
        <ol>
          <li><strong>Q: What is JavaScript?</strong><br />A: A client-side scripting language used to make web pages interactive.</li>
          <li><strong>Q: What is the difference between == and ===?</strong><br />A: == checks value, === checks value and type.</li>
          <li><strong>Q: What are closures?</strong><br />A: Functions that remember their outer scope even after the outer function has finished executing.</li>
          <li><strong>Q: What is an array in JS?</strong><br />A: A collection of items stored in a single variable.</li>
          <li><strong>Q: What is event bubbling?</strong><br />A: An event propagates from the target element up to the root.</li>
        </ol>
      </section>

      <hr />

      <h1>React.js</h1>

      <section>
        <h2>What is React?</h2>
        <p>
          React is a JavaScript library for building user interfaces. It uses components, virtual DOM, and JSX.
        </p>
      </section>

      <section>
        <h2>React Component Example</h2>
        <pre>{`import React from 'react';

function Welcome() {
  return <h1>Hello, React!</h1>;
}

export default Welcome;`}</pre>
      </section>

      <section>
        <h2>React Interview Questions</h2>
        <ol>
          <li><strong>Q: What is React?</strong><br />A: A JavaScript library for building UI using components.</li>
          <li><strong>Q: What is JSX?</strong><br />A: JSX is JavaScript XML. It lets you write HTML in JavaScript.</li>
          <li><strong>Q: What is a component?</strong><br />A: Reusable pieces of UI. Can be functional or class-based.</li>
          <li><strong>Q: What is state?</strong><br />A: A built-in object to hold component data that may change over time.</li>
          <li><strong>Q: What is useEffect?</strong><br />A: A Hook that performs side effects in functional components.</li>
        </ol>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          JavaScript adds interactivity, while React helps build structured, scalable UI components. Both are essential in modern web development.
        </p>
      </section>
    </div>
  );
};

export default JSReact;
