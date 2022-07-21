import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './App.css'

const StarRating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    return <div className="flex flex-row">
        {[ ... Array(5)].map((star, i) => {
            const ratingValue = i + 1

            return (
            <label>
                <input 
                id="ratingbutton"
                type="radio" 
                name="rating" 
                value={ratingValue} 
                onClick={() => setRating(ratingValue)}
                />
                <FaStar 
                    className="star" 
                    color={ratingValue <= (hover ||rating) ? "#ffc107" : "#e4e5e9" }
                    size={40} 
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)} 
                    />
            </label>
            )
        })}
        <p>{rating} Stars.</p>
    </div>
}

export default StarRating