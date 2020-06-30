import { NOTES_REQUEST, NOTES_SUCCESS, NOTES_FAILURE, CREATE_NOTE_SUCCESS, CREATE_NOTE_FAILURE } from "../actions/notes"

const initialState = {
    loading: false,
    notes: [],
    error: null
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
        default:
            return state
    }
}