import { authService } from "../../services/auth.service";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const logout = () => {
    return {
        type: LOGOUT
    };
}

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

const Auth = (email, password) => {

  return (dispatch) => {
    
    dispatch(loginRequest());

    authService.login(email, password).then(data => {
        
        dispatch(loginSuccess(data));

    }).catch(err => {
        dispatch(loginFailure(err.message));
    });

  };
};

export default Auth;
