import React from 'react'


const Post = ({ post }) => {
    return (
        <div className="flex flex-row-reverse border-1 bg-sky-600 shadow-xl image-full m-4 rounded-lg">
            <div className="flex-row justify-end z-10">
            {/* Delete */}
            <img className="object-scale-down h-10 w-10" src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"></img>
            {/* Edit  */}
            <img className="object-scale-down h-10 w-10" src="https://cdn-icons-png.flaticon.com/512/2919/2919592.png"></img>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-left  w-full">
                    {/* Post Title */}
                    <h2 className="card-title order-1 sm:order-2 sm:hidden">{post.title}</h2>
                    {/* Resource Type */}
                    <div className="order-2 sm:order-1 sm:w-1/6 md:w-1/6 p-3">
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
                    </div>

                    {/* Resource Link */}
                    <button className="btn btn-primary order-3 sm:hidden"><a href={post.link}>{post.resource_type.type} Link</a></button>

                    {/* Date Created */}
                    <h4 className="order-4 sm:hidden">{post.date_created}</h4>
                    {/* Star Rating */}
                    <div className="rating rating-lg rating-half order-5 sm:hidden">
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
                    <h4 className="order-6 sm:hidden">number of ratings</h4>


                    {/* NON MOBILE DEVICES  */}
                    <div className="hidden sm:flex flex-col items-left text-left order-2 m-4 w-full gap-y-4">
                        {/* Post Title */}
                        <h2 className="card-title">{post.title}</h2>
                        {/* Resource Link */}
                        <button className="btn btn-primary w-1/4"><a href={post.link}>{post.resource_type.type} Link</a></button>
                    </div>
                    <div className="hidden sm:flex flex-col items-right text-right order-3 w-full p-3 gap-y-4">
                        {/* Date Created */}
                        <h4 className="">{post.date_created}</h4>
                        <div className="flex flex-row justify-end items-end">
                            {/* Number of ratings */}
                            <h4 className="">number of ratings</h4>
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
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Post