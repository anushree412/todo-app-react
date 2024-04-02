
import React, { useState } from 'react';

function Addtodo({ addTask }) {
  const [newTask, setNewTask] = useState('');
  const [newDate, setNewDate] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '' && newDate.trim() !== '') {
      addTask(newTask, newDate);
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
            placeholder="Enter todo here"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="col-sm-4">
          <input
            type="date"
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

export default Addtodo;
