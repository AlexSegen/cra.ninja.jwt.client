import { USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE, USER_UPDATE_SUCCESS, USER_UPDATE_FAILURE } from "../actions/users"

const initialState = {
    loading: false,
    users: [],
    error: null
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: null
            }
        case USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
            case USER_UPDATE_SUCCESS:
                let tmp = state.users;
                const index = state.users.findIndex(item => item._id === action.payload._id);
                tmp[index] = action.payload;

                return {
                    ...state,
                    loading: false,
                    users: [...tmp],
                    error: null
                }
            case USER_UPDATE_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                }
        default:
            return state
    }
}