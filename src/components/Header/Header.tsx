import * as React from 'react'

import { Link } from 'react-router-dom'

import './Header.css'

import NightToggle from '../NightToggle/NightToggle'

const Header: React.FC<{}> = () => {
  return (
    <div className='header'>
      <div className='header__home-link'>Anna Koroleva</div>
      <NightToggle/>
      <div className='header__links'>
        <Link to='/home' className='header__link'>Home</Link>
        <Link to='/works' className='header__link'>Works</Link>
        <Link to='/about' className='header__link'>About</Link>
      </div>
    </div>
  )
}

export default Header