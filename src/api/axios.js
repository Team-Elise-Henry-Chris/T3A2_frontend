import axios from 'axios'

const endpoint = import.meta.env.API_ENDPOINT || process.env.API_ENDPOINT

export default axios.create({
    baseURL: endpoint || 'http://localhost:4000'
})