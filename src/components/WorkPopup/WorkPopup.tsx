import * as React from 'react'

import '../WorkPopup/WorkPopup.css'

type WorkPopupProps = {
  onClose: () => void
  imageSrc: string
}

const WorkPopup: React.FC<WorkPopupProps> = ({ imageSrc, onClose }) => {
  return (
    <div className="work-popup">
      <div className="work-popup__overlay" onClick={onClose}></div>
      <div className="work-popup__content">
        <img className='work-popup__img' src={imageSrc} alt='' />
        <div className="work-popup__caption">''</div>
        <button className="work-popup__close-btn" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  )
}

export default WorkPopup
