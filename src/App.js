import { useState } from 'react';
import './App.css';
import List from './Component/List';
import {v4 as uuidv4} from 'uuid'
import Editing from './Component/Editing';
uuidv4()

function App() {
  const [todo,setTodo] = useState("")
  const [allTask,setAllTask] = useState([])
  const handleadd=()=>{
    setAllTask([...allTask,{id: uuidv4(),
    task:todo,
    completed:false,
    isEditing:false}])
    setTodo('')
  }

  const deleteTodo = (id)=>{
    setAllTask(allTask.filter(todo=>todo.id !== id))
  }

  const handleEdit = (id)=>{
    setAllTask(allTask.map(item=> item.id == id ? {...item,isEditing:!item.isEditing} : item))
  }

  const editTodo =  (value,id)=>{
    setAllTask(allTask.map(item=>item.id === id ? {...item, task:value, isEditing:!item.isEditing } : item))
  }

  return (
    <div className='w-100'>
      <div className='d-flex justify-content-center align-items-center flex-column w-100'>
        <div style={{width:'13%'}}>
          <h3 style={{ marginTop: "160px",borderRadius:"70px" }} className='bg-light px-3 py-2 text-center text-danger fw-bold'>TODO LIST</h3>
        </div>
        <div className='d-flex w-50 justify-content-center align-items-center mt-5'>
          <input style={{ width: "80%", marginLeft: "-2%", borderRadius:"40px" }} type="text" className='form-control fw-bold py-3' onChange={(e)=>setTodo(e.target.value)} value={todo}/>
          <i onClick={()=>handleadd()} style={{ marginLeft: "-7%", cursor: "pointer", fontSize:"40px" }} className="fa-solid fa-circle-plus text-danger" ></i>
        </div>
      </div>
      {
        allTask.length>0 ?
        <div className='d-flex justify-content-center align-items-center w-100 flex-column'>
          <div style={{width:"40%"}} className='mt-3 d-flex justify-content-between align-items-center'>
            <h5 style={{width:"16%",borderRadius:"30px"}} className='bg-light text-center py-2'>TASKS:</h5>
            <div style={{cursor:"pointer"}} onClick={()=>setAllTask([])} className='bg-light px-2 py-2 rounded-circle'><i className="fa-solid fa-trash fa-lg"></i></div>
          </div>
          {
            allTask?.map((item,index)=>(
              item.isEditing ? <Editing key={index} task={item} editTodo={editTodo}/> :
              <List task={item} index={index} key={index} deleteTodo={deleteTodo} handleEdit={handleEdit}/>
            ))
  
          }
        </div>:
        <div className='text-center mt-3 text-danger'>
          <h5>No Task</h5>
        </div>
      }

    </div>
  );
  
}

export default App;
