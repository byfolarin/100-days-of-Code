import React, { useEffect, useState } from 'react'
import Modal from './unused comp/Modal'

const Todolist = () => {

    const [input, setInput] = useState("")

    const getInputClick = (e) =>{
        setInput(e.target.value)
    };


  
  return (
    <div className='todo-gap'>

        <Modal></Modal>

        <h1 className='todo-name'>Hello Folarin</h1>

            <div className="input-button">
            <input type='text' value={input} id="search-bar" 
                className='input-search'
                placeholder='+ Insert a link, color, or just plain text...'/>
                <button onClick={setInput}>+</button>
                </div>

        <div className="div-title">
            <p>Title</p>
            <p>Date Created</p>
        </div>

        <div className="rule"></div>

    </div>
  )
}

export default Todolist
