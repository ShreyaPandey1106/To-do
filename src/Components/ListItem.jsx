import React from 'react'

function ListItem({todo,deleteTask,notify,updateTodo}) {
  function deleteTodo(id){
    deleteTask(id);
    notify();
  }
  return (
    <li className="list-group-item fs-4">{todo.text}<button className="btn btn-danger rounded-0 float-end" type="button" id="button-addon2" onClick={()=>deleteTodo(todo.id)}>Remove</button>
    <button className="btn btn-warning rounded-0 float-end" type="button" id="button-addon2" onClick={() => updateTodo(todo)}>Update</button></li>           
  )
}

export default ListItem