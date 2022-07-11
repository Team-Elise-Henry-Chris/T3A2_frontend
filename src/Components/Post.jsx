import React from 'react'

const Post = ({ post }) => {
    return (
        <div className="card bg-base-20 shadow-xl image-full m-4">
            {/* <figure><img src="https://freesvg.org/img/video-player-YouTube.png" alt="Shoes" /></figure> */}
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <div className="card-actions justify-front">
                    <button className="btn btn-primary"><a href={post.link}>{post.resource_type.type} Link</a></button>
                </div>
            </div>
        </div>
    )
}

export default Post