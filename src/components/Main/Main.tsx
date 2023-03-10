import * as React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './Main.css'

import Home from '../Home/Home'
import Works from '../Works/Works'
import About from '../About/About'

const Animated: React.FC<{}> = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter >
      <Routes location={location} key={location.pathname}>
        <Route path='/home' element={ <Home/> } />
        <Route path='/works' element={ <Works/> } />
        <Route path='/about' element={ <About/> } />
      </Routes>
    </AnimatePresence>
  )
}

const Main = () => {
  return (
      <div className='main'>
        <Animated/>
      </div>
  )
}

export default Main