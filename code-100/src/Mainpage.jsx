import React from 'react'
import { Link } from 'react-router-dom'; // Import React Router components



const Mainpage = () => {

  return (
    <>
      <h1>100 Days of Code</h1>

      <div className="task-grid">
            <div className="grid-item">
                  <p className='item-p' >
                        <Link to="/Todolist" className='list-to'>
                               Todolist
                        </Link>
                  </p>
                 
            </div>

             <div className="grid-item">

            </div>

             <div className="grid-item">

            </div>
      </div>
           
    </>
  )
}

export default Mainpage
