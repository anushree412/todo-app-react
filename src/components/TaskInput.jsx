import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

function TaskInput({ addTask }) {
  const [newTask, setNewTask] = useState('');
  const [newDate, setNewDate] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '' && newDate.trim() !== '') {
      addTask({ task: newTask, dueDate: newDate, completed: false });
      setNewTask('');
      setNewDate('');
    }
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter todo here"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="col-sm-4">
          <input
            type="date"
            className="form-control"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
        </div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { addTask })(TaskInput);
