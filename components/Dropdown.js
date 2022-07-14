import React, { useEffect, useState, useRef } from "react";
import styles from '../styles/Header.module.css';
import Link from 'next/link';

function Dropdown({route}) {

  const buttonBox = useRef(null);
  const bottomBox = useRef(null);
  const containerBox = useRef(null);
  const copiedText = useRef(null);
  const arrow = useRef(null);

  const [headerIsOpen, toggleHeaderIsOpen] = useState(false);

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }

  async function textCopied() {
    copiedText.current.style.opacity = "1";
    await timeout(1000);
    copiedText.current.style.opacity = "0";
  }

  async function toggleHeader() {
    toggleHeaderIsOpen(!headerIsOpen);
    if(headerIsOpen){
        buttonBox.current.style.display = "flex";
        await timeout(50);
        buttonBox.current.style.marginLeft = "-500px";
        bottomBox.current.style.opacity = "1";
        buttonBox.current.style.marginLeft = "0px";
        containerBox.current.style.height = "100vh";
        arrow.current.style.transform= "rotate(180deg)";
    } else {
        bottomBox.current.style.opacity = "0";
        buttonBox.current.style.marginLeft = "-500px";
        buttonBox.current.style.zIndex = "0";
        await timeout(500);
        containerBox.current.style.height = "70px";
        buttonBox.current.style.display = "none";
        arrow.current.style.transform= "rotate(0deg)";
    }
  }



  return (
    <div ref={containerBox} className="header-mobile"> 
        <div className="top-box">
            <a className='inconsolata primary-txt-alt'> Sai Shinde Art </a>
            <img onClick={toggleHeader} ref={arrow} className="logo" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/48/000000/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-4.png"/>        </div>  
        
        <div className='button-box' ref={buttonBox} >
        <br /> <br />
            <div onClick={toggleHeader} className={route=="/" || route == "" ? "button-alt": "button"}> <Link href="/" >  Home </Link> </div>  <br /> 
            <div onClick={toggleHeader} className="button"><Link href="/#Drawings"> Drawings  </Link> </div> <br /> 
            <div onClick={toggleHeader} className="button"><Link href="/#Paintings"> Paintings  </Link> </div> <br /> 
            <div onClick={toggleHeader} className="button"> <Link href="/#Miscellaneous"> Miscellaneous  </Link> </div> <br /> 
            <div onClick={toggleHeader} className={route=="/about" ? "button-alt": "button"}> <Link href="/about"> About Me </Link> </div> <br /> 
            <div onClick={toggleHeader} className={route=="/contact" ? "button-alt": "button"}> <Link href="/contact"> Contact </Link> </div> <br /> 
        </div>

        <div className='bottom-box' ref={bottomBox} >
        <div className='icons-box'> 
            <a href="https://www.instagram.com/saispaintings_/"> <img className="icon" src="https://img.icons8.com/ios/50/808080/instagram-new--v1.png"/> </a>
            <img className="iconTwo" src="https://img.icons8.com/ios-filled/50/808080/etsy.png"/>
            <a onClick={() => {navigator.clipboard.writeText("saishinde.art"); textCopied()}}> <img className="icon" src="https://img.icons8.com/ios-glyphs/100/808080/share--v1.png"/> </a>
            <a className="iconText" ref={copiedText} style={{opacity: "0"}}> copied! </a>
        </div>
        </div>
    </div>
  )
}

export default Dropdown