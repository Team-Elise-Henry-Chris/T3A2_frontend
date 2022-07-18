import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import Alert from '../Alert'

const CREATE_ACCOUNT_URL = '/api/v1/user'

const CreateAccount = () => {
    const userRef = useRef()
    const nav = useNavigate()


    const [accountInfo, setAccountInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    })

    const [showError, setShowError] = useState(false)

    const handleChange = (event) => {
        setAccountInfo({ ...accountInfo, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await axios.post(CREATE_ACCOUNT_URL, accountInfo)
            setAccountInfo({ firstName: '', lastName: '', email: '', username: '', password: '', confirmPassword: '' })

            nav('/sign-in')
        } catch (err) {
            setShowError(true)
        }
    }

    useEffect(() => {
        userRef.current.focus()
    }, [])

    return (
        // TODO: Create form validation 
    
        <div className="relative flex flex-grow p-3">
            <form onSubmit={handleSubmit} className="hero bg-base-200 border rounded">
                <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Create Account!</h1>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            {/* {showError && <Alert status="error" message="Invalid email or password" />} */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input
                                    ref={userRef}
                                    type="text"
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
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="text"
                                    placeholder="JSmith45"
                                    className="input input-bordered"
                                    name="username"
                                    value={accountInfo.username}
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