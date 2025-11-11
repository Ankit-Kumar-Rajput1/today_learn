import React from 'react';
// import './JSReact.css';

const DSA = () => {
  return (
    <div className="html-container">
      <h1>Data Structures and Algorithms (DSA)</h1>

      <section>
        <h2>What is DSA?</h2>
        <p>
          DSA stands for Data Structures and Algorithms. Data Structures are ways of organizing and storing data, and Algorithms are step-by-step procedures or formulas for solving problems.
        </p>
      </section>

      <section>
        <h2>Common Data Structures</h2>
        <ul>
          <li><strong>Array</strong> – Collection of elements stored at contiguous memory locations.</li>
          <li><strong>Linked List</strong> – Linear data structure where elements point to the next.</li>
          <li><strong>Stack</strong> – Follows LIFO (Last In First Out).</li>
          <li><strong>Queue</strong> – Follows FIFO (First In First Out).</li>
          <li><strong>Tree</strong> – Hierarchical structure (e.g., Binary Tree, BST).</li>
          <li><strong>Graph</strong> – Set of nodes connected by edges.</li>
          <li><strong>Hash Table</strong> – Key-value pair storage for quick access.</li>
        </ul>
      </section>

      <section>
        <h2>Common Algorithms</h2>
        <ul>
          <li>Sorting: Bubble Sort, Merge Sort, Quick Sort</li>
          <li>Searching: Linear Search, Binary Search</li>
          <li>Recursion and Backtracking</li>
          <li>Dynamic Programming</li>
          <li>Greedy Algorithms</li>
          <li>Graph Algorithms: BFS, DFS, Dijkstra</li>
        </ul>
      </section>

      <section>
        <h2>DSA Example (JavaScript)</h2>
        <pre>{`// Binary Search
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
}`}</pre>
      </section>

      <section>
        <h2>DSA Interview Questions</h2>
        <ol>
          <li><strong>Q: What is the difference between an array and a linked list?</strong><br />A: Arrays are static and allow random access; linked lists are dynamic and allow efficient insert/delete.</li>
          <li><strong>Q: What is the time complexity of binary search?</strong><br />A: O(log n)</li>
          <li><strong>Q: What is a stack and where is it used?</strong><br />A: Stack is a LIFO structure used in function calls, expression evaluation, etc.</li>
          <li><strong>Q: What is the difference between BFS and DFS?</strong><br />A: BFS explores level by level (queue); DFS explores depth first (stack/recursion).</li>
          <li><strong>Q: What is dynamic programming?</strong><br />A: A technique to solve problems by breaking them into overlapping subproblems and storing results.</li>
        </ol>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Mastery of DSA is crucial for efficient programming, problem solving, and cracking technical interviews. It provides the foundation for writing optimized and scalable code.
        </p>
      </section>
    </div>
  );
};

export default DSA;
