import React, { useState } from 'react'


const Task = ({ task, handleShowTask }) => {

    const showTask = () => {
        document.getElementById(`${task._id}`).classList.toggle('hidden')
        handleShowTask(task)
    }

    return (
        <div className='d-flex justify-content-around'>
            <h5>{task.title}</h5>
            <button className='btn btn-info' onClick={() => showTask()}>Details</button>
        </div>);
}

export default Task

