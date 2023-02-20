import React from 'react'
import './About.css'

import photo from '../../img/photo.png' 

const About = () => {
  return (
    <div className='about'>
      <div className='about__wrap'>
        <div className='about__paragraphs'>
          <p className='about__p-one'>
            My expertise in fashion photography stems from my interest in architecture and my technical approach to shaping light and composition.
          </p>
          <p className='about__p-two'>
            My training at the Photo Academy in Amsterdam, together with my past experience in an advertising agency, has helped me develop a refined European style. Now I pursue my passion as an independent photographer, working for multinational clients.
          </p>
        </div>
        <img className='about__photo' src={photo} alt='Korolova avatar'/>
      </div>
    </div>
  )
}

export default About;