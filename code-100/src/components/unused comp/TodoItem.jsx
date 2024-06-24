import React from 'react'

const TodoItem = () => {

  import React, { useState } from 'react';

  const FAQ = () => {
    const [openQuestion, setOpenQuestion] = useState(null); // Track currently open question
  
    const handleClick = (index) => {
      setOpenQuestion(index === openQuestion ? null : index); // Toggle open/close
    };
  


  return (
  

    <>
      <h1>FAQ</h1>
      <div className="div-wrapper">
        <ul>
          {/* Question list items */}
          {['The Simulation Argument', 'The Fermi Paradox', 'The Arrow of Time', 'The Quantum Observer Effect', 'The Panpsychism Hypothesis'].map(
            (question, index) => (
              <li key={index} className="cursor-link" onClick={() => handleClick(index)}>
                <h3>{question}</h3>
                {openQuestion === index && ( // Only display paragraph if open
                  <p className="hovered">
                    {/* Content for the specific question */}
                    {question === 'The Simulation Argument' && (
                      <p>
                        If advanced civilizations can create near-indistinguishable simulations, and the number of simulations vastly outweighs the number of "base" realities, wouldn't it be statistically likely that we ourselves are living in a simulation? How can we tell if our reality is real or a simulated one?
                      </p>
                    )}
                    {/* ... Content for other questions (similar structure) */}
                  </p>
                )}
                <hr />
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};


export default TodoItem
