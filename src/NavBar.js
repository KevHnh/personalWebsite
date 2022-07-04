import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navBarContainer'>
        <a href="#home">KEVIN HINH</a>
        <div className='navBarRight'>
            <a href="#about">ABOUT</a>
            <a href="#projects">PROJECTS</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#contact">CONTACT</a>
        </div>
    </div>
  )
}

export default NavBar