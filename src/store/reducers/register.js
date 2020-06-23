import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../actions/register"

const initialState = {
    loading: false,
    user: null,
    error: null,
    success: false
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                error: null
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload
            }
        default:
            return state
    }
}