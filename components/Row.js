import React from 'react'
import Column from './Column'
import { useState, useEffect } from 'react';


function Row({images}) {

    var imagesOne = [];
    var imagesTwo = [];
    var imagesThree = [];

    for(var i = 0; i < images.length; i++) {
        if(i % 3 == 0) imagesOne.push(images[i]);
        if(i % 3 == 1) imagesTwo.push(images[i]);
        if(i % 3 == 2) imagesThree.push(images[i]);
    }

  return (
    <div>
        <div className='image-container'>
            <div className='image-div'>
                <Column images={imagesOne} />
            </div>
            <div className='image-div special-col'>
                <Column images={imagesTwo} />
            </div>
            <div className='image-div'>
                <Column images={imagesThree} />
            </div>
        </div>
    </div> 
  )
}

export default Row