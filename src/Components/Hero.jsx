import React from 'react'
import Nav from "./Nav"
import Form from "./Form"
import ListGroup from './ListGroup'
function Hero({todos,saveTodo,deleteTask,notify,edit,editTodo, updateTodo}) {
  return (
    
        <div className="hero position-absolute d-flex align-items-center justify-content-center">
          <div className="temp bg-white text-dark col col-md-4 mx-auto p-5 bg-opacity-25">
             <Nav/>
             <Form saveTodo={saveTodo} edit={edit} editTodo = {editTodo}/>
             <ListGroup todos={todos} deleteTask={deleteTask} updateTodo={updateTodo} notify={notify}/>
          </div> 
        </div>
    
  )
}

export default Hero