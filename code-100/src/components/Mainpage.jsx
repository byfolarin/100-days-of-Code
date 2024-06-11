import React, { useState } from 'react'

const Mainpage = () => {

    const [conditions, setConditions] = useState('');

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


    const deets = details.map(item =>{
         <li key={item.id}>{item.task}</li>
    })


  return (
    <div>
      <div className="container">
            <p>{deets}</p> 
            <div className="rule"></div>
            <p>Day 1</p>
      </div>

      <div className="container">
            <p>2. Mood Calendar</p>
            <div className="rule"></div>
            <p>Day 2</p>
      </div>

      <div className="container">
            <p>3. Double Noise flow field</p>
            <div className="rule"></div> 
            <p>Day 3</p>
      </div>
      
    </div>
  )
}

export default Mainpage
