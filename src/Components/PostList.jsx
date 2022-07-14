import Post from './Post'

const PostList = ({ posts }) => {
    return (
        <>
            <div className="flex flex-col justify-center">
                {posts.map((post, index) => <Post key={index} post={post} />)}
            </div>
        </>
    )
}

export default PostList