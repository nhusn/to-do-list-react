import React, { useState } from 'react'
import '../Component/List.css'

function List({ task, index, deleteTodo, handleEdit }) {
    return (
        <div className='w-50 d-flex justify-content-center mt-1 flex-column align-items-center'>
            <div style={{ width: "80%", borderRadius: "10px" }} className='d-flex px-3 py-2  justify-content-between align-items-center bg-light' >
                <h5 className='mt-1'>{index + 1}. {task.task}</h5>
                <div id='icons'>
                    <i onClick={() => handleEdit(task.id)} className="fa-solid fa-pen me-4"></i>
                    <i onClick={() => deleteTodo(task.id)} className="fa-solid fa-trash"></i>
                </div>
            </div>
        </div>
    )
}

export default List