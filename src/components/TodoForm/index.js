import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {addTodo, setOpenModal} = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
   setNewTodoValue(event.target.value);
  };

  const onSumbit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSumbit}>
      <label>Escribe tu nueva tarea</label>
      <textarea 
      value={newTodoValue}
      onChange={onChange}
      placeholder='Crea tu TASK...'
      />
      <div className='TodoForm-buttonContainer'>
        <button
        className='TodoForm-button TodoForm-button--cancel'
        type='button' 
        onClick={onCancel}
        >
          Cancelar
        </button>
        <button
        className='TodoForm-button TodoForm-button--add'
        type='sumbit'
        >
          Añadir
        </button>

      </div>
    </form>
  )
}

export default TodoForm