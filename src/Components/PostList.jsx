// import { useEffect } from 'react'
import Post from './Post'
import React, { useState } from "react"

const PostList = ({ posts }) => {
    const [isToggled, setIsToggled] = useState(false)

    return (
        <>
            <div>
                <button className="btn btn-secondary" onClick={() => setIsToggled(!isToggled)}>Sort by Date</button>
                {isToggled ? posts.filter(posts => `/topic/${posts.topic}` === window.location.pathname).sort((a, b) => a.date_created < b.date_created ? 1 : -1).map((post, index) => <Post key={index} post={post} />) : posts.filter(posts => `/topic/${posts.topic}` === window.location.pathname).sort((a, b) => a.date_created > b.date_created ? 1 : -1).map((post, index) => <Post key={index} post={post} />)}
            </div>

        </>
    )
}

export default PostList
