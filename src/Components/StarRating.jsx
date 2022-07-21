import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import './App.css'
import jwt_decode from 'jwt-decode'
import axios from './../api/axios'



const StarRating = ({ post }) => {

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)


    var token = JSON.parse(window.localStorage.getItem('data'))?.accessToken
    var decoded = jwt_decode(token)

    const createStarHandler = () => {

        const headers = { 
            'Authorization': `Bearer ${token}`
        }

        const ratingDetails = { rating: rating, postId:`${post._id}`}

        axios.post(`/api/v1/rating/`, ratingDetails)
            .then(response => {
                (console.log(response.data))
                (window.location.reload(false))
            })
            .catch(error => error => {
                setGoal({error: true})
            })
    }

    return <div className="flex flex-col">
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