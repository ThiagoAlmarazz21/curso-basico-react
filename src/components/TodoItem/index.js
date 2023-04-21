import React from 'react'
import TodoIconCheck from '../TodoIconCheck'
import TodoIconDelete from '../TodoIconDelete'
import './TodoItem.css'

function TodoItem(props) {
  return (
    <li className='TodoItem'>
      <span 
      className={`Icon Icon-check${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}>
        <TodoIconCheck/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
      <span 
      className='Icon Icon-delete'
      onClick={props.onDelete}
      >
        <TodoIconDelete/>
      </span>
    </li>
  )
}

export default TodoItem