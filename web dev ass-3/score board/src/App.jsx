import { useState } from 'react';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm';
import StudentTable from './components/StudentTable';
import './App.css';

function App() {
  // Initial sample data (you can change names/scores)
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Johnson', score: 85 },
    { id: 2, name: 'Bob Smith', score: 35 },
    { id: 3, name: 'Charlie Brown', score: 92 },
    { id: 4, name: 'Diana Prince', score: 28 },
    { id: 5, name: 'Ethan Hunt', score: 67 },
  ]);

  // Update score function - passed down to StudentRow
  const updateScore = (id, newScore) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, score: parseInt(newScore) || 0 }
          : student
      )
    );
  };

  // Add new student
  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(), // simple unique id
      name: name.trim(),
      score: parseInt(score) || 0,
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <AddStudentForm onAddStudent={addStudent} />
        <StudentTable students={students} onUpdateScore={updateScore} />
      </div>
    </div>
  );
}

export default App;