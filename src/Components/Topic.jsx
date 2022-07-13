const Topic = ({ topic }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full m-4">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{topic.name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Posts</button>
                </div>
            </div>
        </div>
    )
}

export default Topic