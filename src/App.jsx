
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  useEffect(() => {
    store.dispatch({ type: 'LOAD_TASKS' });
  }, []);

  return (
    <Provider store={store}>
      <div className="todo-contain">
        <Navbar />
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;