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
        <div
          className={`task-card ${task.completed ? 'bg-completed' : 'bg-pending'}`}
          key={index}
        >
          <div className="task-header">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleCompletion(index)}
              />
            </div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </div>
          <div className="task-body">
            <h5>{task.task}</h5>
            <p>{task.dueDate}</p>
          </div>
          <div className="task-footer">
            <p>{task.completed ? 'Completed' : 'Pending'}</p>
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
