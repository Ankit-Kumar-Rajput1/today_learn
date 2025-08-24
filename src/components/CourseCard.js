import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
      <div className="course-info">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <Link to={`/course/${course.id}`} className="details-btn">View Details</Link>
      </div>
    </div>
  );
}

export default CourseCard;
