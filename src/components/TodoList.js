import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <h1>Tasks</h1>
      <ol className="todo-lists">
        {
          filteredTodos.map((todo) => (
            <Todo 
              key={todo.id}
              todo={todo}
              text={todo.text}
              todos={todos}
              setTodos={setTodos}
            />
          ))
        }
      </ol> 
    </div>
  )
}

export default TodoList
