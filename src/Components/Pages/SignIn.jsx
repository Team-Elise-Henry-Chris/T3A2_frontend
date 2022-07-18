import { useState, useRef, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../AuthProvider'
import axios from '../../api/axios'
import Alert from '../Alert'

const LOGIN_URL = '/api/v1/user'

const SignIn = () => {
    const { setAuth } = useContext(AuthContext)
    const userRef = useRef()
    const nav = useNavigate()

    const [signInInfo, setSignInInfo] = useState({
        email: '',
        password: '',
    })

    const [showError, setShowError] = useState(false)

    const handleChange = (event) => {
        setSignInInfo({ ...signInInfo, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.put(LOGIN_URL, signInInfo)
            setSignInInfo({ email: '', password: '' })
            const accessToken = response.data?.accessToken
            const role = response.data?.role
            setAuth({ email: signInInfo.email, role, accessToken })

            nav('/')

        } catch (err) {
            setShowError(true)
            setSignInInfo({ ...signInInfo, password: '' })
        }

    }

    useEffect(() => {
        userRef.current.focus()
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
                                        ref={userRef}
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