// actions.js

export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: task,
  };
};

export const deleteTask = (index) => {
  return {
    type: 'DELETE_TASK',
    payload: index,
  };
};

export const loadTasks = () => {
  return {
    type: 'LOAD_TASKS',
  };
};

export const toggleTaskCompletion = (index) => {
  return {
    type: 'TOGGLE_TASK_COMPLETION',
    payload: index,
  };
};

