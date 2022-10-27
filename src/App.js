import Hero from "./Components/Hero"
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

   const [todos, setTodos]= useState([])

  function saveTodo(item){
    const newTodo={
      id : uuidv4(), 
      text : item
    }
    setTodos([...todos,newTodo])
  }

  const deleteTask = (id)=>{
    setTodos(todos.filter(todo => todo.id!==id))
  }
  
  const [edit , setEdit] = useState({
    todo : {},
    isEdit : false
  })

  const updateTodo = (data) => {
    setEdit({todo : data , isEdit : true})
  }

  const editTodo = (id , newText) => {
    setTodos(todos.map(item => item.id === id ? {...item , text : newText } : item))
    
    setEdit({
      todo : {},
      isEdit : false
    })

  }
   
  const notify = () =>toast.success('Task Removed!', {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  
  

  return (
    <div className="App">
      <Hero todos={todos} saveTodo={saveTodo} edit={edit} editTodo = {editTodo} updateTodo={updateTodo} deleteTask={deleteTask} notify={notify}/>
      <ToastContainer
       position="top-center"
       autoClose={1000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       />   
    </div>
  );
}

export default App;
