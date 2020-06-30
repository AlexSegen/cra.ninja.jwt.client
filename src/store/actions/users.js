import ApiService from "../../services/api.service";

export const USERS_REQUEST = "USERS_REQUEST";
export const USERS_SUCCESS = "USERS_SUCCESS";
export const USERS_FAILURE = "USERS_FAILURE";
export const USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS";
export const USER_UPDATE_FAILURE = "USER_UPDATE_FAILURE";

export const usersRequest = () => {
  return {
    type: USERS_REQUEST,
  };
};

export const getUsersSuccess = (data) => {
  return {
    type: USERS_SUCCESS,
    payload: data
  };
};

export const getUserstFailure = (error) => {
  return {
    type: USERS_FAILURE,
    payload: error,
  };
};


export const updateUserSuccess = (data) => {
  return {
    type: USER_UPDATE_SUCCESS,
    payload: data
  };
};

export const updateUserFailure = (error) => {
  return {
    type: USER_UPDATE_FAILURE,
    payload: error,
  };
};

const getUsers = () => {

  return (dispatch) => {
    
    dispatch(usersRequest());

    ApiService.get('/admin/users').then(response => {
        
      dispatch(getUsersSuccess(response.data));

    }).catch(err => {
        dispatch(getUserstFailure(err.message));
    });

  };
};


const updateUser = user => {

  return (dispatch) => {
    
    dispatch(usersRequest());

    const { first_name, last_name, avatar, email,  permissions, role } = user;

    ApiService.put('/admin/users/' + user._id, { first_name, last_name, avatar, email,  permissions, role }).then(response => {
        
      dispatch(updateUserSuccess(response.data));

    }).catch(err => {
      if(err.response) {
        dispatch(updateUserFailure(err.response.data.message));
        return;
      }
      dispatch(updateUserFailure(err.message));
    });

  };
};

export { getUsers, updateUser }