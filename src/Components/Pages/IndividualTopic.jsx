import PostList from '../PostList'
import React from 'react'

const IndividualTopic = ({ posts }) => {
    return (
        <>
            <PostList posts={posts} />
        </>
    )
}

export default IndividualTopic