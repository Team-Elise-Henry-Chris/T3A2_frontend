import axios from 'axios'

export default axios.create({
    baseURL: import.meta.env.API_ENDPOINT || 'http://localhost:4000'
})