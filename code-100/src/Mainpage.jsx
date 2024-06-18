// import React, { useState } from 'react'
import Todolist from './components/Todolist'
import {Routes,Route, Link} from 'react-router-dom'

const Mainpage = () => {

//     const details = [
//             {
//                 id: 1,
//                 task: "Random meal Generator",
//                 day: "Day 1" 
//             },

//             { id: 2,
//                 task: "Mood Calendar",
//                 day: "Day 2",
//             },

//     ]


//     const deets = details.slice(0, 1).map(item =>(
//          <li key={item.id}> {item.id}  {item.task} </li>
//     ))

//     const sets = details.slice(1, 2).map(item =>(
//         <li key={item.id}> {item.id}  {item.task} </li>
//    ))

//         const body = 2;



  return (


    <div>

          <ul className="container">
          <Link to="/Todolist" className='navv'><p>TodoList</p> <div className="rule"></div><p>Day 1</p></Link>     
          </ul>

      <Routes>
            <Route path='/Todolist' element={<Todolist />}></Route>  
      </Routes>
    </div>
  )
}

export default Mainpage
