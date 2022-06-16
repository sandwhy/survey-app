import { FETCH_USER } from "../constants/actionTypes"

const reducer = (state= null, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.data || false
        default:
            return state
    }
}

export default reducer