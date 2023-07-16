import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="icon">
        {/* <h2 className="logo"> ZORD SHOP </h2> */}
        <img className='app-logo' src='Zordlogo2.png' alt='' />
        </div>
        <div className="menu">
            <ul>
                <li> <a className='menu-content' href="#home">HOME</a></li>
                <li> <a className='menu-content' href="#about">ABOUT</a></li>
                <li> <a className='menu-content' href="#footer">HELP</a></li>
                {/* <li> <a className='menu-content' href="#content">CONNECT</a></li> */}
            </ul>
        </div>
    </div>

    
  )
}
