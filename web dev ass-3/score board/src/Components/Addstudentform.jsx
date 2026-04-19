import { useState } from 'react';

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return; 

    onAddStudent(name, score);
    
    setName('');
    setScore('');
  };

  return (
    <div className="form-container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Score (0-100)"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            min="0"
            max="100"
            required
          />
          <button type="submit" className="btn">
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudentForm;