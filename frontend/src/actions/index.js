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
