import React from 'react'
import '../styles/container.css'
import Home from './Home'
import NavBar from './NavBar'
import SideBar from './SideBar'

const Container = () => {
  return (
    <div className='container'>
        <NavBar />
        <Home />
    </div>
  )
}

export default Container