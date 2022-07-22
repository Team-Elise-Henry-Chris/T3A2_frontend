import { useState, useRef, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../AuthProvider'
import axios from '../../api/axios'
import Alert from '../Alert'
import jwt_decode from 'jwt-decode'

const LOGIN_URL = '/api/v1/user'

const SignIn = () => {
    // Use auth context for setting after successful sign in
    const { setAuth } = useContext(AuthContext)
    const emailRef = useRef()
    const nav = useNavigate()

    // Sign in form state
    const [signInInfo, setSignInInfo] = useState({
        email: '',
        password: '',
    })

    // State for showing errors
    const [showError, setShowError] = useState(false)

    // Handles the form updating
    const handleChange = (event) => {
        setSignInInfo({ ...signInInfo, [event.target.name]: event.target.value })
    }

    // Handles submitting the form
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.put(LOGIN_URL, signInInfo)
            const accessToken = response.data?.accessToken

            if (accessToken) {
                const decoded = jwt_decode(accessToken)
                setAuth({ email: signInInfo.email, id: decoded.id, role: decoded.role, accessToken })
            }
            nav('/')
        } catch (err) {
            setShowError(true)
            setSignInInfo({ ...signInInfo, password: '' })
        }

    }

    // Sets the focus to the email field on load
    useEffect(() => {
        emailRef.current.focus()
    }, [])

    return (
        <>
            <div className="relative flex flex-grow p-3">
                <form onSubmit={handleSubmit} className="hero bg-base-200 border rounded ">
                    <div className="hero-content flex-col w-full">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Sign In!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                {showError && <Alert status="error" message="Invalid email or password" />}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        ref={emailRef}
                                        type="text"
                                        placeholder="email"
                                        className="input input-bordered"
                                        name="email"
                                        value={signInInfo.email}
                                        onChange={handleChange}
                                        required
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
                                        required
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
        </>
    )
}

export default SignIn