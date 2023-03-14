import React, { useState } from 'react'
import axios from 'axios'


const Task = ({ task, handleDelete }) => {


    return (
        <div className='d-flex justify-content-around'>
            <h5>{task.title}</h5>
            <p>{task.description}</p>
            <button className="btn btn-secondary" onClick={() => { handleDelete(task._id) }}>Delete</button>
        </div>);
}

export default Task

