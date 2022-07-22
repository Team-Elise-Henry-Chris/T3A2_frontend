import PostList from '../PostList'

const IndividualTopic = ({ posts, setPosts, getPosts }) => {
    return (
        <>
            <PostList posts={posts} setPosts={setPosts} getPosts={getPosts} />
        </>
    )
}

export default IndividualTopic