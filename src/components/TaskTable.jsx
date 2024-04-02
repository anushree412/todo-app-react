import React from 'react';

function TaskTable({ tasks }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Due Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task.task}</td>
            <td>{task.dueDate}</td>
            <td>{task.completed ? 'Completed' : 'Pending'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskTable;