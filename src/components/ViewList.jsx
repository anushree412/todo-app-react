
import React from 'react';

import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

function ViewList({ tasks }) {
  return (
   
    <div className="container">
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <div className="Title">Tasks</div>
          <p><strong>Task:</strong> {task.task}</p>
          <p><strong>Due Date:</strong> {task.dueDate}</p>
          <p><strong>Status:</strong> {task.completed ? 'Completed' : 'Pending'}</p>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(ViewList);