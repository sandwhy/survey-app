import axios from 'axios'

const url1 = ""
const url2 = "http://localhost:5000"

const API = axios.create({baseURL:url2})

export const fetchCurrentUser = () => API.get('/api/current_user')