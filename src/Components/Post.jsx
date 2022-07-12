import React from 'react'


const Post = ({ post }) => {
    return (
        <div className="card bg-base-20 shadow-xl image-full m-4">
            <div className="card-body items-center">
                {/* Post Title */}
                <h2 className="card-title">{post.title}</h2>
                {/* Resource Type */}
                {(() => {
                    switch (post.resource_type.type) {
                        case "Blog":
                            return <img className="object-scale-down h-20 w-20" src="https://cdn-icons-png.flaticon.com/512/1187/1187544.png"></img>
                        case "Video":
                            return <img className="object-scale-down h-20 w-20" src="https://cdn-icons-png.flaticon.com/512/3074/3074767.png"></img>
                        case "Article":
                            return <img className="object-scale-down h-20 w-20" src="https://cdn-icons-png.flaticon.com/512/2680/2680919.png"></img>
                        case "Podcast":
                            return <img className="object-scale-down h-20 w-20" src="https://cdn-icons-png.flaticon.com/512/3163/3163456.png"></img>
                        case "Book":
                            return <img className="object-scale-down h-20 w-20" src="https://cdn-icons.flaticon.com/png/512/2702/premium/2702154.png?token=exp=1657599223~hmac=e41a44ab5ff3c3affac05f84dcb8b64d"></img>
                        case "Course":
                            return <img className="object-scale-down h-20 w-20" src="https://cdn-icons.flaticon.com/png/512/2436/premium/2436874.png?token=exp=1657599267~hmac=bedb30625efed5ade2a4d7f3b8f143e7"></img>
                        case "Other":
                            return <img className="object-scale-down h-20 w-20" src="https://cdn-icons.flaticon.com/png/512/3071/premium/3071733.png?token=exp=1657599588~hmac=0b6dd2fde364228b91a1eed2f0caf382"></img>
                        default:
                            return <img className="object-scale-down h-20 w-20" src="https://cdn-icons.flaticon.com/png/512/3071/premium/3071733.png?token=exp=1657599588~hmac=0b6dd2fde364228b91a1eed2f0caf382"></img>
                    }
                })()}


                {/* Resource Link */}
                <div className="card-actions justify-front">
                    <button className="btn btn-primary"><a href={post.link}>{post.resource_type.type} Link</a></button>
                </div>
                {/* Date Created */}
                <h4>{post.date_created}</h4>
                {/* Star Rating */}
                <div className="rating rating-lg rating-half">
                    <input type="radio" name="rating-10" class="rating-hidden" />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" checked />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                </div>
                <h4>number of ratings</h4>
            </div>

            <div className="flex justify-end z-10">
                {/* Delete */}
                <img className="object-scale-down h-10 w-10" src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"></img>
                {/* Edit  */}
                {/* <img className="object-scale-down h-10 w-10" src="https://cdn-icons-png.flaticon.com/512/2919/2919592.png"></img> */}
            </div>

        </div>
    )
}

export default Post