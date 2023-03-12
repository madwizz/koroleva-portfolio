import React, { useRef } from 'react'

import './NightToggle.css'
import '../../index.css'

const NightToggle: React.FC<{}> = () => {

  const toggleButtonRef = useRef<HTMLDivElement>(null);
  
  const toggled = () => {
    document.body.classList.toggle('bgcolor');
    document.body.classList.toggle('textcolor');
    document.querySelector('.toggle')?.classList.toggle('toggle_night');
    toggleButtonRef.current?.classList.toggle('button-move');
  }

  return (
    <div className="toggle" onClick={toggled}>
      <div className="toggle-button" ref={toggleButtonRef}></div>
    </div>
  )
}

export default NightToggle