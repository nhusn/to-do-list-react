import React, { useState } from 'react'

function Editing({task,editTodo}) {
    const [value,setValue] = useState(task.task)
    const addTodo = ()=>{
        editTodo(value,task.id)
    }
  return (
    <div style={{width:"40%"}} className='d-flex align-items-center mt-1'>
        <input style={{paddingTop:"2%",paddingBottom:"2%", borderRadius:"10px"}} className='form-control w-100 bg-light fw-bold' type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
        <i onClick={addTodo} style={{marginLeft:"-5.5%", cursor:"pointer"}} className="fa-regular fa-circle-check text-danger fa-xl"></i>
    </div>
  )
}

export default Editing