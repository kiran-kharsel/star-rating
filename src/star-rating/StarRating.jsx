import React, { useState } from 'react'
import './style.css'

function StarRating({totalStars = 3}) {
    const [rating, setRating] = useState(0)

    function handleClick(id){
        return ()=>{
            setRating(id + 1)
        }
    };


  return (
    <div className='star-rating'>
        {
            [...Array(totalStars)].map((_, index) => {
                return (
                    <button 
                    style={{color: index < rating ? 'green' : 'lightgray'}}
                    onClick={handleClick(index)}
                    key={index} className='star'>★</button>
                )
            })
        }
    </div>
  )
}

export default StarRating