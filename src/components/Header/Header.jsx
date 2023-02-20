import React from 'react'

import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__home-link'>Anna Koroleva</div>
      <div className='header__links'>
        <Link to='/' className='header__link'>Home</Link>
        <Link to='/works' className='header__link'>Works</Link>
        <Link to='/about' className='header__link'>About</Link>
      </div>
    </div>
  )
}

export default Header