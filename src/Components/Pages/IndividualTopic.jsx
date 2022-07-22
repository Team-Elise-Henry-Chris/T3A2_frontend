import PostList from '../PostList'
import React from 'react'

const IndividualTopic = ({ posts, setPosts, getPosts }) => {
    return (
        <>
            <PostList posts={posts} setPosts={setPosts} getPosts={getPosts} />
        </>
    )
}

export default IndividualTopic