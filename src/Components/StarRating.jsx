import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './App.css'
import axios from './../api/axios'

const StarRating = ({ post, getPosts }) => {
    // State for hover/ratings
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    // Handles creating the rating
    const createStarHandler = async () => {
        const ratingDetails = { rating: rating, postId: post._id }

        try {
            await axios.post('/api/v1/rating/', ratingDetails)
            await getPosts() // Fetch all the posts which will update the ratings
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1

                    return (
                        <label key={i}>
                            <input
                                id="ratingbutton"
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                            />
                            <FaStar
                                className="star"
                                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                size={20}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>

                    )
                })}
                <p>{hover || rating} Stars.</p>

            </div>
            <button className="btn btn-sm" onClick={createStarHandler}>Submit</button>
        </div>
    )
}

export default StarRating