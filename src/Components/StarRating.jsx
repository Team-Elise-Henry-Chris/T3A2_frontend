import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './App.css'

const StarRating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    const createStarHandler = () => {
  
        const headers = { 
            'Authorization': `Bearer ${token}`
        }

        axios.post(`/api/v1/rating/${post._id}`)
            .then(response => {
                (console.log(response.data))
                (window.location.reload(false))
            })
            .catch(error => error => {
                setGoal({error: true})
            })
    }

    return <div lassName="flex flex-col">
        <div className="flex flex-row">
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
                    size={20} 
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)} 
                    />
            </label>
   
            )
        })}
        <p>{hover || rating} Stars.</p>
        
    </div>
    <button class="btn btn-sm" onClick={createStarHandler}>Submit</button>
   </div>
    
}

export default StarRating