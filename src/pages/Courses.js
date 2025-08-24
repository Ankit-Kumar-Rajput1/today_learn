import React from 'react';
import { Link } from 'react-router-dom';
import courses from '../data'; // data.js से कोर्स डेटा इम्पोर्ट करें

const Course = () => {
  
  return (
    <div>
      <h1>Courses</h1>
      {courses.map(course => (
        <div key={course.id} style={{border: "5px solid red", margin: "10px", padding: "1px"}}>
          <h2>{course.name}</h2>
          <p>{course.description}</p>
          {/* यहाँ URL में course.id पास किया गया है */}
          <Link to={course.path} className="details-btn">View Details</Link>
          
        </div>
      ))}
    </div>
  );
};

export default Course;
