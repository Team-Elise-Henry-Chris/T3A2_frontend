import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CreatePost = ({ topics, setPosts, posts }) => {
    const nav = useNavigate()

    const [newPost, setNewPost] = useState({
        title: '',
        link: '',
        resource_type: '',
        topic: '',
    })

    const { id } = useParams()

    const handleChange = (event) => {
        setNewPost({ ...newPost, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const post = newPost

        if (!post.topic) {
            post.topic = id
            setNewPost(post)
        }

        try {
            const response = await axios.post('/api/v1/post', post)
            setPosts([...posts, response.data])
            nav(`/topic/${newPost.topic}`)
        } catch (err) {
            // TODO: Handle errors
        }
    }

    const findTopicName = () => {
        const foundTopic = topics.find((topic) => topic._id == id)
        if (!foundTopic) { // ID not found
            return renderTopicSelect()
        }

        return (
            <h1>{foundTopic.topic_name}</h1>
        )
    }

    const renderTopicSelect = () => {
        return (
            <select className="select select-bordered w-full max-w-xs"
                name="topic"
                value={newPost.topic}
                onChange={handleChange}
                required
            >
                <option disabled value={''}>Select Post Topic</option>
                {topics.map((topic, index) => <option key={index} value={topic._id}>{topic.topic_name}</option>)}
            </select>
        )
    }

    return (
        <div className="relative flex flex-grow p-3">
            <form onSubmit={handleSubmit} className="hero bg-base-200 border rounded ">
                <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Create Post</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            {id ? (
                                findTopicName()
                            ) : (
                                renderTopicSelect()
                            )}


                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Post Title"
                                    className="input input-bordered"
                                    name="title"
                                    value={newPost.title}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Post Link"
                                    className="input input-bordered"
                                    name="link"
                                    value={newPost.link}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <select className="select select-bordered w-full max-w-xs"
                                name="resource_type"
                                value={newPost.resource_type}
                                onChange={handleChange}
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
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreatePost