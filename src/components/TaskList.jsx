// TaskList.js

import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, toggleTaskCompletion } from '../actions';

function TaskList({ tasks, deleteTask, toggleTaskCompletion }) {
  const handleToggleCompletion = (index) => {
    toggleTaskCompletion(index);
  };

  return (
    <div className="items-container">
      {tasks.map((task, index) => (
        <div className="row kg-row" key={index}>
          <div className="col-sm-1">
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                value="" 
                id={`flexCheck${index}`}
                checked={task.completed}
                onChange={() => handleToggleCompletion(index)}
              />
            </div>
          </div>
          <div className="col-sm-4">{task.task}</div>
          <div className="col-sm-3">{task.dueDate}</div>
          <div className="col-sm-2">
            <button
              type="button"
              className="btn btn-danger kg-button"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { deleteTask, toggleTaskCompletion })(TaskList);
