import React from 'react'
import {useEffect, useState } from 'react'
function Form({saveTodo,edit,editTodo}) {
  
  const[task, setTask]=useState("");
  
  useEffect(()=>{
    setTask(edit.todo.text)
},[edit])

  function saveTask(e)
  {
    setTask(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault()
    
    if(edit.isEdit){
      editTodo(edit.todo.id  , task)
    }else{
      saveTodo(task)
    }

    setTask("")
  }

  return (
    <form className="my-5" onSubmit={(e)=> handleSubmit(e)}>
               <div className="mb-3">
                 <input id="input" value={task} type="text" className="form-control rounded-0 "  placeholder="Task" required onChange={(e)=>saveTask(e)}/>
               </div>
               <button id="submit" type="submit" className="btn btn-primary rounded-0 w-100">Submit</button>
    </form>
  )
}

export default Form