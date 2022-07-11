import axios from 'axios'
// import whiteflag from "../white_flag/whiteFlg"
import whiteflag from '../white_flag/whiteflag'

export const fetchCurrentUser = () => axios.get('/api/current_user')
export const apiStripe = (token) => axios.post('/api/stripe', token, {headers: { authorization: "Bearer " + whiteflag.stripesecretKey }})
export const submitSurvey = (values) => axios.post('/api/surveys', values)
export const fetchSurveys = () => axios.get('/api/surveys')