import { FETCH_SURVEYS } from "../constants/actionTypes"

const reducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_SURVEYS:
            return action.payload
        default:
            return state
    }
}

export default reducer