import React, { useEffect, useState } from 'react'

const Todolist = () => {

  
  return (
    <div className='todo-gap'>

        <h1 className='todo-name'>Hello Folarin</h1>

        <div className="input-button">
       <input type='text' name="" id="search-bar" 
        className='input-search'
        placeholder='+ Insert a link, color, or just plain text...'/>
        <button>+</button>
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
