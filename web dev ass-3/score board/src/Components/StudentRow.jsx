function StudentRow({ student, onUpdateScore }) {
  const handleScoreChange = (e) => {
    onUpdateScore(student.id, e.target.value);
  };

  const status = student.score >= 40 ? 'Pass' : 'Fail';
  const statusClass = student.score >= 40 ? 'pass' : 'fail';

  return (
    <tr>
      <td>{student.name}</td>
      <td>
        <input
          type="number"
          value={student.score}
          onChange={handleScoreChange}
          min="0"
          max="100"
        />
      </td>
      <td className="status-cell">
        <span className={statusClass}>{status}</span>
      </td>
    </tr>
  );
}

export default StudentRow;