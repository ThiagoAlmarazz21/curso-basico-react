import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TodoSearch() {
 const {searchValue, setSearchValue} = React.useContext(TodoContext)

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className='search-container'>
      <input
      className='TodoSearch'
      placeholder='Buscar tarea...'
      value={searchValue}
      onChange={onSearchValueChange}
      />
    </div>
  );
};

export default TodoSearch