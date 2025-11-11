import React from 'react';
// import './HTML.css';

const C = () => {
  return (
    <div className="html-container">
      <h1>C Language - Interview Questions</h1>
      <section>
        <ol>
          <li>
            <strong>Q: What is C language?</strong><br />
            A: C is a general-purpose procedural programming language developed by Dennis Ritchie in 1972.
          </li>
          <li>
            <strong>Q: What is the use of printf() and scanf()?</strong><br />
            A: printf() is used to display output, while scanf() is used to accept input from the user.
          </li>
          <li>
            <strong>Q: What is a pointer?</strong><br />
            A: A pointer is a variable that stores the memory address of another variable.
          </li>
          <li>
            <strong>Q: What is the difference between call by value and call by reference?</strong><br />
            A: In call by value, a copy of the variable is passed. In call by reference, the address is passed and changes affect the original variable.
          </li>
          <li>
            <strong>Q: What are storage classes in C?</strong><br />
            A: auto, static, extern, and register — they define the scope, visibility, and lifetime of variables.
          </li>
          <li>
            <strong>Q: What is a segmentation fault?</strong><br />
            A: An error caused when a program tries to access an illegal memory location.
          </li>
          <li>
            <strong>Q: What is the use of sizeof()?</strong><br />
            A: It returns the size of a variable or data type in bytes.
          </li>
          <li>
            <strong>Q: What are header files?</strong><br />
            A: Files that contain function declarations and macros (e.g., stdio.h, stdlib.h).
          </li>
        </ol>
      </section>

      <hr />

      <h1>C++ Language - Interview Questions</h1>
      <section>
        <ol>
          <li>
            <strong>Q: What is C++?</strong><br />
            A: C++ is an object-oriented programming language that is an extension of C.
          </li>
          <li>
            <strong>Q: What are classes and objects?</strong><br />
            A: A class is a blueprint; an object is an instance of that class.
          </li>
          <li>
            <strong>Q: What is inheritance?</strong><br />
            A: It allows a class to inherit properties and behaviors from another class.
          </li>
          <li>
            <strong>Q: What is polymorphism?</strong><br />
            A: The ability to take many forms — such as function overloading and overriding.
          </li>
          <li>
            <strong>Q: Difference between C and C++?</strong><br />
            A: C is procedural, while C++ supports both procedural and object-oriented programming.
          </li>
          <li>
            <strong>Q: What is a constructor?</strong><br />
            A: A special function called automatically when an object is created.
          </li>
          <li>
            <strong>Q: What is operator overloading?</strong><br />
            A: The ability to define custom behavior for operators (+, -, *, etc.) in classes.
          </li>
          <li>
            <strong>Q: What is the difference between public, private, and protected?</strong><br />
            A: They are access specifiers that control access to class members.
          </li>
        </ol>
      </section>
    </div>
  );
};

export default C;
