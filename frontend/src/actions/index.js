import { FETCH_USER } from '../constants/actionTypes'
import * as api from '../api'

export const fetchUser = () => async (dispatch) => {
    try {        
        const {data} = await api.fetchCurrentUser()
        dispatch({type:FETCH_USER, data})
    } catch (error) {
        console.log(error)
    }
}

export const handleToken = (token) => async dispatch => {
    try {
        const data = await api.apiStripe(token)
        dispatch({type:FETCH_USER, data})
    } catch (error) {
        console.log(error)
    }   
}

export const submitSurvey = (values, history) => async dispatch => {
        console.log('hello')
        const {data} = await api.submitSurvey(values)
        console.log("data")
        console.log(data)
        history.push('/surveys');
        dispatch({ type: FETCH_USER, payload: data })
}