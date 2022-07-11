import { FETCH_SURVEYS, FETCH_USER } from '../constants/actionTypes'
import * as api from '../api'
import whiteflag from '../white_flag/whiteflag'
import axios from 'axios'

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
        const {data} = await api.submitSurvey(values)
        history.push('/surveys');
        dispatch({ type: FETCH_USER, payload: data })
}

export const fetchSurveys = () => async dispatch => {
    const {data} = await api.fetchSurveys()

    dispatch({type: FETCH_SURVEYS, payload: data})
}