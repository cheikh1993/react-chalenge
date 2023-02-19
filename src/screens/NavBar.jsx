import React from 'react'
import '../styles/navbar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
       <div className="log">
        <h3>W.</h3>
       </div>
       <div className="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">New</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Tending</a></li>
          <li><a href="#">Categories</a></li>
        </ul>
        
       </div>
    </nav>
  )
}

export default NavBar