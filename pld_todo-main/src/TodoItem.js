import React from 'react';

const TodoItem = ({ task, index, completeTask, deleteTask }) => {
  return (
    <li className="task-item">
      <span className={task.completed ? 'completed' : ''}>{task.text}</span>
      <button className="complete-btn" onClick={() => completeTask(index)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
