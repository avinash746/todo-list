import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
  let myStyle = {
    display: "flex",
    justifyContent: "center",
  }

  let myStyle1 = {
    display: "grid",
    gridTemplateColumns: "2fr  3fr 2fr",
    width: "100%"
  }
  let myStyle2 = {
    float: "right"
  }

  return (
    <div className='my-2 container-items' style={myStyle}>
      <div className="" style={myStyle1}>
        <h5>{todo.title}</h5>
        <p>{todo.desc}</p>
      </div>
      <div className="" style={myStyle2}>
        <button className='btn btn-sm btn-danger right' onClick={() => onDelete(todo)}>Delete</button>
      </div>
    </div>

  )
}
