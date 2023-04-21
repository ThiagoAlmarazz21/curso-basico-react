import React from 'react'
import './TodosLoading.css'

function TodosLoading() {
  return (
    <div className='loader-container'>
      <p className='LoadingTodo-text'>Cargando TASKs...</p>
      <div className='loader'></div>
    </div>
  )
}

export default TodosLoading