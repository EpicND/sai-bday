import React, { useEffect, useState, useRef } from "react";
import styles from '../styles/Header.module.css';
import Link from 'next/link';

function Header({route}) {

  const copiedText = useRef(null);

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }

  async function textCopied() {
    copiedText.current.style.opacity = "1";
    await timeout(1000);
    copiedText.current.style.opacity = "0";
  }

  return (
    <div className='header'> 
      <a className='inconsolata primary-txt'> Sai Shinde Art </a>
      <a className='roboto secondary-txt'> High school student based in Plymouth, Minnesota creating diverse art pieces across a variety of mediums  </a>
      <div className='button-box'>
      <br /> <br />
          <div className={route=="/" ? "button-alt": "button"}> <Link href="/" >  Home </Link> </div>  <br /> 
          <div className="button"><a href="#Drawings"> Drawings </a> </div> <br /> 
          <div className="button"><a href="#Paintings"> Paintings </a> </div> <br /> 
          <div className="button"> <a href="#Miscellaneous"> Miscellaneous </a> </div> <br /> 
          <div className={route=="/about" ? "button-alt": "button"}><Link href="/about"> About Me </Link> </div> <br /> 
          <div className={route=="/contact" ? "button-alt": "button"}><Link href="/contact"> Contact </Link> </div> <br /> 
      </div>
      <div className='bottom-box-alt'>
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

export default Header;