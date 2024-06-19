import React, { useEffect, useState } from 'react'
import Modal from './unused comp/Modal'

const Todolist = ({input, setInput}) => {

function getInput(e){
    setInput(e.target.value);
}

console.log(setInput)


  
  return (
    <div className='todo-gap'>

        <Modal></Modal>

        <h1 className='todo-name'>Hello Folarin</h1>

            <div className="input-button">
            <input type='text' name="" value={input} onChange={getInput} id="search-bar" 
                className='input-search'
                placeholder='+ Insert a link, color, or just plain text...'/>
                <button onClick={getInput}>+</button>
                </div>

        <div className="div-title">
            <p>Title</p>
            <p>Date Created</p>
        </div>

        <div className="rule"></div>


        <div className="div-list-item">
            <li>{input}</li>
        </div>

    </div>
  )
}

export default Todolist
