import React, { useEffect } from 'react'
import '../css/Home.css'
import axios from 'axios'

const Home = () => {
  
  return (
    <div className='hero'>
        <div className="hero-content">
            <h1 className='hero-text'>Каталог книг</h1>
            <p className='hero-description'>
            В этом месте собраны лучшие книги всех времен. Уверены, что каждый найдет заветный подарок себе или близкому!
            </p>
        </div>
        <div className="hero-image"></div>
    </div>
  )
}

export default Home