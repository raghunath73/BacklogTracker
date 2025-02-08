import React from 'react';
import './LessonCard.css';

const LessonCard = ({ subjectIndex, lessonIndex, lesson, toggleLesson }) => {
  return (
    <div className="lesson-card" onClick={() => toggleLesson(subjectIndex, lessonIndex)}>
      <input 
        type="checkbox" 
        id={`lesson-${lessonIndex}`} 
        checked={lesson.completed} 
        readOnly 
      />
      <label htmlFor={`lesson-${lessonIndex}`}>Lesson {lessonIndex + 1}</label>
      <ul className="topics-list">
        {lesson.topics.map((topic, index) => (
          <li key={index} className="topic">{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default LessonCard;
