import React from 'react';
// import './JSReact.css';

const PythonReactNative = () => {
  return (
    <div className="container">
      <h1>Python</h1>

      <section>
        <h2>What is Python?</h2>
        <p>
          Python is a high-level, interpreted programming language known for its simplicity, readability, and wide range of applications in web development, data science, automation, machine learning, and more.
        </p>
      </section>

      <section>
        <h2>Python Features</h2>
        <ul>
          <li>Simple and Easy to Learn</li>
          <li>Interpreted Language</li>
          <li>Dynamically Typed</li>
          <li>Extensive Standard Library</li>
          <li>Supports OOP and Functional Programming</li>
        </ul>
      </section>

      <section>
        <h2>Python Example</h2>
        <pre>{`# Python Hello World
def greet():
    print("Hello, Python!")

greet()`}</pre>
      </section>

      <section>
        <h2>Python Interview Questions</h2>
        <ol>
          <li><strong>Q: What is Python?</strong><br />A: A high-level, general-purpose programming language with easy syntax.</li>
          <li><strong>Q: What are Python's key features?</strong><br />A: Easy syntax, dynamic typing, interpreted, cross-platform, and large libraries.</li>
          <li><strong>Q: What are Python data types?</strong><br />A: int, float, str, list, tuple, dict, set, bool.</li>
          <li><strong>Q: What is a Python decorator?</strong><br />A: A function that modifies another function’s behavior.</li>
          <li><strong>Q: How is memory managed in Python?</strong><br />A: Through automatic garbage collection and reference counting.</li>
        </ol>
      </section>

      <hr />

      <h1>React Native</h1>

      <section>
        <h2>What is React Native?</h2>
        <p>
          React Native is an open-source framework developed by Meta (Facebook) that allows you to build native mobile applications using JavaScript and React. Apps run on both iOS and Android platforms.
        </p>
      </section>

      <section>
        <h2>React Native Features</h2>
        <ul>
          <li>Cross-Platform Development</li>
          <li>Reusable Components</li>
          <li>Live and Hot Reloading</li>
          <li>Rich Ecosystem and Community</li>
          <li>Uses Native Components</li>
        </ul>
      </section>

      <section>
        <h2>React Native Example</h2>
        <pre>{`// React Native Hello World
import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Hello, React Native!</Text>
    </View>
  );
};

export default App;`}</pre>
      </section>

      <section>
        <h2>React Native Interview Questions</h2>
        <ol>
          <li><strong>Q: What is React Native?</strong><br />A: A framework to build mobile apps using JavaScript and React.</li>
          <li><strong>Q: How is React Native different from React?</strong><br />A: React is for web, React Native is for mobile apps using native components.</li>
          <li><strong>Q: What is a component in React Native?</strong><br />A: A building block of UI like View, Text, Image, etc.</li>
          <li><strong>Q: How do you navigate in React Native?</strong><br />A: Using libraries like React Navigation.</li>
          <li><strong>Q: How to style components?</strong><br />A: Using the `StyleSheet.create()` method and inline styles.</li>
        </ol>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Python is a versatile programming language suitable for various domains, while React Native enables efficient mobile app development using web technologies.
        </p>
      </section>
    </div>
  );
};

export default PythonReactNative;
