import React, { useState } from 'react'
import img1 from '../assets/images/img1.jpeg'
import img2 from '../assets/images/img2.jpeg'
import img3 from '../assets/images/img3.jpeg'
import img4 from '../assets/images/img4.jpeg'
import img5 from '../assets/images/img5.jpeg'
import arrowleft from '../assets/images/arrow-left.png'
import arrowright from '../assets/images/arrow-right.png'

const ImageGallery = () => {

  const ImageContainer = () => {
    const [current, setCurrent] = useState(img1)
  }


  return (
    <div>

         <div className="img-container">

         <img src={current} alt=""/>

            <div className="pointer-arr">

             <div className="pointer pointer-left">
                <img className='pointer-img' src={arrowleft} alt="" />
             </div>

             <div className="pointer pointer-right">
                <img className='pointer-img' src={arrowright} alt="" />
            </div>
            
            </div>

        </div>



      <div className="grid-img">

                <div className="img-1 slide">
                    <img src={img1} alt="" />
                </div>


        <div className="img-2 slide">
                    <div className="img-2 slide">
                        <img src={img2} alt="" />
                    </div>
        </div>


        <div className="img-3 slide">
                    <div className="img-3 slide">
                          <img src={img3} alt="" />
                     </div>
        </div>



        <div className="img-4 slide">

                    <div className="img-4 slide">
                        <img src={img4} alt="" />
                    </div>

        </div>


        <div className="img-5 slide">

                <div className="img-5 slide">
                    <img src={img5} alt="" />
                </div>
        </div>
        
      </div>
    </div>
  )
}

export default ImageGallery
