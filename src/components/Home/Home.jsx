import React from 'react'
import './Home.css'
import tiger from '../../img/tiger.gif'

const Home = () => {
  return (
    <div className="home">
      <img className='home__tiger' src={tiger} alt=''tiger gif/>
    </div>
  )
}

export default Home