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