import React from 'react'
import { Link } from 'react-router-dom'

const Topic = ({ topic }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl image-full m-4">
            <figure><img src="https://placeimg.com/400/225/arch" alt="" /></figure>
            <div class="card-body">
                <h2 class="card-title">{topic.name}</h2>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary"><Link to={`/topic/${topic._id}`}>View Posts</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Topic