import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
