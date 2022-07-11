import Post from './Post'

const PostList = ({ posts }) => {
    return (
        <>
            <div className="flex flex-col justify-center">
                {posts.map((post, index) => <Post key={index} post={post} />)}
            </div>
            <h1>THIS IS POST LIST</h1>
        </>
    )
}

export default PostList