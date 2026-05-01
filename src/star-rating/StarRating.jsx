import React, { useState } from 'react'
import './style.css'

function StarRating({totalStars = 3, onRatingChange}) {
    const [rating, setRating] = useState(0)

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
                    style={{color: index < rating ? 'green' : 'lightgray'}}
                    onClick={handleClick(starValue)}
                    key={index} className='star'>★</button>
                )
            })
        }
    </div>
  )
}

export default StarRating