import Head from 'next/head';
import { useRef, useCallback, useEffect, useContext } from 'react';
import Upload from '../components/Upload';
import styles from '../styles/Home.module.css';
import Row from '../components/Row';
import Column from '../components/Column';

export default function Home({value}) {

  const images = ["/paintings/astronomy.jpg", "/paintings/avatar.jpg", "/paintings/birds.jpg", "/paintings/clouds.jpg", "/paintings/desert.jpg", "/paintings/flowers.jpg", "/paintings/mountains.jpg", "/paintings/koi.jpg", "/paintings/lighthouse.jpg", "/paintings/mango.jpg", "/paintings/kiwi.jpg", "/paintings/spongebob.jpg", "/paintings/winter.jpg",  "", "/paintings/moon.jpg" ];
  const imagesTwo = ["/chalk/heart.jpg", "/digital/dragon.jpg", "/misc/hands.jpg", "/penned/globe.jpg",  "/misc/tyler.jpg", "/penned/lightbulb.jpg", "/digital/skeleton.jpg", "/penned/ring.jpg" ];
  
  console.log(value);

  return (
    <div className={styles.container} >
      <Head>
        <title>Sai Shinde</title>
        <meta name="description" content="A website dedicated to my art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container"onScroll={console.log("bobby")}>

          <div className='mobile-text'>
            <h1 className={styles.title} ref={value} id="ttl">
              Sai Shinde Art
            </h1>
            <a className='roboto secondary-txt'> High school student based in Plymouth, Minnesota creating diverse art pieces across a variety of mediums  </a>
          </div> 

          <img className="title-image" src="/personal_painting.jpg" />

          <h1 className={styles.title} id="Drawings">
            Drawings
          </h1>

          <div className='image-container container-one'>
            <Upload url="/drawings/eyes.jpg" />
          </div>
          <div className='image-container container-two'>
            <Upload url="/drawings/hands.jpg" />
          </div>
          <div className='image-container container-one'>
            <Upload url="/drawings/shoes.jpg" />
          </div>

          <h1 className={styles.title} id="Paintings">
            Paintings
          </h1>

          <Row images={images}> </Row>
          
          <div className='mobile-text-o'>
            <h1 className={styles.title} id="Miscellaneous">
              Miscellaneous 
            </h1>
          </div>

          <div className='mobile-text'>
            <h1 className={styles.title} id="Miscellaneous">
              Misc. 
            </h1>
          </div>


          <Row images={imagesTwo}> </Row>
          
      </main> 
    </div>
  )
}
