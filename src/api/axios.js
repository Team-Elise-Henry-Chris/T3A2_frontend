import axios from 'axios'

axios.interceptors.request.use((config) => {
    config.baseURL = import.meta.env.VITE_API_ENDPOINT || 'http://localhost:4000'
    const data = window.localStorage.getItem('data')

    if (data) {
        const token = JSON.parse(data)?.accessToken
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})


export default axios
