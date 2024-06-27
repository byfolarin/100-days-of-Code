import React from 'react'
import vide1 from '../assets/images/video-2@c.mp4'

const HeroSec = () => {
    return (

        <div className="hero-section-vid">

                <div className="media">
                    <video src={vide1} autoplay muted controls="false">
                    Your browser doesn't support HTML video
                    </video>
                </div>


                <div className="div-h1">
                    <h1>Crafting Purpose with Design</h1>
                </div>

        </div>
      );
    };
    
    export default HeroSec;