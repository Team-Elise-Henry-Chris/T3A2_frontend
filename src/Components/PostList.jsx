import { useState } from "react"
import Post from './Post'

const PostList = ({ posts, setPosts, getPosts }) => {
    const [isToggled, setIsToggled] = useState(false)

    return (
        <>
            <div>
                <button className="btn btn-secondary" onClick={() => setIsToggled(!isToggled)}>Sort by Date</button>
                {isToggled ? posts.filter(posts => `/topic/${posts.topic}` === window.location.pathname).sort((a, b) => a.date_created < b.date_created ? 1 : -1).map((post, index) => <Post key={index} post={post} posts={posts} setPosts={setPosts} getPosts={getPosts} />) : posts.filter(posts => `/topic/${posts.topic}` === window.location.pathname).sort((a, b) => a.date_created > b.date_created ? 1 : -1).map((post, index) => <Post key={index} post={post} posts={posts} setPosts={setPosts} getPosts={getPosts} />)}
            </div>

        </>
    )
}

export default PostList
