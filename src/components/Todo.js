import React from 'react';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import '../App.css'

const Todo = ({ text, todo, todos, setTodos }) => {
  const handleDelete = () => { 
    setTodos(todos.filter(element => (
     // element.id !== todo.id
      console.log(element)
    )))
  }  

  const handleComplete = () => { 
    setTodos(todos.map(element => { 
      if (element.id === todo.id) {
        return {
          ...element,
          completed: !element.completed
        }
      } 
        return element; 
    }))
    console.log(todo)
  }
  return (
    <div className="todo-list">
      <div className={`todo-item ${todo.completed ? "completed" :''}`}>{text}</div>
      <div className="todo-item-btns">
        <button onClick={handleComplete} className="complete-btn">
          <DoneOutlineIcon style={{ fill: "green", border:'none' }}/>
        </button>
        <button onClick={handleDelete} className="trash-btn">
          <DeleteForeverIcon style={{fill:"gray"}}/>
        </button>
      </div>
      
    </div>
  )
}

export default Todo
