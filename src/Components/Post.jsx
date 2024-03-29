import { useContext } from 'react'
import article from './icons/article.png'
import blog from './icons/blog.png'
import book from './icons/book.png'
import course from './icons/course.png'
import other from './icons/other.png'
import podcast from './icons/podcast.png'
import video from './icons/video.png'
import moment from 'moment'
import StarRating from './StarRating'
import axios from './../api/axios'
import './App.css'
import EditPost from './Pages/EditPost'
import AuthContext from './AuthProvider'

const Post = ({ post, posts, setPosts, getPosts }) => {
    // LINKS
    const { auth } = useContext(AuthContext)
    //Post Title
    const postTitle = () => post.title
    //Post Link
    const postLink = () => post.link
    //Post Resource Type
    const postResourceType = () => post.resource_type
    // Post Date Created
    const postDateCreated = () => moment(post.date_created).format('[Created,] Do MMMM YYYY [(]h:mm a[)]')

    // DELETE POSTS 
    const deletePostHandler = async () => {
        try {
            await axios.delete(`/api/v1/post/${post._id}`)
            setPosts(posts.filter((p) => p._id !== post._id))
        } catch (err) {
            console.error('Error: ' + err)
        }
    }

    return (
        <div className="flex flex-row-reverse border-1 bg-sky-600 shadow-xl image-full m-4 rounded-lg">
            <div className="flex-row justify-end z-10">
            
            {/* Delete */}
            {auth?.id === null ? null : auth?.id.includes(post.user) ? 
            <label tabIndex="0" className="btn m-1 bg-sky-600 h-10 w-19"><img id="edit_delete" className="object-scale-down h-10 w-10" src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" onClick={deletePostHandler}></img></label> : 
            auth?.role === "admin" ? <label tabIndex="0" className="btn m-1 bg-sky-600 h-10 w-19"><img id="edit_delete" className="object-scale-down h-10 w-10" src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" onClick={deletePostHandler}></img></label> : null}
   
            
        
            {/* Edit  */}
            {auth?.id === null ? null : auth?.id.includes(post.user) ? 
            <div className="dropdown dropdown-end sm:flex justify-end">
            <label tabIndex="0" className="btn m-1 bg-sky-600 h-10 w-12.1"><img id="edit_delete" className="object-scale-down h-10 w-10" src="https://cdn-icons-png.flaticon.com/512/2919/2919592.png"></img></label>
            <ul tabIndex="0" className="dropdown-content menu p-2 shadow base-content rounded-box w-52">
            <li><a><EditPost post={post} posts={posts} setPosts={setPosts} /></a></li>
            </ul>
            </div> : 
            auth?.role === "admin" ? 
            <div className="dropdown dropdown-end sm:flex justify-end">
            <label tabIndex="0" className="btn m-1 bg-sky-600 h-10 w-12.1"><img id="edit_delete" className="object-scale-down h-10 w-10" src="https://cdn-icons-png.flaticon.com/512/2919/2919592.png"></img></label>
            <ul tabIndex="0" className="dropdown-content menu p-2 shadow base-content rounded-box w-52">
            <li><a><EditPost post={post} posts={posts} setPosts={setPosts} /></a></li>
            </ul>
            </div> : null}
            
            </div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-left  w-full">
                    {/* Post Title */}
                    <h2 className="card-title order-1 sm:order-2 sm:hidden">{postTitle()}</h2>
                    {/* Resource Type */}
                    <div className="order-2 sm:order-1 sm:w-1/6 md:w-1/6 p-3">
                    {(() => {
                        switch (postResourceType()) {
                            case "Blog":
                                return <img className="object-scale-down h-20 w-20" src={blog} ></img>
                            case "Video":
                                return <img className="object-scale-down h-20 w-20" src={video} ></img>
                            case "Article":
                                return <img className="object-scale-down h-20 w-20" src={article}></img>
                            case "Podcast":
                                return <img className="object-scale-down h-20 w-20" src={podcast}></img>
                            case "Book":
                                return <img className="object-scale-down h-20 w-20" src={book}></img>
                            case "Course":
                                return <img className="object-scale-down h-20 w-20" src={course}></img>
                            case "Other":
                                return <img className="object-scale-down h-20 w-20" src={other}></img>
                            default:
                                return <img className="object-scale-down h-20 w-20" src={other}></img>
                        }
                    })()}
                    </div>

                    {/* Resource Link */}
                    <button className="btn btn-primary order-3 sm:hidden"><a href={postLink()} target="_blank">{postResourceType()} Link</a></button>

                    {/* Date Created */}
                    <h4 className="order-4 sm:hidden">{postDateCreated()}</h4>
                    {/* Star Rating */}
                    <div className="rating rating-lg order-5 sm:hidden">
                    {(() => {
                        switch (Math.round((post.ratings.reduce((a,v) =>  a = a + v.rating_num , 0 ))/post.ratings.length) || Math.round((post.ratings.reduce((a,v) =>  a = a + v.rating , 0 ))/post.ratings.length)) {
                            case 1:
                                return <>
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                       </>
                            case 2:
                                return <> 
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                       </>
                            case 3:
                                return <> 
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                       </>
                            case 4:
                                return <> 
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                        </>
                            case 5:
                                return <> 
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                       </>
                            default:
                                return <> 
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                       </>
                                }
                            })()}
                            
                    </div>
                    <h4 className="order-6 sm:hidden">number of ratings</h4>
                    
                    {/* Star Rating - USER ADDED*/}
                        <div>{auth?.role === "admin" ? 
                        <div className="order-7 sm:hidden dropdown dropdown-end">
                            <label tabIndex="0" className="btn m-1 bg-blue-700">Add Star Rating</label>
                                <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-accent-content rounded-box w-52">
                                    <li><a><StarRating post={post} getPosts={getPosts} /> </a></li>
                                </ul>
                        </div>
                         : auth?.id === post.user ? null: 
                        <div className="order-7 sm:hidden dropdown dropdown-end">
                            <label tabIndex="0" className="btn m-1 bg-blue-700">Add Star Rating</label>
                                <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-accent-content rounded-box w-52">
                                    <li><a><StarRating post={post} getPosts={getPosts} /> </a></li>
                                </ul>
                        </div>
                         }
                        </div>


                    {/* NON MOBILE DEVICES  */}
                    <div className="hidden sm:flex flex-col items-left text-left order-2 m-4 w-full gap-y-4">
                        {/* Post Title */}
                        <h2 className="card-title">{postTitle()}</h2>
                        {/* Resource Link */}
                        <button className="btn btn-primary w-1/4"><a href={postLink()} target="_blank">{postResourceType()} Link</a></button>
                    </div>



                                
                    <div className="hidden sm:flex flex-col items-right text-right order-3 w-full p-3 gap-y-4">
                        {/* Date Created */}
                        <h4 className="">{postDateCreated()}</h4>

                        {/* Star Rating - USER ADDED*/}
                        <div>{auth?.role === "admin" ?
                        <div className="dropdown dropdown-end hidden sm:flex justify-end">
                            <label tabIndex="0" className="btn m-1 bg-blue-700">Add Star Rating</label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-accent-content rounded-box w-52">
                            <li><a><StarRating post={post} getPosts={getPosts} /></a></li>
                            </ul>
                        </div>
                        : auth?.id === post.user ? null:
                        <div className="dropdown dropdown-end hidden sm:flex justify-end">
                            <label tabIndex="0" className="btn m-1 bg-blue-700">Add Star Rating</label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-accent-content rounded-box w-52">
                            <li><a><StarRating post={post} getPosts={getPosts} /></a></li>
                            </ul>
                        </div>
                        }</div>

                        <div className="flex flex-row justify-end items-end">
                            {/* Number of ratings */}
                            <h4 className="">number of ratings</h4>
                            
                            {/* Star Rating - FROM DATABASE*/}
                            <div className="rating rating-lg">
                            {(() =>  {
                                switch (Math.round((post.ratings.reduce((a,v) =>  a = a + v.rating_num , 0 ))/post.ratings.length) || Math.round((post.ratings.reduce((a,v) =>  a = a + v.rating , 0 ))/post.ratings.length)) {
                                    case 1:
                                        return <>
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20"  />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                               </>
                                    case 2:
                                        return <> 
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500"  />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                               </>
                                    case 3:
                                        return <> 
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500"  />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                               </>
                                    case 4:
                                        return <> 
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500"  />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20" />
                                               </>
                                    case 5:
                                        return <> 
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
                                               </>
                                    default:
                                        return <> 
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20"/>
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20"/>
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20"/>
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20"/>
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500/20"/>
                                               </>
                                }
                                
                            })()}

                            </div>
                        </div>
                    </div>
            </div>
            
        </div>
    )
}

export default Post