import ApiService from "../../services/api.service";

export const NOTES_REQUEST = "NOTES_REQUEST";
export const NOTES_SUCCESS = "NOTES_SUCCESS";
export const NOTES_FAILURE = "NOTES_FAILURE";
export const CREATE_NOTE_SUCCESS = "CREATE_NOTE_SUCCESS";
export const CREATE_NOTE_FAILURE = "CREATE_NOTE_FAILURE";
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
export const DELETE_NOTE_FAILURE = "DELETE_NOTE_FAILURE";

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

export const createNoteSuccess = (data) => {
  return {
    type: CREATE_NOTE_SUCCESS,
    payload: data
  };
};

export const createNoteFailure = (error) => {
  return {
    type: CREATE_NOTE_FAILURE,
    payload: error,
  };
};

export const deleteNoteSuccess = (data) => {
  return {
    type: DELETE_NOTE_SUCCESS,
    payload: data
  };
};

export const deleteNoteFailure = (error) => {
  return {
    type: DELETE_NOTE_FAILURE,
    payload: error,
  };
};

const getNotes = () => {

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


const createNote = note => {

  return (dispatch) => {
    
    dispatch(notesRequest());

    const { title, content } = note;

    ApiService.post('/notes', { title, content }).then(response => {
        
      dispatch(createNoteSuccess(response.data));

    }).catch(err => {
      if(err.response) {
        dispatch(createNoteFailure(err.response.data.message));
        return;
      }
      dispatch(createNoteFailure(err.message));
    });

  };
};

const deleteNote = note => {

  return (dispatch) => {
    
    dispatch(notesRequest());

    ApiService.delete('/notes/' +  note._id).then(() => {
        
      dispatch(deleteNoteSuccess(note._id));

    }).catch(err => {
      if(err.response) {
        dispatch(deleteNoteFailure(err.response.data.message));
        return;
      }
      dispatch(deleteNoteFailure(err.message));
    });

  };
};

export { getNotes, createNote, deleteNote }