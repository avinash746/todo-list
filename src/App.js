import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './componants/Header';
import { Todos } from './componants/Todos';
import { Footer } from './componants/Footer';
import { AddTodo } from './componants/AddTodo';
import About from './componants/About'
import Login from './componants/Login'
import SignUp from './componants/SignUp'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ErrorMsg from './componants/ErrorMsg';



function App() {

  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });



  const onDelete = (todo) => {
    console.log("I'm onDelete", todo);

    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((e) => e !== todo);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const addTodo = (title, desc) => {
    console.log('I am Adding todo:', title, desc);

    let sno = 0;
    if (todos.length > 0 && todos[todos.length - 1].sno !== undefined) {
      sno = todos[todos.length - 1].sno + 1;
    } else {
      sno = 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos((prevTodos) => [...prevTodos, myTodo]);
  };


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <Header title="My Todos List" />

      <Routes>
        <Route exact path="/" element={
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
        } />


        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/*" element={<ErrorMsg />} />


      </Routes>

      <Footer />
    </Router >
  );
}

export default App;