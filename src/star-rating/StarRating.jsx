import React, { useState } from 'react'
import './style.css'

function StarRating({totalStars = 3, onRatingChange}) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(value){
        return ()=>{
            setRating(value)
            if(onRatingChange){
                onRatingChange(value)
            }
        }
    };


  return (
    <div className='star-rating'>
        {
            [...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <button 
                    className={`star ${starValue <= (hover || rating) ? 'active' : '' }`}
                    onClick={handleClick(starValue)}
                    onMouseEnter={()=> setHover(starValue)}
                    onMouseLeave={()=> setHover(0)}
                    key={index}>★</button>
                )
            })
        }
    </div>
  )
}

export default StarRating