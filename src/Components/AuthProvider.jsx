import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({})

// Auth provider is used for handling storing the signed in user's information
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState()

    useEffect(() => {
        if (auth) {
            window.localStorage.setItem('data', JSON.stringify(auth))
        } else {
            const data = window.localStorage.getItem('data')

            if (data) {
                setAuth(JSON.parse(data))
            }
        }
    }, [auth])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext