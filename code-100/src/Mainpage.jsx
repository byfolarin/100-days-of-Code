import React, { useState } from 'react'
import Todolist from './components/Todolist'

const Mainpage = () => {

    const details = [
            {
                id: 1,
                task: "Random meal Generator",
                day: "Day 1" 
            },

            { id: 2,
                task: "Mood Calendar",
                day: "Day 2",
            },

    ]


    const deets = details.slice(0, 1).map(item =>(
         <li key={item.id}> {item.id}  {item.task} </li>
    ))

    const sets = details.slice(1, 2).map(item =>(
        <li key={item.id}> {item.id}  {item.task} </li>
   ))

        const body = 2;



  return (
    <div>
      <div className="container">
            <p>TodoList</p> 
            <div className="rule"></div>
            <p>Day 1</p>
      </div>
      <Todolist />


    </div>
  )
}

export default Mainpage
