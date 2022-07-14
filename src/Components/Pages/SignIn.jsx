import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const [signInInfo, setSignInInfo] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        setSignInInfo({ ...signInInfo, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        // TODO: Axios call to backend
    }


    return (
        <div className="relative flex flex-grow pb-3 pl-3 pr-3">
            <form onSubmit={handleSubmit} className="hero bg-base-200 border rounded ">
                <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign In!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="email"
                                    className="input input-bordered"
                                    name="email"
                                    value={signInInfo.email}
                                    onChange={handleChange}                                    
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    name="password"
                                    value={signInInfo.password}
                                    onChange={handleChange} 
                                />
                                <label className="label">
                                    <Link to="/create-account" className="label-text-alt link link-hover">Don't have an account? Sign up now!</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn