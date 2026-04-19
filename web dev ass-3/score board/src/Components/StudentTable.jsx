import StudentRow from './StudentRow';

function StudentTable({ students, onUpdateScore }) {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Score</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <StudentRow
            key={student.id}
            student={student}
            onUpdateScore={onUpdateScore}
          />
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;