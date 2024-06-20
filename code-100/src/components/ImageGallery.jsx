import React from 'react'
import img1 from '../assets/images/img1.jpeg'

const ImageGallery = () => {
  return (
    <div>
      <div className="img-container">
        <img src={img1} alt="" />
      </div>
      <div className="grid-img">
        <div className="img-1 slide"></div>
        <div className="img-2 slide"></div>
        <div className="img-3 slide"></div>
        <div className="img-3 slide"></div>
        <div className="img-4 slide"></div>
        
      </div>
    </div>
  )
}

export default ImageGallery
