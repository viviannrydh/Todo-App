import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText]=useState('')
  const [todos, setTodos] = useState([]);
  const [status, setStatus]=useState('all')
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [finishedList, setFinishedList]=useState([])
  

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => { 
    handleFilter();
    saveLocalTodos();
  }, [todos,status])

  const handleFilter = () => { 
    switch(status){ 
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo)=> todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
    console.log(filteredTodos)
    setFinishedList(todos.filter((todo) => todo.completed === true))
    console.log(finishedList)
  }

  // save to local storage
  const saveLocalTodos = () => { 
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  };
  return (
    <div className="app-wrapper">
      <header>
        <button className="header-btn header-btn-one">T</button>
        <button className="header-btn header-btn-two">O</button>
        <button className="header-btn header-btn-three">D</button>
        <button className="header-btn header-btn-four">O</button>
        {/*<button className="header-btn header-btn-five">S</button>*/}
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        />
    
    </div>
  );
}

export default App;
