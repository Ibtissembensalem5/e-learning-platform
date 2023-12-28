import React from 'react'
import '../../assets/logo.png'
import './styles/Header.css'
function Header() {
  return (
    <header>
      
      <div className="logo-container">
      <img src={require('../../assets/logo.png')} alt="The Sridge Logo" className="logo" />
      </div>
    </header>
  )
}

export default Header;