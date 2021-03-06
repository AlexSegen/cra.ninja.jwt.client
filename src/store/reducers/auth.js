import { SetUser, TokenService } from "../../services/storage.service";
import { authService } from "../../services/auth.service";
//import {  } from "../../services/storage.service";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/auth"

const initialState = {
    loading: false,
    user: SetUser.getUser(),
    permissions: SetUser.getPermissions(),
    isAuthenticated: !!TokenService.getToken(),
    token: !!TokenService.getToken(),
    error: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                permissions: SetUser.getPermissions(),
                user: action.payload.user,
                token: action.payload.token,
                error: null
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload
            }
        case LOGOUT:
            authService.logout();
            return {
                ...initialState,
                loading: false,
                user: null,
                isAuthenticated: false
            }
        default:
            return state
    }
}