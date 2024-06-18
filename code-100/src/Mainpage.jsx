import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import React Router components


const Mainpage = () => {
  return (
    <>
      <h1>100 Days of Code</h1>

      <ul className='container'>
            <li >
                        <Link to="/Todolist" className='display-title'> 
                              <p>Todolist</p>
                              <div className='rule'></div>
                              <p>Day 1</p>
                        </Link>
                   </li>
            </ul>

    </>
  )
}

export default Mainpage

