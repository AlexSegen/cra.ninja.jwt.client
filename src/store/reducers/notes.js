import { NOTES_REQUEST, NOTES_SUCCESS, NOTES_FAILURE, CREATE_NOTE_SUCCESS, CREATE_NOTE_FAILURE, DELETE_NOTE_SUCCESS, DELETE_NOTE_FAILURE } from "../actions/notes"

const initialState = {
    loading: false,
    notes: [],
    error: null,
    note: {
        title: "",
        content: ""
    }
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOTES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case NOTES_SUCCESS:
            return {
                ...state,
                loading: false,
                notes: action.payload,
                error: null
            }
        case NOTES_FAILURE:
            return {
                ...state,
                loading: false,
                notes: [],
                error: action.payload
            }
        case CREATE_NOTE_SUCCESS:
            return {
                ...state,
                loading: false,
                notes: [...state.notes, action.payload],
                error: null
            }
        case CREATE_NOTE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DELETE_NOTE_SUCCESS:
            return {
                ...state,
                loading: false,
                deleted: true,
                notes: [...state.notes.filter(item => item._id !== action.payload)],
                error: null
            }
        case DELETE_NOTE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}