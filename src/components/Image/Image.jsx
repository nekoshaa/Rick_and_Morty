import React from 'react'

const Image = ({ image, alter }) => {
  return (
    <div className="image">
      <img className="imagePic" src={image} alt={alter} />
    </div>
  )
}

export default Image
