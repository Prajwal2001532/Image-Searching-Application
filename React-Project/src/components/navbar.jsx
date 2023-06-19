import React from 'react'
import '../css/navbar.css'
import head from '../assets/react.svg'
function navbar() {
  return (
    <>
    <nav id = "navbar" className="navbar visible">
      <img src = {head} alt="Logo"/>
      <div className = "nav-items">
          {/* <a href = "#">Portfolio</a>
          <a href = "#">Contact</a> */}
          <a href = "#">Home</a>
          
      </div>
    </nav>
    </>
  )
}
export default navbar;
