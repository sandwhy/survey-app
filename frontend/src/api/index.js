import axios from 'axios'

export const fetchCurrentUser = () => axios.get('/api/current_user')
export const apiStripe = (token) => axios.post('/api/stripe', token)