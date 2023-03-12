import * as React from 'react'

import './Publications.css'

const Publications: React.FC<{}> = () => {
  return (
    <div className='publications'>
      <div className='publications__wrap'>
        <h1 className='publications__title'>Publications and features</h1>
        <div className='publications__list'>
          <div className='publications__items'>
            <p className='publications__item'>The Magazine, No. 12</p>
            <p className='publications__year'>2010</p>
          </div>
          <div className='publications__items'>
            <p className='publications__item'>Interiors & Architecture</p>
            <p className='publications__year'>2011</p>
          </div>
          <div className='publications__items'>
            <p className='publications__item'>Catalogue Grande</p>
            <p className='publications__year'>2014</p>
          </div>
          <div className='publications__items'>
            <p className='publications__item'>The Magazine, No. 23</p>
            <p className='publications__year'>2015</p>
          </div>
          <div className='publications__items'>
            <p className='publications__item'>Yet Another Magazine</p>
            <p className='publications__year'>2018</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publications