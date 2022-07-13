import React from 'react'

function Column({images}) {
  var elements = [];

  for(var i = 0; i < images.length; i++) {
    elements.push(
        <div key={i} className='image-div-two'>
            <img className="image" src={images[i]} />
        </div>
    );
  }

  return (
    <div>
        <div className='image-container-cl'>
            {elements}
        </div>
    </div> 
  )
}

export default Column