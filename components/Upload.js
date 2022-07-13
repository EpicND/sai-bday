import React from 'react'

function Upload({url}) {
  return (
    <div className='image-div'>
        <img className="image-alt" src={url} />
    </div>

  )
}

export default Upload