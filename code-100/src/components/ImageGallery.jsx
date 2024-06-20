import React from 'react'
import img1 from '../assets/images/img1.jpeg'
import img2 from '../assets/images/img2.jpeg'
import img3 from '../assets/images/img3.jpeg'
import img4 from '../assets/images/img4.jpeg'
import img5 from '../assets/images/img5.jpeg'

const ImageGallery = () => {
  return (
    <div>
      <div className="img-container">
        <img src={img1} alt="" />
      </div>
      <div className="grid-img">
                <div className="img-1 slide">
                    <img src={img1} alt="" />
                </div>
        <div className="img-2 slide">
                    <div className="img-1 slide">
                        <img src={img2} alt="" />
                    </div>
        </div>


        <div className="img-3 slide">
                    <div className="img-1 slide">
                          <img src={img3} alt="" />
                     </div>
        </div>



        <div className="img-3 slide">

                    <div className="img-1 slide">
                        <img src={img4} alt="" />
                    </div>

        </div>


        <div className="img-4 slide">

                <div className="img-1 slide">
                    <img src={img5} alt="" />
                </div>

        </div>
        
      </div>
    </div>
  )
}

export default ImageGallery
