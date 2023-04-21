import React from 'react';
import { TodoContext } from '../components/TodoContext';
import CreateTodoButton from '../components/CreateTodoButton';
import TodoCounter from '../components/TodoCounter';
import TodoItem from '../components/TodoItem';
import TodoList from '../components/TodoList';
import TodoSearch from '../components/TodoSearch';
import Bienvenidos from '../components/Bienvenidos';
import Modal from '../Modal';
import TodoForm from '../components/TodoForm'
import TodosError from '../components/TodosError'
import TodosLoading from '../components/TodosLoading'
import EmptyTodos from '../components/EmptyTodos'

function AppUI() {
  const { 
    error,
    loading,
    searchedTodos,
    toggleCompleteTodo, 
    deleteTodo, 
    openModal,
    setOpenModal,
    } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <Bienvenidos/>
      <TodoCounter/>
      <TodoSearch />

      <TodoList>
        {error && <TodosError error={error}/>}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}

      {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        onComplete={() => toggleCompleteTodo(todo.text)}
        onDelete={deleteTodo}
        />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  )
}

export default AppUI