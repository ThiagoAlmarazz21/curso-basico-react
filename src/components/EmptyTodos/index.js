import React from 'react'
import './EmptyTodo.css'


function EmptyTodos() {
  return (

    <div className='EmptyTodo-container'>
      <p className='EmptyTodo-text'>¡Aun no has creado ningúna <span className='black-text'>tarea</span>!</p>
      <picture><img className='icono-empty' src='https://www.svgrepo.com/show/442379/task-past-due-symbolic.svg' /></picture>
    </div>
  )
}

export default EmptyTodos
