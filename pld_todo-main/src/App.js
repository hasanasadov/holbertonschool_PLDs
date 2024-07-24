import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("Todo List Loaded");
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, {text: task, completed: false}]);
  }

  const completeTask =(index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  const deleteTask = (index) => {
    const newTasks =[...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }



  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
