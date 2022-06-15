import { FETCH_USER } from "../constants/actionTypes"

const reducer = (state={}, action) => {
    switch (action.type) {
        case FETCH_USER: 
            localStorage.setItem("current_user", JSON.stringify({...action?.data}))

            return {...state, current_user: action?.data}
        default:
            return state
    }
}

export default reducer