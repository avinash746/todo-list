import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    padding: "10px"
  }

  return (
    <div className='container' style={myStyle}>
      <h3 className='my-3 '>Todos List</h3>
      {props.todos.length === 0 ? (<p className='my-3 '>No Todo's to Display</p>) :
        props.todos.map((todo) => {
          return (
            <>
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            <hr />
            </>
          )
        })}


    </div>
  )
}
