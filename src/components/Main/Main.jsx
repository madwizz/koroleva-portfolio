import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './Main.css'

import Home from '../Home/Home'
import Works from '../Works/Works'
import About from '../About/About'

const Main = () => {
  return (
      <div className='main'>
        <Routes>
          <Route path='/' exact element={ <Home/> } />
          <Route path='/works' element={ <Works/> } />
          <Route path='/about' element={ <About/> } />
        </Routes>
      </div>
  )
}

export default Main;