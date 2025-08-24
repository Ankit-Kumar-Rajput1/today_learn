import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../data'; // data.js से सभी कोर्स

const CourseDetail = () => {
  const { id } = useParams(); // ✅ path="/course/:id" के हिसाब से
  const course = courses.find(c => c.id === parseInt(id)); // कोर्स ढूंढना

  if (!course) {
    return <p>कोई कोर्स नहीं मिला</p>;
  }

  return (
    <div>
      <h1>{course.name}</h1>
      <p><strong>विवरण:</strong> {course.fullDescription}</p>
      <p><strong>अवधि:</strong> {course.duration}</p>
    </div>
  );
};

export default CourseDetail;
