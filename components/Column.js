import React from 'react'
import Link from 'next/link';

function Column({images, ids}) {

  var elements = [];

  for(var i = 0; i < images.length; i++) {
    console.log();
    var href = images[i].substring(images[i].substring(1).indexOf("/") + 2);
    href = href.substring(0, href.length - 4);
    elements.push(
      <Link href={"/images/" + href}>
          <div id={ids + i} key={i} className='image-div-two hovr'>
              <img className="image" src={images[i]} />
          </div>
      </Link>
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