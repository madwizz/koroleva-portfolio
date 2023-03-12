import * as React from 'react'
const { useState } = React

import './Works.css'

import WorkPopup from '../WorkPopup/WorkPopup'

import bellFlower from '../../img/bell-flower.webp'
import blackCat from '../../img/black-cat.webp'
import candle from '../../img/candle.webp'
import catBeer from '../../img/cat-beer.webp'
import carRider from '../../img/cat-rider.webp'
import cat from '../../img/cat.webp'
import cheetah from '../../img/cheetah.webp'
import cyclops from '../../img/cyclops.webp'
import dove from '../../img/dove.webp'
import eye from '../../img/eye.webp'
import eyes from '../../img/eyes.webp'
import flower from '../../img/flower.webp'
import milkshake from '../../img/milkshake.webp'
import nightTiger from '../../img/night-tiger.webp'
import peacock from '../../img/peacock.webp'
import pizza from '../../img/pizza.webp'
import reflection from '../../img/reflection.webp'
import rgtm from '../../img/rgtm.webp'
import snakeEating from '../../img/snake-eating.webp'
import snakeEatingBeer from '../../img/snake-eating-neer.webp'
import star from '../../img/star.webp'
import sunbathing from '../../img/sunbathing.webp'
import swan from '../../img/swan.webp'
import trade from '../../img/trade.webp'
import wine from '../../img/wine.webp'

const Works: React.FC<{}> = () => {

  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setSelectedImage(event.currentTarget.currentSrc);
  }

  return (
    <div className='works'>
      {selectedImage && 
      <WorkPopup 
        imageSrc={selectedImage} 
        onClose={() => setSelectedImage('')}
      />}
      <div className='works__container'>
        <img className='works__item' src={bellFlower} alt='' onClick={handleImageClick} />
        <img className='works__item' src={blackCat} alt='' onClick={handleImageClick} />
        <img className='works__item' src={candle} alt='' onClick={handleImageClick} />
        <img className='works__item' src={catBeer} alt='' onClick={handleImageClick} />
        <img className='works__item' src={carRider} alt='' onClick={handleImageClick} />
        <img className='works__item' src={cat} alt='' onClick={handleImageClick} />
        <img className='works__item' src={cheetah} alt='' onClick={handleImageClick} />
        <img className='works__item' src={cyclops} alt='' onClick={handleImageClick} />
        <img className='works__item' src={dove} alt='' onClick={handleImageClick} />
        <img className='works__item' src={eye} alt='' onClick={handleImageClick} />
        <img className='works__item' src={flower} alt='' onClick={handleImageClick} />
        <img className='works__item' src={eyes} alt='' onClick={handleImageClick} />
        <img className='works__item' src={milkshake} alt='' onClick={handleImageClick} />
        <img className='works__item' src={nightTiger} alt='' onClick={handleImageClick} />
        <img className='works__item' src={peacock} alt='' onClick={handleImageClick} />
        <img className='works__item' src={pizza} alt='' onClick={handleImageClick} />
        <img className='works__item' src={reflection} alt='' onClick={handleImageClick} />
        <img className='works__item' src={rgtm} alt='' onClick={handleImageClick} />
        <img className='works__item' src={snakeEating} alt='' onClick={handleImageClick} />
        <img className='works__item' src={snakeEatingBeer} alt='' onClick={handleImageClick} />
        <img className='works__item' src={star} alt='' onClick={handleImageClick} />
        <img className='works__item' src={sunbathing} alt='' onClick={handleImageClick} />
        <img className='works__item' src={swan} alt='' onClick={handleImageClick} />
        <img className='works__item' src={trade} alt='' onClick={handleImageClick} />
        <img className='works__item' src={wine} alt='' onClick={handleImageClick} />
      </div>
    </div>
  )
}

export default Works