import React, { useState } from 'react'
import './style.css'

function StarRating({totalStars = 5}) {
    const [stars, setStars] = useState(Array(totalStars).fill('') || [])


  return (
    <div className='star-rating'>
        {
            stars.map((star, index) => {
                return (
                    <button key={index} className='star'></button>
                )
            })
        }
    </div>
  )
}

export default StarRating