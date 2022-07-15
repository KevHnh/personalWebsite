import React, {useState, useEffect} from 'react'
import './NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    if (screenWidth > 500) {
      console.log("HERE")
      setToggleMenu(false)
      return
    }

    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <div className='navBarContainer'>
      {(toggleMenu || screenWidth > 500) && (
        <div className='navBarContainer'> 
        <a className="homeButton" onClick={toggleNav} href="#home">KEVIN HINH</a>
        <div className='navBarRight'>
            <a href="#about" onClick={toggleNav}>ABOUT</a>
            <a href="#education" onClick={toggleNav}>EDUCATION</a>
            <a href="#projects" onClick={toggleNav}>PROJECTS</a>
            <a href="#contact" onClick={toggleNav}>CONTACT</a>
        </div>
      </div>
      )}
        <div className="navButton">
          {(toggleMenu) ? 
          <div className="navButton">
            <div onClick={toggleNav}><CloseIcon className="actualButton" style={{fontSize:"7.5vw"}}/></div> 
          </div> :
          <div className="navButton">
            <div onClick={toggleNav}><MenuIcon className="actualButton" style={{fontSize:"7.5vw"}}/></div>
          </div>
          }
        </div >
    </div>
  )
}

export default NavBar