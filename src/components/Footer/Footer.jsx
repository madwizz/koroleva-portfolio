import React, { useState, useEffect } from 'react'
import './Footer.css'

const Footer = () => {

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="footer">
      <div className='footer__name+date'>
        <div className='footer__name'>Anna Koroleva</div>
        <div className='footer__date'>{currentYear}</div>
      </div>
      <div className='footer__socials'>
        <div className='footer__social'>
          <a className='footer__link' href="https://www.instagram.com/anyakokoroko/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className='footer__link' href="https://www.instagram.com/anyakokoroko/" target="_blank" rel="noopener noreferrer">@anyakokoroko</a>
        </div>
        <div className='footer__social'>
          <a className='footer__link' href="https://www.linkedin.com/in/anyakokoroko/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className='footer__link' href="https://www.linkedin.com/in/anyakokoroko/" target="_blank" rel="noopener noreferrer">@anyakokoroko</a>
        </div>
      </div>
    </div>
  )
}

export default Footer