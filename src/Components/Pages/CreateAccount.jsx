import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import Alert from '../Alert'

const CREATE_ACCOUNT_URL = '/api/v1/user'

const CreateAccount = () => {
    const userRef = useRef()
    const pwdRef = useRef()
    const confirmPwdRef = useRef()
    const nav = useNavigate()


    const [accountInfo, setAccountInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    })

    const [errorMsg, setErrorMsg] = useState('')
    const [pwdErrorMsg, setPwdErrorMsg] = useState([])
    const [showPwdError, setShowPwdError] = useState(false)

    const handleChange = (event) => {
        if (event.target.name === 'password' || event.target.name === 'confirmPassword') {
            setShowPwdError(true)
        }

        setAccountInfo({ ...accountInfo, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setErrorMsg('')

        try {
            await axios.post(CREATE_ACCOUNT_URL, accountInfo)
            setAccountInfo({ firstName: '', lastName: '', email: '', username: '', password: '', confirmPassword: '' })

            nav('/sign-in')
        } catch (err) {

            if (err.response.data.includes('dup key: { username')) {
                setErrorMsg('Username is already in use')
            } else if (err.response.data.includes('dup key: { email')) {
                setErrorMsg('Email is already in use')
            }
            console.log(err)
        }
    }

    useEffect(() => {
        if (!showPwdError) {
            return
        }

        const messages = []

        if (pwdRef.current.value.length < 8) {
            messages.push('Minimum password length is 8 characters')
        } else if (pwdRef.current.value !== confirmPwdRef.current.value) {
            messages.push('Passwords must match')
        }

        setPwdErrorMsg(messages)

    }, [pwdRef.current?.value, confirmPwdRef.current?.value])

    useEffect(() => {
        userRef.current.focus()
    }, [])

    return (
        
        <div className="relative flex flex-grow p-3">
            <form onSubmit={handleSubmit} className="hero bg-base-200 border rounded">
                <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Create Account!</h1>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            {errorMsg && <Alert status="error" message={errorMsg} />}
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
                                    required
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
                                    required
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
                                    required
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
                                    required
                                />
                            </div>

                            <div className="form-control">
                                {pwdErrorMsg.length > 0 && <Alert status="error" message={pwdErrorMsg} />}
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    ref={pwdRef}
                                    placeholder="Password"
                                    className="input input-bordered"
                                    name="password"
                                    value={accountInfo.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password"
                                    ref={confirmPwdRef}
                                    placeholder="Confirm Password"
                                    className="input input-bordered"
                                    name="confirmPassword"
                                    value={accountInfo.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary" disabled={pwdErrorMsg.length !== 0 || pwdRef.current?.value === ''}>Create Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateAccount