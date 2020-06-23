import ApiService from "../../services/api.service";

export const NOTES_REQUEST = "NOTES_REQUEST";
export const NOTES_SUCCESS = "NOTES_SUCCESS";
export const NOTES_FAILURE = "NOTES_FAILURE";

export const notesRequest = () => {
  return {
    type: NOTES_REQUEST,
  };
};

export const getNotesSuccess = (data) => {
  return {
    type: NOTES_SUCCESS,
    payload: data
  };
};

export const getNotestFailure = (error) => {
  return {
    type: NOTES_FAILURE,
    payload: error,
  };
};

const getNotes = (note) => {

  return (dispatch) => {
    
    dispatch(notesRequest());

    ApiService.get('/notes').then(response => {
        
      dispatch(getNotesSuccess(response.data));

    }).catch(err => {
        if(err.response) {
          dispatch(getNotestFailure(err.response.data.message));
          return;  
        }
        dispatch(getNotestFailure(err.message));
    });

  };
};

export { getNotes }