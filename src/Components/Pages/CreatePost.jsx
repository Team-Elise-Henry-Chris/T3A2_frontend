import { Link } from 'react-router-dom'

const CreatePost = () => {
    



    return (
        <div className="relative flex flex-grow pb-3 pl-3 pr-3">
            <form className="hero bg-base-200 border rounded ">
                <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Create Post</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <select class="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select Post Topic</option>
                                <option>Blog</option>
                                <option>Video</option>
                                <option>Article</option>
                                <option>Podcast</option>
                                <option>Book</option>
                                <option>Course</option>
                                <option>Other</option>
                            </select>

                            <div className="form-control">
                                <input type="text" placeholder="Post Title" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <input type="text" placeholder="Post Link" className="input input-bordered" />
                            </div>

                            <select class="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select Post Type</option>
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