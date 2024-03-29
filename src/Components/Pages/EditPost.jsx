import React, { useState } from 'react'
import axios from '../../api/axios'

const EditPost = ({ post, posts, setPosts }) => {
    // State for post
    const [editPostTitle, setEditPostTitle] = useState(`${post.title}`)
    const [editPostResourceType, setEditPostResourceType] = useState(`${post.resource_type}`)
    const [editPostLink, setEditPostLink] = useState(`${post.link}`)

    // Handles submitting the edited post to the backend
    const handleSubmit = async (e) => {
        e.preventDefault()
        const editPostData = {title: editPostTitle, resource_type: editPostResourceType, link: editPostLink}

        try {
            await axios.patch(`/api/v1/post/${post._id}`, editPostData)

            setPosts(posts.map((p) => {
                if (p._id === post._id) {
                    p.title = editPostData.title
                    p.resource_type = editPostData.resource_type
                    p.link = editPostData.link
                }

                return p
            }))
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="relative flex flex-grow p-3">
            <form onSubmit={handleSubmit} className="hero bg-base-200 border rounded ">
                <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Edit Post</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">


                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder={post.title}
                                    className="input input-bordered"
                                    name="title"
                                    value={editPostTitle}
                                    onChange={(e) => setEditPostTitle(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder={post.link}
                                    className="input input-bordered"
                                    name="link"
                                    value={editPostLink}
                                    onChange={(e) => setEditPostLink(e.target.value)}
                                    required
                                />
                            </div>

                            <select className="select select-bordered w-full max-w-xs"
                                name="resource_type"
                                value={editPostResourceType}
                                onChange={(e) => setEditPostResourceType(e.target.value)}
                                required
                            >
                                <option disabled value={''}>Select Post Type</option>
                                <option>Blog</option>
                                <option>Video</option>
                                <option>Article</option>
                                <option>Podcast</option>
                                <option>Book</option>
                                <option>Course</option>
                                <option>Other</option>
                            </select>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary" onClick=''>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditPost