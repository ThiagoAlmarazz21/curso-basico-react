import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa';

function TodoIconDelete({type, color, onClick}) {
  return (
    <span>
      <FaRegTrashAlt />
    </span>
  )
}

export default TodoIconDelete