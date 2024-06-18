import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import React Router components


const Mainpage = () => {
  return (
    <>

            <ul className='container'>
            <li className='display-title'>
            <Link to="/Todolist"> 
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

