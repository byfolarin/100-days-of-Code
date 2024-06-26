import React from 'react'
import vide1 from '../assets/images/video-2@c.mp4'

const HeroSec = () => {
  return (
    <div>
      <div className="hero-section-vid">
        <div className="media">
             <video src={vide1} width="540" height="320" controls muted poster="images/video-poster.jpg">Your browser doesn't support HTML video</video>
      </div>
        <h1>Crafting Purpose with Design</h1>
      </div>
    </div>
  )
}

export default HeroSec
