import axios from 'axios'
// import whiteflag from '../white_flag/whiteflag'

export const fetchCurrentUser = () => axios.get('/api/current_user')
// export const apiStripe = (token) => axios.post('/api/stripe', token, { Authorization: "Bearer " + whiteflag.stripesecretKey })
export const apiStripe = (token) => axios.post('/api/stripe', token, { Authorization: "Bearer " + process.env.stripseckey })
export const submitSurvey = (values) => axios.post('/api/surveys', values)