import React from 'react';


const Form = ({ todos, setTodos, inputText, setInputText, setStatus }) => {
  const handleInputText = (e) => { 
    setInputText(e.target.value);
  } 
  const handleSubmit=(e)=>{ 
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }])
    setInputText('')
  }

  const handleStatus = (e) => { 
    setStatus(e.target.value)
  }
  return (
    <form className="form-wrapper">
      <div className="input-field"> 
        <input
          value={inputText}
          onChange={handleInputText}
          type="text"
          className="todo-input" 
          />
        <button onClick={handleSubmit} className="add-button" type="submit">+</button>
      </div>
      <div className="select">
        <select name="todos" onChange={handleStatus} className="drop-down">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      </form>
  )
}

export default Form
