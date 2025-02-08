import React, { useState } from 'react';
import './styles/App.css';
import './styles/animations.css';
import SubjectCard from './components/SubjectCard';

const App = () => {
  const subjects = [
    {
      name: "Subject 1",
      lessons: [
        { completed: false, topics: ["Topic 1.1", "Topic 1.2", "Topic 1.3"] },
        { completed: false, topics: ["Topic 2.1", "Topic 2.2", "Topic 2.3"] },
        { completed: false, topics: ["Topic 3.1", "Topic 3.2", "Topic 3.3"] },
        { completed: false, topics: ["Topic 4.1", "Topic 4.2", "Topic 4.3"] },
      ]
    },
    {
      name: "Subject 2",
      lessons: [
        { completed: false, topics: ["Topic 1.1", "Topic 1.2", "Topic 1.3"] },
        { completed: false, topics: ["Topic 2.1", "Topic 2.2", "Topic 2.3"] },
        { completed: false, topics: ["Topic 3.1", "Topic 3.2", "Topic 3.3"] },
        { completed: false, topics: ["Topic 4.1", "Topic 4.2", "Topic 4.3"] },
      ]
    },
  ];

  const [subjectData, setSubjectData] = useState(subjects);

  const toggleLesson = (subjectIndex, lessonIndex) => {
    const newSubjects = [...subjectData];
    newSubjects[subjectIndex].lessons[lessonIndex].completed = !newSubjects[subjectIndex].lessons[lessonIndex].completed;
    setSubjectData(newSubjects);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>My Backlog Tracker</h1>
      </header>
      <main className="content">
        {subjectData.map((subject, subjectIndex) => (
          <SubjectCard 
            key={subjectIndex} 
            subject={subject} 
            subjectIndex={subjectIndex} 
            toggleLesson={toggleLesson} 
          />
        ))}
      </main>
      <footer className="footer">
        <p>&copy; 2025 Backlog Tracker</p>
      </footer>
    </div>
  );
};

export default App;
