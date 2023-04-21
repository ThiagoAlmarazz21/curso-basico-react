import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext);

  return (
    <h2 className='todo-counter'>Has completado <span className='black'>{completedTodos}</span> de <span className='black'>{totalTodos}</span> TASKs</h2>
  )
}

export default TodoCounter