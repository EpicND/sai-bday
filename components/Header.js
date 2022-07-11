import React from 'react'
import styles from '../styles/Header.module.css'

function Header({darkMode}) {


  return (
    <div className='header'> <a onClick={darkMode.toggle}> Zesty ass header </a> </div>
  )
}

export default Header;