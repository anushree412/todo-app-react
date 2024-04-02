// reducers.js

const initialState = {
  tasks: [
    { task: 'Task 1', dueDate: '01/04/2024', completed: false },
    { task: 'Task 2', dueDate: '02/04/2024', completed: false },
    // Add more tasks as needed
  ],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return { ...state, tasks: newTasks };
    case 'DELETE_TASK':
      const filteredTasks = state.tasks.filter((task, index) => index !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return { ...state, tasks: filteredTasks };
    case 'LOAD_TASKS':
      const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      return { ...state, tasks: savedTasks };

      case 'TOGGLE_TASK_COMPLETION':
        const toggledTasks = state.tasks.map((task, index) => {
          if (index === action.payload) {
            return { ...task, completed: !task.completed };
          }
          return task;
        });
        localStorage.setItem('tasks', JSON.stringify(toggledTasks));
        return { ...state, tasks: toggledTasks };

            case 'TOGGLE_TASK_COMPLETION':
              const updatedTasks = state.tasks.map((task, index) => {
                if (index === action.payload) {
                  return { ...task, completed: !task.completed };
                }
                return task;
              });
              localStorage.setItem('tasks', JSON.stringify(updatedTasks));
              return { ...state, tasks: updatedTasks };


              

    default:
      return state;
  }
};

export default taskReducer;