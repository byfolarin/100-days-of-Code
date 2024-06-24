import React, { useState } from 'react'

const FAQ = () => {

    const [paragraph, setParagraph] = useState(false);


    function handleClick (){
        setParagraph(!paragraph);
    }
 


  return (
    <>
      <h1>FAQ</h1>

      <div className="div-wrapper">
        <ul>
            <li className='cursor-link' onClick={handleClick}>
                <h3>The Simulation Argument</h3>
                <p className={paragraph ? 'hovered' : 'not-hovered'} >If advanced civilizations can create near-indistinguishable simulations, and the number of simulations vastly outweighs the number of "base" realities, wouldn't it be statistically likely that we ourselves are living in a simulation?  How can we tell if our reality is real or a simulated one?z</p>
            </li>

            <hr />

            <li className='cursor-link' onClick={handleClick}>
                <h3>The Fermi Paradox</h3>
                <p className={paragraph ? 'hovered' : 'not-hovered'} > Given the vastness of the universe and the probability of life arising on other planets, where is everyone?  The Fermi Paradox highlights the apparent contradiction between the high estimates of the probability of extraterrestrial life and the lack of evidence for it.  Is it possible we're simply too early or too late in the cosmic timeline to encounter other advanced</p>
            </li>

            <hr />

            <li className='cursor-link' onClick={handleClick}>
                <h3>The Arrow of Time</h3>
                <p className={paragraph ? 'hovered' : 'not-hovered'}>Why does time seem to flow in one direction (forward) and not the other (backward)?  Thermodynamic laws suggest an increase in entropy (disorder) over time.  Is the arrow of time an intrinsic property of the universe or an emergent phenomenon?</p>
            </li>
            <hr />

            <li className='cursor-link' onClick={handleClick}>
                <h3>The Quantum Observer Effect</h3>
                <p className={paragraph ? 'hovered' : 'not-hovered'}> Does the act of observation collapse the wave function of a quantum particle, forcing it into a definite state?  Or does observation simply reveal the pre-existing state?  This thought experiment delves into the nature of reality and the observer's role in shaping it.</p>
            </li>

            <hr />
            <li className='cursor-link' onClick={handleClick}>
                <h3>The Panpsychism Hypothesis</h3>
                <p className={paragraph ? 'hovered' : 'not-hovered'}> Is consciousness fundamental to reality, or is it an emergent property of complex systems like brains?  Panpsychism suggests some level of consciousness might be present in all things, from elementary particles to planets.  Exploring this idea pushes the boundaries of our understanding of consciousness and its place in the universe.</p>
            </li>
        </ul>
      </div>
    </>
  )
}

export default FAQ
