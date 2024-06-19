import React from 'react'

const Modal = () => {
  return (
    <div className='modal-container'>
   <span><p className='modal-para'>close</p></span> 
    <h1 className='modal-h1'>Hey What's your Name</h1>
      <div className="modal">
         <input type='text' className='input-search' placeholder="Hey What's your name..."/>
      </div>
    </div>
  )
}

export default Modal
