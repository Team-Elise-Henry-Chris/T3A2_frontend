import axios from 'axios'

const data = JSON.parse(window.localStorage.getItem('data'))

export default axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT || 'http://localhost:4000',
    headers: { Authorization: `Bearer ${data?.accessToken}` }
})