import React from 'react';
import './Bienvenidos.css'

function index() {
  return (
    <div className='bienvenido-container'>
      <h1>Bienvenido a TASKs App</h1>
      <picture><img className='icono' src="https://www.svgrepo.com/show/11307/task-list.svg" alt="ICONO"/></picture>
    </div>
  )
}

export default index