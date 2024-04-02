import React, { useState } from 'react';
import { connect } from 'react-redux';

function Navbar({ tasks }) {
  const [viewMode, setViewMode] = useState('default'); // 'default' or 'tasks'

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  const handleViewTasks = () => {
    setViewMode('tasks');
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tasks List</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+Knujsl5+z9GtmI3z5GxCyJ8bZ+xn2j7jIfdF3/gUK5xZ4x" crossorigin="anonymous">
        <style>
          .task-table {
            margin-top: 80px;
            border-collapse: collapse;
            width: 50%;
          }
          .task-table th, .task-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          .task-table th {
            background-color: #f2f2f2;
          }
          .task-item p {
            margin: 0;
          }
        </style>
      </head>
      <body>
      <center>
        <div class="container">
          <table class="task-table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody id="taskListBody">
            </tbody>
          </table>
        </div>
        </center>
      </body>
      </html>
    `);

    const taskListBody = newWindow.document.getElementById('taskListBody');
    tasks.forEach(task => {
      const taskItem = document.createElement('tr');
      taskItem.innerHTML = `
        <td>${task.task}</td>
        <td>${task.dueDate}</td>
        <td>${task.completed ? 'Completed' : 'Pending'}</td>
      `;
      taskListBody.appendChild(taskItem);
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-between">
        <a className="navbar-brand" href="#">ToDoDo</a>
        <div className="text-end">
          <button className="btn btn-link" onClick={handleViewTasks}>
            View Tasks
          </button>

          {viewMode === 'default' && (
            <>
              <p className="navbar-text me-3">Total Tasks: {totalTasks}</p>
              <p className="navbar-text me-3">Completed Tasks: {completedTasks}</p>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(Navbar);
