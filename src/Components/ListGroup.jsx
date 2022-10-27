import React from 'react'
import ListItem from './ListItem'

function ListGroup({todos,deleteTask,notify,updateTodo}) {
  return (
    <ul className="list-group"> 
     {
        todos.map((todo)=>
        <ListItem key= {todo.id} todo={todo} deleteTask={deleteTask} updateTodo={updateTodo} notify={notify}/>
        )
     }        
    </ul>
  )
}

export default ListGroup