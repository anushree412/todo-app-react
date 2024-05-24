import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Footer from './components/Footer'; // Import Footer component
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <Provider store={store}>
      <div className={`todo-contain ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <TaskInput />
        <TaskList />
        <Footer /> {/* Include the Footer component */}
      </div>
    </Provider>
  );
}

export default App;
