
import React from 'react';
import { connect } from 'react-redux';
import { toggleTaskCompletion } from '../actions';

function Todoitem1({ task, dueDate, completed, onDelete, toggleCompletion }) {
  return (
    <div className="row kg-row">
      <div className="col-sm-1">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={completed}
            onChange={(e) => {
              e.preventDefault(); // Prevent page refresh
              toggleCompletion(); // Toggle completion status
            }}
          />
        </div>
      </div>
      <div className="col-sm-4">{task}</div>
      <div className="col-sm-3">{dueDate}</div>
      <div className="col-sm-2">
        <button type="button" className="btn btn-danger kg-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleCompletion: () => dispatch(toggleTaskCompletion(ownProps.index)),
});

export default connect(null, mapDispatchToProps)(Todoitem1);