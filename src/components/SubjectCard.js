import React from 'react';
import './SubjectCard.css';
import LessonCard from './LessonCard';

const SubjectCard = ({ subject, subjectIndex, toggleLesson }) => {
  const completedLessons = subject.lessons.filter(lesson => lesson.completed).length;
  const progress = (completedLessons / subject.lessons.length) * 100;

  return (
    <div className="subject-card">
      <h2>{subject.name}</h2>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      {subject.lessons.map((lesson, lessonIndex) => (
        <LessonCard 
          key={lessonIndex} 
          subjectIndex={subjectIndex} 
          lessonIndex={lessonIndex} 
          lesson={lesson} 
          toggleLesson={toggleLesson} 
        />
      ))}
    </div>
  );
};

export default SubjectCard;
