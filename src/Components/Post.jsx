import React from 'react'

const Post = ({ post }) => {
    return (
        <div class="card w-200 bg-base-100 shadow-xl image-full m-4">
            <figure><img src="https://freesvg.org/img/video-player-YouTube.png" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{post.title}</h2>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">THIS IS A POST</button>
                </div>
            </div>
        </div>
    )
}

export default Post