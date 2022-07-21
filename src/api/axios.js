import axios from 'axios'
import jwt_decode from 'jwt-decode'

axios.interceptors.request.use(async (config) => {
    config.baseURL = import.meta.env.VITE_API_ENDPOINT || 'http://localhost:4000'

    const data = window.localStorage.getItem('data')

    if (data) {
        const token = JSON.parse(data)?.accessToken
        const decoded = jwt_decode(token)

        if (decoded.exp < Math.floor(new Date() / 1000)) { // If token is expired
            // Call /api/v1/user/refresh
        }

        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})


export default axios
