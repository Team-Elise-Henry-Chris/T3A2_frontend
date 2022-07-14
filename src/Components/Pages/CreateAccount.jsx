import { useState } from 'react'

const CreateAccount = () => {
    const [accountInfo, setAccountInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (event) => {
        setAccountInfo({ ...accountInfo, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        // TODO: Axios call to backend
    }

    return (
        <div className="relative flex flex-grow p-3">
            <form onSubmit={handleSubmit} className="hero bg-base-200 border rounded">
                <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Create Account!</h1>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text"
                                    placeholder="John"
                                    className="input input-bordered"
                                    name="firstName"
                                    value={accountInfo.firstName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text"
                                    placeholder="Smith"
                                    className="input input-bordered"
                                    name="lastName"
                                    value={accountInfo.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text"
                                    placeholder="JohnSmith@gmail.com"
                                    className="input input-bordered"
                                    name="email"
                                    value={accountInfo.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                    name="password"
                                    value={accountInfo.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password"
                                    placeholder="Confirm Password"
                                    className="input input-bordered"
                                    name="confirmPassword"
                                    value={accountInfo.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Create Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateAccount