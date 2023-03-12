import * as React from 'react'
import './Home.css'
import tiger from '../../img/tiger.gif'
import Transitions from '../Transitions/Transitions'

const Home: React.FC<{}> = () => {
  return (
    <>
      <Transitions>
        <div className="home">
          <img className='home__tiger' src={tiger} alt='tiger gif'/>
        </div>
      </Transitions>
    </>
  )
}

export default Home