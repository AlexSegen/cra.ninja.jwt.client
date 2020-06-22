import { NOTES_REQUEST, NOTES_SUCCESS, NOTES_FAILURE } from "../actions/notes"

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
        default:
            return state
    }
}