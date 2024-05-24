import React, { useState } from 'react';
import { connect } from 'react-redux';

function Navbar({ tasks, toggleTheme, darkMode }) {
  const [viewMode, setViewMode] = useState('default'); // 'default' or 'tasks'

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  const handleViewTasks = () => {
    setViewMode(viewMode === 'default' ? 'tasks' : 'default');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent"> {/* Changed bg-light to bg-transparent */}
        <div className="container-fluid justify-content-between">
          <h2 className="navbar-brand-custom" >ToDoDo</h2>
          <div className="text-end">
            <button className="btn-custom-task btn-primary me-2" onClick={handleViewTasks}>
              View Tasks
            </button>
            <button className="btn btn-secondary" onClick={toggleTheme}>
              {darkMode ? (
                <i className="fas fa-sun"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </button>
          </div>
        </div>
      </nav>
      {viewMode === 'tasks' && (
        <div className="tasks-summary-custom container mt-3">
          <div className="card p-3">
            <h5>Total Tasks: {totalTasks}</h5>
            <h5>Completed Tasks: {completedTasks}</h5>
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(Navbar);
